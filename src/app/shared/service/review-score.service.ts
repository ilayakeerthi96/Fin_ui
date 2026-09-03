import { Injectable } from '@angular/core';
import { HttpClient, HttpBackend } from '@angular/common/http';
import { Observable, switchMap, map, throwError } from 'rxjs';

// Reviews-main Python API base URL (FastAPI default port)
const REVIEWS_API = 'http://localhost:8000/api/v1';

@Injectable({ providedIn: 'root' })
export class ReviewScoreService {

  private http: HttpClient;

  // Bypass JWT interceptor — Python API doesn't use JWT
  constructor(handler: HttpBackend) {
    this.http = new HttpClient(handler);
  }

  /**
   * Full 2-step flow:
   *   Step 1: search-locations → find the Google Maps place_id for the company
   *   Step 2: fetch-by-place  → fetch reviews + run AI analysis
   */
  fetchSupplierReviewScore(companyName: string, address: string = ''): Observable<ReviewScoreResult> {
    return this.http.post<any>(`${REVIEWS_API}/supplier/search-locations`, {
      company_name: companyName,
      address: address
    }).pipe(
      switchMap((searchRes: any) => {
        const locations: any[] = searchRes?.locations || [];

        if (searchRes?.skip_maps || locations.length === 0) {
          return throwError(() => ({
            userMessage: `"${companyName}" was not found on Google Maps. Score this criterion manually.`
          }));
        }

        const first = locations[0];

        return this.http.post<any>(`${REVIEWS_API}/supplier/fetch-by-place`, {
          place_id:      first.place_id,
          company_name:  companyName,
          address:       first.address || address || '',
          rating:        first.rating         || null,
          total_ratings: first.user_ratings_total || null,
          max_reviews:   25,
          filter_months: 24,
          review_source: 'customer'
        });
      }),
      map((res: any) => {
        const reviews: any[] = res?.reviews || [];
        const positive = reviews.filter(r => r.sentiment_label === 'POSITIVE').length;
        const negative = reviews.filter(r => r.sentiment_label === 'NEGATIVE').length;
        const neutral  = reviews.filter(r => r.sentiment_label === 'NEUTRAL').length;

        // Star score: Google rating (1-5) rounded to integer
        const googleRating = res.google_rating || null;
        const starScore: number | null = googleRating
          ? Math.max(1, Math.min(5, Math.round(googleRating)))
          : null;

        // Comments/AI score: llm_score (0-100) → 1-5
        const commentsScore: number = this.llmScoreToRating(res.llm_score || 50);

        // Combined: average of both, or whichever is available
        const combinedScore: number = starScore
          ? Math.max(1, Math.min(5, Math.round((starScore + commentsScore) / 2)))
          : commentsScore;

        return {
          companyName:        res.company_name   || companyName,
          googleRating:       googleRating,
          totalGoogleRatings: res.total_google_ratings || null,
          reviewsFetched:     res.reviews_fetched  || reviews.length,
          genuineReviews:     res.genuine_reviews  || 0,
          fakeReviews:        res.fake_reviews     || 0,
          sourcesUsed:        res.sources_used     || [],
          dataQuality:        res.data_quality     || 'LOW',
          dataWarning:        res.data_warning     || null,
          aiSummary:          res.ai_summary       || '',
          llmScore:           res.llm_score        || 50,
          llmScoreLabel:      res.llm_score_label  || 'AVERAGE',
          llmScoreReason:     res.llm_score_reason || '',
          positiveCount:      positive,
          negativeCount:      negative,
          neutralCount:       neutral,
          starScore:          starScore,       // 1–5 from Google ⭐ (null if no rating)
          commentsScore:      commentsScore,   // 1–5 from AI/LLM comments analysis
          criterionRating:    combinedScore    // average of both → auto-fills criterion
        } as ReviewScoreResult;
      })
    );
  }

  /**
   * Convert llm_score (0–100) → criterion rawScore (1–5)
   *   0–20   → 1
   *   21–40  → 2
   *   41–60  → 3
   *   61–80  → 4
   *   81–100 → 5
   */
  llmScoreToRating(llmScore: number): number {
    const s = Math.max(0, Math.min(100, llmScore));
    return Math.max(1, Math.min(5, Math.ceil(s / 20)));
  }
}

export interface ReviewScoreResult {
  companyName:        string;
  googleRating:       number | null;
  totalGoogleRatings: number | null;
  reviewsFetched:     number;
  genuineReviews:     number;
  fakeReviews:        number;
  sourcesUsed:        string[];
  dataQuality:        string;
  dataWarning:        string | null;
  aiSummary:          string;
  llmScore:           number;
  llmScoreLabel:      string;
  llmScoreReason:     string;
  positiveCount:      number;
  negativeCount:      number;
  neutralCount:       number;
  starScore:          number | null;  // 1–5 from Google star rating
  commentsScore:      number;         // 1–5 from AI/LLM comments analysis (llm_score/20)
  criterionRating:    number;         // average of starScore + commentsScore → auto-fills input
}
