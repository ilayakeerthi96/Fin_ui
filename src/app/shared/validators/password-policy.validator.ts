import { AbstractControl, ValidationErrors } from '@angular/forms';

/**
 * The password rules the backend enforces, mirrored here so the user sees which rule they
 * have not met yet instead of only finding out when the request comes back rejected.
 *
 * Kept in one place because both password screens need it — "forgot password" on the login
 * page and "change password" once signed in — and the two silently disagreeing is exactly
 * how the change-password screen ended up asking for 6 characters while the backend required
 * 8 with a symbol.
 *
 * Must stay in step with PASSWORD_POLICY in PasswordResetService.java.
 */
export function passwordPolicyValidator() {
  return (control: AbstractControl): ValidationErrors | null => {
    const val = control.value || '';
    const errors: ValidationErrors = {};

    if (val.length < 8) errors['minLength'] = true;
    if (!/[A-Z]/.test(val)) errors['uppercase'] = true;
    if (!/[a-z]/.test(val)) errors['lowercase'] = true;
    if (!/\d/.test(val)) errors['digit'] = true;
    if (!/[!@#$%^&*()_+\-=\[\]{};':",./<>?]/.test(val)) errors['symbol'] = true;

    return Object.keys(errors).length ? errors : null;
  };
}

/** Group-level check that the "confirm" field matches the new password. */
export function passwordMatchValidator(newPassKey = 'newPassword', confirmKey = 'confirmPassword') {
  return (group: AbstractControl): ValidationErrors | null => {
    const np = group.get(newPassKey)?.value;
    const cp = group.get(confirmKey)?.value;
    return np && cp && np !== cp ? { passwordsMismatch: true } : null;
  };
}
