import {
  DefaultValueAccessor,
  FormArrayName,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormGroupName,
  MaxLengthValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-E33XJXHD.js";
import {
  MessageService
} from "./chunk-4TRDTO5Y.js";
import {
  DataService,
  environment
} from "./chunk-OQIPAMNU.js";
import "./chunk-JKMYCEKN.js";
import {
  ActivatedRoute,
  CommonModule,
  Component,
  HttpClient,
  HttpHeaders,
  Injectable,
  NgForOf,
  NgIf,
  Router,
  catchError,
  map,
  of,
  setClassMetadata,
  tap,
  throwError,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-BCCUO726.js";
import {
  __async,
  __objRest,
  __spreadProps,
  __spreadValues
} from "./chunk-SO7Q7VKX.js";

// src/app/shared/data/country-state.data.ts
var COUNTRY_STATE_CITY_DATA = [
  {
    name: "Afghanistan",
    code: "AF",
    states: [
      { name: "Kabul", cities: [{ name: "Kabul", postalCode: "1001" }, { name: "Kart-e-Seh", postalCode: "1003" }, { name: "Khair Khana", postalCode: "1005" }] },
      { name: "Herat", cities: [{ name: "Herat", postalCode: "3001" }, { name: "Injil", postalCode: "3002" }] },
      { name: "Kandahar", cities: [{ name: "Kandahar", postalCode: "3801" }, { name: "Spin Boldak", postalCode: "3802" }] },
      { name: "Balkh", cities: [{ name: "Mazar-i-Sharif", postalCode: "2001" }, { name: "Dehdadi", postalCode: "2002" }] },
      { name: "Nangarhar", cities: [{ name: "Jalalabad", postalCode: "2601" }, { name: "Behsud", postalCode: "2602" }] },
      { name: "Baghlan", cities: [{ name: "Pul-e-Khumri", postalCode: "3601" }] },
      { name: "Kunduz", cities: [{ name: "Kunduz", postalCode: "3201" }] },
      { name: "Ghazni", cities: [{ name: "Ghazni", postalCode: "2401" }] },
      { name: "Helmand", cities: [{ name: "Lashkar Gah", postalCode: "3901" }] },
      { name: "Paktia", cities: [{ name: "Gardez", postalCode: "2801" }] }
    ]
  },
  {
    name: "Albania",
    code: "AL",
    states: [
      { name: "Tirana", cities: [{ name: "Tirana", postalCode: "1001" }, { name: "Kamez", postalCode: "1031" }, { name: "Vora", postalCode: "1032" }] },
      { name: "Durr\xEBs", cities: [{ name: "Durr\xEBs", postalCode: "2001" }, { name: "Shijak", postalCode: "2002" }] },
      { name: "Vlor\xEB", cities: [{ name: "Vlor\xEB", postalCode: "9401" }, { name: "Sarand\xEB", postalCode: "9701" }] },
      { name: "Shkod\xEBr", cities: [{ name: "Shkod\xEBr", postalCode: "4001" }] },
      { name: "Fier", cities: [{ name: "Fier", postalCode: "9301" }] },
      { name: "Kor\xE7\xEB", cities: [{ name: "Kor\xE7\xEB", postalCode: "7001" }] },
      { name: "Elbasan", cities: [{ name: "Elbasan", postalCode: "3001" }] },
      { name: "Berat", cities: [{ name: "Berat", postalCode: "5001" }] }
    ]
  },
  {
    name: "Algeria",
    code: "DZ",
    states: [
      { name: "Algiers", cities: [{ name: "Algiers", postalCode: "16000" }, { name: "Bab El Oued", postalCode: "16001" }, { name: "Hydra", postalCode: "16035" }, { name: "El Harrach", postalCode: "16040" }] },
      { name: "Oran", cities: [{ name: "Oran", postalCode: "31000" }, { name: "Es Senia", postalCode: "31003" }] },
      { name: "Constantine", cities: [{ name: "Constantine", postalCode: "25000" }, { name: "El Khroub", postalCode: "25003" }] },
      { name: "Annaba", cities: [{ name: "Annaba", postalCode: "23000" }] },
      { name: "Blida", cities: [{ name: "Blida", postalCode: "09000" }, { name: "Boufarik", postalCode: "09005" }] },
      { name: "S\xE9tif", cities: [{ name: "S\xE9tif", postalCode: "19000" }] },
      { name: "Batna", cities: [{ name: "Batna", postalCode: "05000" }] },
      { name: "Tlemcen", cities: [{ name: "Tlemcen", postalCode: "13000" }] }
    ]
  },
  {
    name: "Argentina",
    code: "AR",
    states: [
      { name: "Buenos Aires", cities: [{ name: "Buenos Aires", postalCode: "C1000" }, { name: "La Plata", postalCode: "B1900" }, { name: "Mar del Plata", postalCode: "B7600" }, { name: "Quilmes", postalCode: "B1878" }] },
      { name: "C\xF3rdoba", cities: [{ name: "C\xF3rdoba", postalCode: "X5000" }, { name: "Villa Carlos Paz", postalCode: "X5152" }] },
      { name: "Santa Fe", cities: [{ name: "Rosario", postalCode: "S2000" }, { name: "Santa Fe", postalCode: "S3000" }] },
      { name: "Mendoza", cities: [{ name: "Mendoza", postalCode: "M5500" }, { name: "San Rafael", postalCode: "M5600" }] },
      { name: "Tucum\xE1n", cities: [{ name: "San Miguel de Tucum\xE1n", postalCode: "T4000" }] },
      { name: "Salta", cities: [{ name: "Salta", postalCode: "A4400" }] },
      { name: "Misiones", cities: [{ name: "Posadas", postalCode: "N3300" }] },
      { name: "Chaco", cities: [{ name: "Resistencia", postalCode: "H3500" }] }
    ]
  },
  {
    name: "Armenia",
    code: "AM",
    states: [
      { name: "Yerevan", cities: [{ name: "Yerevan", postalCode: "0001" }, { name: "Nor Nork", postalCode: "0047" }, { name: "Erebuni", postalCode: "0085" }] },
      { name: "Ararat", cities: [{ name: "Artashat", postalCode: "0901" }, { name: "Ararat", postalCode: "0903" }] },
      { name: "Kotayk", cities: [{ name: "Hrazdan", postalCode: "2301" }, { name: "Abovyan", postalCode: "2201" }] },
      { name: "Lori", cities: [{ name: "Vanadzor", postalCode: "2001" }] },
      { name: "Syunik", cities: [{ name: "Kapan", postalCode: "3301" }] }
    ]
  },
  {
    name: "Australia",
    code: "AU",
    states: [
      { name: "New South Wales", cities: [{ name: "Sydney", postalCode: "2000" }, { name: "Newcastle", postalCode: "2300" }, { name: "Wollongong", postalCode: "2500" }, { name: "Parramatta", postalCode: "2150" }, { name: "Penrith", postalCode: "2750" }] },
      { name: "Victoria", cities: [{ name: "Melbourne", postalCode: "3000" }, { name: "Geelong", postalCode: "3220" }, { name: "Ballarat", postalCode: "3350" }, { name: "Bendigo", postalCode: "3550" }] },
      { name: "Queensland", cities: [{ name: "Brisbane", postalCode: "4000" }, { name: "Gold Coast", postalCode: "4217" }, { name: "Townsville", postalCode: "4810" }, { name: "Cairns", postalCode: "4870" }] },
      { name: "Western Australia", cities: [{ name: "Perth", postalCode: "6000" }, { name: "Fremantle", postalCode: "6160" }, { name: "Bunbury", postalCode: "6230" }] },
      { name: "South Australia", cities: [{ name: "Adelaide", postalCode: "5000" }, { name: "Mount Gambier", postalCode: "5290" }] },
      { name: "Tasmania", cities: [{ name: "Hobart", postalCode: "7000" }, { name: "Launceston", postalCode: "7250" }] },
      { name: "Australian Capital Territory", cities: [{ name: "Canberra", postalCode: "2600" }, { name: "Belconnen", postalCode: "2617" }] },
      { name: "Northern Territory", cities: [{ name: "Darwin", postalCode: "0800" }, { name: "Alice Springs", postalCode: "0870" }] }
    ]
  },
  {
    name: "Austria",
    code: "AT",
    states: [
      { name: "Vienna", cities: [{ name: "Vienna", postalCode: "1010" }, { name: "Favoriten", postalCode: "1100" }, { name: "Donaustadt", postalCode: "1220" }] },
      { name: "Lower Austria", cities: [{ name: "St. P\xF6lten", postalCode: "3100" }, { name: "Wiener Neustadt", postalCode: "2700" }, { name: "Krems", postalCode: "3500" }] },
      { name: "Upper Austria", cities: [{ name: "Linz", postalCode: "4020" }, { name: "Wels", postalCode: "4600" }, { name: "Steyr", postalCode: "4400" }] },
      { name: "Styria", cities: [{ name: "Graz", postalCode: "8010" }, { name: "Leoben", postalCode: "8700" }] },
      { name: "Tyrol", cities: [{ name: "Innsbruck", postalCode: "6020" }, { name: "Kufstein", postalCode: "6330" }] },
      { name: "Salzburg", cities: [{ name: "Salzburg", postalCode: "5020" }, { name: "Hallein", postalCode: "5400" }] },
      { name: "Carinthia", cities: [{ name: "Klagenfurt", postalCode: "9020" }, { name: "Villach", postalCode: "9500" }] },
      { name: "Vorarlberg", cities: [{ name: "Bregenz", postalCode: "6900" }, { name: "Dornbirn", postalCode: "6850" }] },
      { name: "Burgenland", cities: [{ name: "Eisenstadt", postalCode: "7000" }] }
    ]
  },
  {
    name: "Azerbaijan",
    code: "AZ",
    states: [
      { name: "Baku", cities: [{ name: "Baku", postalCode: "AZ1000" }, { name: "Sabunchu", postalCode: "AZ1100" }, { name: "Surakhani", postalCode: "AZ1200" }] },
      { name: "Ganja", cities: [{ name: "Ganja", postalCode: "AZ2000" }] },
      { name: "Sumgayit", cities: [{ name: "Sumgayit", postalCode: "AZ5000" }] },
      { name: "Nakhchivan", cities: [{ name: "Nakhchivan", postalCode: "AZ7000" }] },
      { name: "Mingachevir", cities: [{ name: "Mingachevir", postalCode: "AZ4500" }] }
    ]
  },
  {
    name: "Bahrain",
    code: "BH",
    states: [
      { name: "Capital", cities: [{ name: "Manama", postalCode: "317" }, { name: "Juffair", postalCode: "319" }] },
      { name: "Northern", cities: [{ name: "Muharraq", postalCode: "200" }, { name: "Hidd", postalCode: "212" }] },
      { name: "Southern", cities: [{ name: "Riffa", postalCode: "931" }, { name: "Isa Town", postalCode: "806" }] },
      { name: "Central", cities: [{ name: "Manama Central", postalCode: "410" }] },
      { name: "Muharraq", cities: [{ name: "Muharraq City", postalCode: "201" }] }
    ]
  },
  {
    name: "Bangladesh",
    code: "BD",
    states: [
      { name: "Dhaka", cities: [{ name: "Dhaka", postalCode: "1000" }, { name: "Narayanganj", postalCode: "1400" }, { name: "Gazipur", postalCode: "1700" }, { name: "Savar", postalCode: "1340" }] },
      { name: "Chittagong", cities: [{ name: "Chittagong", postalCode: "4000" }, { name: "Cox's Bazar", postalCode: "4700" }, { name: "Comilla", postalCode: "3500" }] },
      { name: "Sylhet", cities: [{ name: "Sylhet", postalCode: "3100" }, { name: "Moulvibazar", postalCode: "3200" }] },
      { name: "Khulna", cities: [{ name: "Khulna", postalCode: "9000" }, { name: "Jessore", postalCode: "7400" }] },
      { name: "Rajshahi", cities: [{ name: "Rajshahi", postalCode: "6000" }, { name: "Bogra", postalCode: "5800" }] },
      { name: "Barisal", cities: [{ name: "Barisal", postalCode: "8200" }] },
      { name: "Rangpur", cities: [{ name: "Rangpur", postalCode: "5400" }] },
      { name: "Mymensingh", cities: [{ name: "Mymensingh", postalCode: "2200" }] }
    ]
  },
  {
    name: "Belgium",
    code: "BE",
    states: [
      { name: "Brussels", cities: [{ name: "Brussels", postalCode: "1000" }, { name: "Anderlecht", postalCode: "1070" }, { name: "Ixelles", postalCode: "1050" }, { name: "Molenbeek", postalCode: "1080" }] },
      { name: "Antwerp", cities: [{ name: "Antwerp", postalCode: "2000" }, { name: "Mechelen", postalCode: "2800" }, { name: "Lier", postalCode: "2500" }] },
      { name: "East Flanders", cities: [{ name: "Ghent", postalCode: "9000" }, { name: "Aalst", postalCode: "9300" }] },
      { name: "West Flanders", cities: [{ name: "Bruges", postalCode: "8000" }, { name: "Kortrijk", postalCode: "8500" }] },
      { name: "Flemish Brabant", cities: [{ name: "Leuven", postalCode: "3000" }, { name: "Vilvoorde", postalCode: "1800" }] },
      { name: "Li\xE8ge", cities: [{ name: "Li\xE8ge", postalCode: "4000" }, { name: "Verviers", postalCode: "4800" }] },
      { name: "Hainaut", cities: [{ name: "Charleroi", postalCode: "6000" }, { name: "Mons", postalCode: "7000" }] },
      { name: "Namur", cities: [{ name: "Namur", postalCode: "5000" }] },
      { name: "Luxembourg", cities: [{ name: "Arlon", postalCode: "6700" }] }
    ]
  },
  {
    name: "Bolivia",
    code: "BO",
    states: [
      { name: "Santa Cruz", cities: [{ name: "Santa Cruz de la Sierra", postalCode: "SC-000" }, { name: "Montero", postalCode: "SC-001" }] },
      { name: "La Paz", cities: [{ name: "La Paz", postalCode: "LP-000" }, { name: "El Alto", postalCode: "LP-001" }] },
      { name: "Cochabamba", cities: [{ name: "Cochabamba", postalCode: "CB-000" }, { name: "Sacaba", postalCode: "CB-001" }] },
      { name: "Oruro", cities: [{ name: "Oruro", postalCode: "OR-000" }] },
      { name: "Potos\xED", cities: [{ name: "Potos\xED", postalCode: "PO-000" }] },
      { name: "Tarija", cities: [{ name: "Tarija", postalCode: "TJ-000" }] }
    ]
  },
  {
    name: "Brazil",
    code: "BR",
    states: [
      { name: "S\xE3o Paulo", cities: [{ name: "S\xE3o Paulo", postalCode: "01310-100" }, { name: "Campinas", postalCode: "13010-001" }, { name: "Santos", postalCode: "11010-001" }, { name: "Ribeir\xE3o Preto", postalCode: "14010-001" }] },
      { name: "Rio de Janeiro", cities: [{ name: "Rio de Janeiro", postalCode: "20040-020" }, { name: "Niter\xF3i", postalCode: "24020-005" }, { name: "Petr\xF3polis", postalCode: "25610-060" }] },
      { name: "Minas Gerais", cities: [{ name: "Belo Horizonte", postalCode: "30110-001" }, { name: "Uberl\xE2ndia", postalCode: "38400-902" }, { name: "Contagem", postalCode: "32010-020" }] },
      { name: "Bahia", cities: [{ name: "Salvador", postalCode: "40010-000" }, { name: "Feira de Santana", postalCode: "44001-008" }] },
      { name: "Paran\xE1", cities: [{ name: "Curitiba", postalCode: "80010-010" }, { name: "Londrina", postalCode: "86010-000" }] },
      { name: "Rio Grande do Sul", cities: [{ name: "Porto Alegre", postalCode: "90010-000" }, { name: "Caxias do Sul", postalCode: "95010-001" }] },
      { name: "Pernambuco", cities: [{ name: "Recife", postalCode: "50010-000" }, { name: "Caruaru", postalCode: "55000-000" }] },
      { name: "Cear\xE1", cities: [{ name: "Fortaleza", postalCode: "60010-000" }] },
      { name: "Par\xE1", cities: [{ name: "Bel\xE9m", postalCode: "66010-000" }] },
      { name: "Amazonas", cities: [{ name: "Manaus", postalCode: "69010-000" }] },
      { name: "Goi\xE1s", cities: [{ name: "Goi\xE2nia", postalCode: "74010-010" }] },
      { name: "Distrito Federal", cities: [{ name: "Bras\xEDlia", postalCode: "70040-010" }] }
    ]
  },
  {
    name: "Canada",
    code: "CA",
    states: [
      { name: "Ontario", cities: [{ name: "Toronto", postalCode: "M5H 2N2" }, { name: "Ottawa", postalCode: "K1P 1J1" }, { name: "Mississauga", postalCode: "L5B 3C1" }, { name: "Hamilton", postalCode: "L8N 1A1" }, { name: "London", postalCode: "N6A 1E1" }] },
      { name: "Quebec", cities: [{ name: "Montreal", postalCode: "H3A 1A1" }, { name: "Quebec City", postalCode: "G1R 2J5" }, { name: "Laval", postalCode: "H7S 2G6" }] },
      { name: "British Columbia", cities: [{ name: "Vancouver", postalCode: "V6B 1A1" }, { name: "Victoria", postalCode: "V8W 1A1" }, { name: "Surrey", postalCode: "V3T 1A1" }] },
      { name: "Alberta", cities: [{ name: "Calgary", postalCode: "T2P 1J9" }, { name: "Edmonton", postalCode: "T5J 0N3" }, { name: "Red Deer", postalCode: "T4N 1G9" }] },
      { name: "Manitoba", cities: [{ name: "Winnipeg", postalCode: "R3C 0V8" }, { name: "Brandon", postalCode: "R7A 0A1" }] },
      { name: "Saskatchewan", cities: [{ name: "Saskatoon", postalCode: "S7K 0J5" }, { name: "Regina", postalCode: "S4P 0A1" }] },
      { name: "Nova Scotia", cities: [{ name: "Halifax", postalCode: "B3J 1A1" }] },
      { name: "New Brunswick", cities: [{ name: "Moncton", postalCode: "E1C 1A1" }, { name: "Fredericton", postalCode: "E3B 1A1" }] },
      { name: "Newfoundland and Labrador", cities: [{ name: "St. John's", postalCode: "A1C 5H7" }] },
      { name: "Prince Edward Island", cities: [{ name: "Charlottetown", postalCode: "C1A 1A1" }] }
    ]
  },
  {
    name: "Chile",
    code: "CL",
    states: [
      { name: "Metropolitana de Santiago", cities: [{ name: "Santiago", postalCode: "8320000" }, { name: "Maip\xFA", postalCode: "9250000" }, { name: "Las Condes", postalCode: "7550000" }, { name: "Providencia", postalCode: "7500000" }] },
      { name: "Valpara\xEDso", cities: [{ name: "Valpara\xEDso", postalCode: "2360000" }, { name: "Vi\xF1a del Mar", postalCode: "2520000" }] },
      { name: "Biob\xEDo", cities: [{ name: "Concepci\xF3n", postalCode: "4030000" }, { name: "Talcahuano", postalCode: "4030000" }] },
      { name: "La Araucan\xEDa", cities: [{ name: "Temuco", postalCode: "4780000" }] },
      { name: "Los Lagos", cities: [{ name: "Puerto Montt", postalCode: "5480000" }] }
    ]
  },
  {
    name: "China",
    code: "CN",
    states: [
      { name: "Beijing", cities: [{ name: "Beijing", postalCode: "100000" }, { name: "Chaoyang", postalCode: "100020" }, { name: "Haidian", postalCode: "100080" }, { name: "Dongcheng", postalCode: "100010" }] },
      { name: "Shanghai", cities: [{ name: "Shanghai", postalCode: "200000" }, { name: "Pudong", postalCode: "200120" }, { name: "Jing'an", postalCode: "200040" }, { name: "Huangpu", postalCode: "200001" }] },
      { name: "Guangdong", cities: [{ name: "Guangzhou", postalCode: "510000" }, { name: "Shenzhen", postalCode: "518000" }, { name: "Dongguan", postalCode: "523000" }, { name: "Foshan", postalCode: "528000" }] },
      { name: "Zhejiang", cities: [{ name: "Hangzhou", postalCode: "310000" }, { name: "Ningbo", postalCode: "315000" }, { name: "Wenzhou", postalCode: "325000" }] },
      { name: "Jiangsu", cities: [{ name: "Nanjing", postalCode: "210000" }, { name: "Suzhou", postalCode: "215000" }, { name: "Wuxi", postalCode: "214000" }] },
      { name: "Sichuan", cities: [{ name: "Chengdu", postalCode: "610000" }, { name: "Mianyang", postalCode: "621000" }] },
      { name: "Hubei", cities: [{ name: "Wuhan", postalCode: "430000" }, { name: "Yichang", postalCode: "443000" }] },
      { name: "Hunan", cities: [{ name: "Changsha", postalCode: "410000" }, { name: "Zhuzhou", postalCode: "412000" }] },
      { name: "Shandong", cities: [{ name: "Jinan", postalCode: "250000" }, { name: "Qingdao", postalCode: "266000" }, { name: "Yantai", postalCode: "264000" }] },
      { name: "Henan", cities: [{ name: "Zhengzhou", postalCode: "450000" }, { name: "Luoyang", postalCode: "471000" }] },
      { name: "Fujian", cities: [{ name: "Fuzhou", postalCode: "350000" }, { name: "Xiamen", postalCode: "361000" }] },
      { name: "Chongqing", cities: [{ name: "Chongqing", postalCode: "400000" }, { name: "Jiangbei", postalCode: "400021" }] }
    ]
  },
  {
    name: "Colombia",
    code: "CO",
    states: [
      { name: "Cundinamarca", cities: [{ name: "Bogot\xE1", postalCode: "110111" }, { name: "Soacha", postalCode: "251054" }, { name: "Ch\xEDa", postalCode: "250001" }] },
      { name: "Antioquia", cities: [{ name: "Medell\xEDn", postalCode: "050001" }, { name: "Bello", postalCode: "051001" }, { name: "Envigado", postalCode: "055422" }] },
      { name: "Valle del Cauca", cities: [{ name: "Cali", postalCode: "760001" }, { name: "Buenaventura", postalCode: "764001" }] },
      { name: "Atl\xE1ntico", cities: [{ name: "Barranquilla", postalCode: "080001" }, { name: "Soledad", postalCode: "083001" }] },
      { name: "Bol\xEDvar", cities: [{ name: "Cartagena", postalCode: "130001" }] },
      { name: "Santander", cities: [{ name: "Bucaramanga", postalCode: "680001" }] },
      { name: "C\xF3rdoba", cities: [{ name: "Monter\xEDa", postalCode: "230001" }] }
    ]
  },
  {
    name: "Croatia",
    code: "HR",
    states: [
      { name: "Zagreb City", cities: [{ name: "Zagreb", postalCode: "10000" }, { name: "Sesvete", postalCode: "10360" }] },
      { name: "Split-Dalmatia", cities: [{ name: "Split", postalCode: "21000" }, { name: "Ka\u0161tela", postalCode: "21212" }] },
      { name: "Primorje-Gorski Kotar", cities: [{ name: "Rijeka", postalCode: "51000" }] },
      { name: "Osijek-Baranja", cities: [{ name: "Osijek", postalCode: "31000" }] },
      { name: "Zadar", cities: [{ name: "Zadar", postalCode: "23000" }] },
      { name: "Dubrovnik-Neretva", cities: [{ name: "Dubrovnik", postalCode: "20000" }] }
    ]
  },
  {
    name: "Czech Republic",
    code: "CZ",
    states: [
      { name: "Prague", cities: [{ name: "Prague 1", postalCode: "110 00" }, { name: "Prague 2", postalCode: "120 00" }, { name: "Prague 6", postalCode: "160 00" }] },
      { name: "South Bohemia", cities: [{ name: "\u010Cesk\xE9 Bud\u011Bjovice", postalCode: "370 01" }] },
      { name: "South Moravia", cities: [{ name: "Brno", postalCode: "601 00" }, { name: "Znojmo", postalCode: "669 02" }] },
      { name: "Moravia-Silesia", cities: [{ name: "Ostrava", postalCode: "702 00" }, { name: "Opava", postalCode: "746 01" }] },
      { name: "Olomouc", cities: [{ name: "Olomouc", postalCode: "772 00" }] },
      { name: "Plze\u0148", cities: [{ name: "Plze\u0148", postalCode: "301 00" }] }
    ]
  },
  {
    name: "Denmark",
    code: "DK",
    states: [
      { name: "Capital Region", cities: [{ name: "Copenhagen", postalCode: "1050" }, { name: "Frederiksberg", postalCode: "2000" }, { name: "Helsing\xF8r", postalCode: "3000" }] },
      { name: "Central Denmark", cities: [{ name: "Aarhus", postalCode: "8000" }, { name: "Silkeborg", postalCode: "8600" }] },
      { name: "Southern Denmark", cities: [{ name: "Odense", postalCode: "5000" }, { name: "Esbjerg", postalCode: "6700" }] },
      { name: "North Denmark", cities: [{ name: "Aalborg", postalCode: "9000" }] },
      { name: "Region Zealand", cities: [{ name: "Roskilde", postalCode: "4000" }, { name: "N\xE6stved", postalCode: "4700" }] }
    ]
  },
  {
    name: "Egypt",
    code: "EG",
    states: [
      { name: "Cairo", cities: [{ name: "Cairo", postalCode: "11511" }, { name: "Heliopolis", postalCode: "11341" }, { name: "Nasr City", postalCode: "11371" }, { name: "Maadi", postalCode: "11431" }] },
      { name: "Alexandria", cities: [{ name: "Alexandria", postalCode: "21511" }, { name: "Sidi Gaber", postalCode: "21523" }] },
      { name: "Giza", cities: [{ name: "Giza", postalCode: "12511" }, { name: "6th of October City", postalCode: "12566" }] },
      { name: "Qalyubia", cities: [{ name: "Shubra El Kheima", postalCode: "13711" }] },
      { name: "Sharqia", cities: [{ name: "Zagazig", postalCode: "44511" }] },
      { name: "Dakahlia", cities: [{ name: "Mansoura", postalCode: "35511" }] },
      { name: "Gharbia", cities: [{ name: "Tanta", postalCode: "31511" }] }
    ]
  },
  {
    name: "Ethiopia",
    code: "ET",
    states: [
      { name: "Addis Ababa", cities: [{ name: "Addis Ababa", postalCode: "1000" }, { name: "Bole", postalCode: "1110" }, { name: "Kirkos", postalCode: "1250" }] },
      { name: "Oromia", cities: [{ name: "Adama", postalCode: "2000" }, { name: "Jimma", postalCode: "7000" }] },
      { name: "Amhara", cities: [{ name: "Bahir Dar", postalCode: "6000" }, { name: "Gondar", postalCode: "6200" }] },
      { name: "Tigray", cities: [{ name: "Mekelle", postalCode: "7000" }] },
      { name: "Dire Dawa", cities: [{ name: "Dire Dawa", postalCode: "3000" }] }
    ]
  },
  {
    name: "Finland",
    code: "FI",
    states: [
      { name: "Uusimaa", cities: [{ name: "Helsinki", postalCode: "00100" }, { name: "Espoo", postalCode: "02100" }, { name: "Vantaa", postalCode: "01300" }] },
      { name: "Pirkanmaa", cities: [{ name: "Tampere", postalCode: "33100" }] },
      { name: "Southwest Finland", cities: [{ name: "Turku", postalCode: "20100" }] },
      { name: "North Ostrobothnia", cities: [{ name: "Oulu", postalCode: "90100" }] },
      { name: "Central Finland", cities: [{ name: "Jyv\xE4skyl\xE4", postalCode: "40100" }] },
      { name: "Lapland", cities: [{ name: "Rovaniemi", postalCode: "96100" }] }
    ]
  },
  {
    name: "France",
    code: "FR",
    states: [
      { name: "\xCEle-de-France", cities: [{ name: "Paris", postalCode: "75001" }, { name: "Boulogne-Billancourt", postalCode: "92100" }, { name: "Saint-Denis", postalCode: "93200" }, { name: "Versailles", postalCode: "78000" }] },
      { name: "Auvergne-Rh\xF4ne-Alpes", cities: [{ name: "Lyon", postalCode: "69001" }, { name: "Grenoble", postalCode: "38000" }, { name: "Saint-\xC9tienne", postalCode: "42000" }] },
      { name: "Provence-Alpes-C\xF4te d'Azur", cities: [{ name: "Marseille", postalCode: "13001" }, { name: "Nice", postalCode: "06000" }, { name: "Toulon", postalCode: "83000" }] },
      { name: "Nouvelle-Aquitaine", cities: [{ name: "Bordeaux", postalCode: "33000" }, { name: "Limoges", postalCode: "87000" }] },
      { name: "Occitanie", cities: [{ name: "Toulouse", postalCode: "31000" }, { name: "Montpellier", postalCode: "34000" }] },
      { name: "Hauts-de-France", cities: [{ name: "Lille", postalCode: "59000" }, { name: "Amiens", postalCode: "80000" }] },
      { name: "Grand Est", cities: [{ name: "Strasbourg", postalCode: "67000" }, { name: "Reims", postalCode: "51100" }] },
      { name: "Pays de la Loire", cities: [{ name: "Nantes", postalCode: "44000" }, { name: "Le Mans", postalCode: "72000" }] },
      { name: "Bretagne", cities: [{ name: "Rennes", postalCode: "35000" }, { name: "Brest", postalCode: "29200" }] },
      { name: "Normandie", cities: [{ name: "Rouen", postalCode: "76000" }, { name: "Caen", postalCode: "14000" }] }
    ]
  },
  {
    name: "Germany",
    code: "DE",
    states: [
      { name: "Berlin", cities: [{ name: "Berlin", postalCode: "10115" }, { name: "Mitte", postalCode: "10117" }, { name: "Charlottenburg", postalCode: "10623" }, { name: "Kreuzberg", postalCode: "10961" }] },
      { name: "Bavaria", cities: [{ name: "Munich", postalCode: "80331" }, { name: "Nuremberg", postalCode: "90402" }, { name: "Augsburg", postalCode: "86150" }, { name: "Regensburg", postalCode: "93047" }] },
      { name: "North Rhine-Westphalia", cities: [{ name: "Cologne", postalCode: "50667" }, { name: "D\xFCsseldorf", postalCode: "40210" }, { name: "Dortmund", postalCode: "44135" }, { name: "Essen", postalCode: "45127" }] },
      { name: "Baden-W\xFCrttemberg", cities: [{ name: "Stuttgart", postalCode: "70173" }, { name: "Karlsruhe", postalCode: "76133" }, { name: "Freiburg", postalCode: "79098" }, { name: "Mannheim", postalCode: "68159" }] },
      { name: "Hamburg", cities: [{ name: "Hamburg", postalCode: "20095" }, { name: "Altona", postalCode: "22765" }] },
      { name: "Hesse", cities: [{ name: "Frankfurt", postalCode: "60311" }, { name: "Wiesbaden", postalCode: "65183" }, { name: "Kassel", postalCode: "34117" }] },
      { name: "Saxony", cities: [{ name: "Dresden", postalCode: "01067" }, { name: "Leipzig", postalCode: "04109" }, { name: "Chemnitz", postalCode: "09111" }] },
      { name: "Lower Saxony", cities: [{ name: "Hanover", postalCode: "30159" }, { name: "Braunschweig", postalCode: "38100" }, { name: "Osnabr\xFCck", postalCode: "49074" }] },
      { name: "Brandenburg", cities: [{ name: "Potsdam", postalCode: "14467" }, { name: "Cottbus", postalCode: "03046" }] },
      { name: "Rhineland-Palatinate", cities: [{ name: "Mainz", postalCode: "55116" }, { name: "Ludwigshafen", postalCode: "67059" }] }
    ]
  },
  {
    name: "Ghana",
    code: "GH",
    states: [
      { name: "Greater Accra", cities: [{ name: "Accra", postalCode: "GA-001" }, { name: "Tema", postalCode: "GA-002" }, { name: "Madina", postalCode: "GA-003" }] },
      { name: "Ashanti", cities: [{ name: "Kumasi", postalCode: "AK-001" }, { name: "Obuasi", postalCode: "AK-002" }] },
      { name: "Western", cities: [{ name: "Takoradi", postalCode: "WR-001" }, { name: "Tarkwa", postalCode: "WR-002" }] },
      { name: "Central", cities: [{ name: "Cape Coast", postalCode: "CR-001" }] },
      { name: "Northern", cities: [{ name: "Tamale", postalCode: "NR-001" }] },
      { name: "Volta", cities: [{ name: "Ho", postalCode: "VR-001" }] },
      { name: "Eastern", cities: [{ name: "Koforidua", postalCode: "ER-001" }] }
    ]
  },
  {
    name: "Greece",
    code: "GR",
    states: [
      { name: "Attica", cities: [{ name: "Athens", postalCode: "10431" }, { name: "Piraeus", postalCode: "18531" }, { name: "Peristeri", postalCode: "12131" }, { name: "Kallithea", postalCode: "17671" }] },
      { name: "Central Macedonia", cities: [{ name: "Thessaloniki", postalCode: "54621" }, { name: "Serres", postalCode: "62122" }] },
      { name: "Crete", cities: [{ name: "Heraklion", postalCode: "71201" }, { name: "Chania", postalCode: "73100" }] },
      { name: "Western Greece", cities: [{ name: "Patras", postalCode: "26221" }] },
      { name: "Thessaly", cities: [{ name: "Larissa", postalCode: "41222" }, { name: "Volos", postalCode: "38221" }] }
    ]
  },
  {
    name: "Hungary",
    code: "HU",
    states: [
      { name: "Budapest", cities: [{ name: "Budapest I", postalCode: "1011" }, { name: "Budapest II", postalCode: "1021" }, { name: "Budapest VII", postalCode: "1071" }, { name: "Budapest XI", postalCode: "1111" }] },
      { name: "Pest", cities: [{ name: "\xC9rd", postalCode: "2030" }, { name: "G\xF6d\xF6ll\u0151", postalCode: "2100" }] },
      { name: "Hajd\xFA-Bihar", cities: [{ name: "Debrecen", postalCode: "4024" }] },
      { name: "Borsod-Aba\xFAj-Zempl\xE9n", cities: [{ name: "Miskolc", postalCode: "3525" }] },
      { name: "Csongr\xE1d-Csan\xE1d", cities: [{ name: "Szeged", postalCode: "6720" }] },
      { name: "Gy\u0151r-Moson-Sopron", cities: [{ name: "Gy\u0151r", postalCode: "9021" }] }
    ]
  },
  {
    name: "India",
    code: "IN",
    states: [
      { name: "Andhra Pradesh", cities: [{ name: "Visakhapatnam", postalCode: "530001" }, { name: "Vijayawada", postalCode: "520001" }, { name: "Guntur", postalCode: "522001" }, { name: "Tirupati", postalCode: "517501" }, { name: "Rajahmundry", postalCode: "533101" }, { name: "Kakinada", postalCode: "533001" }, { name: "Kurnool", postalCode: "518001" }, { name: "Nellore", postalCode: "524001" }, { name: "Anantapur", postalCode: "515001" }, { name: "Kadapa", postalCode: "516001" }] },
      { name: "Arunachal Pradesh", cities: [{ name: "Itanagar", postalCode: "791111" }, { name: "Naharlagun", postalCode: "791110" }, { name: "Pasighat", postalCode: "791102" }, { name: "Tezpur", postalCode: "784001" }] },
      { name: "Assam", cities: [{ name: "Guwahati", postalCode: "781001" }, { name: "Dibrugarh", postalCode: "786001" }, { name: "Silchar", postalCode: "788001" }, { name: "Jorhat", postalCode: "785001" }, { name: "Nagaon", postalCode: "782001" }, { name: "Tinsukia", postalCode: "786125" }] },
      { name: "Bihar", cities: [{ name: "Patna", postalCode: "800001" }, { name: "Gaya", postalCode: "823001" }, { name: "Bhagalpur", postalCode: "812001" }, { name: "Muzaffarpur", postalCode: "842001" }, { name: "Purnia", postalCode: "854301" }, { name: "Darbhanga", postalCode: "846004" }, { name: "Arrah", postalCode: "802301" }] },
      { name: "Chhattisgarh", cities: [{ name: "Raipur", postalCode: "492001" }, { name: "Bhilai", postalCode: "490001" }, { name: "Bilaspur", postalCode: "495001" }, { name: "Korba", postalCode: "495677" }, { name: "Durg", postalCode: "491001" }, { name: "Rajnandgaon", postalCode: "491441" }] },
      { name: "Delhi", cities: [{ name: "New Delhi", postalCode: "110001" }, { name: "Connaught Place", postalCode: "110001" }, { name: "Karol Bagh", postalCode: "110005" }, { name: "Lajpat Nagar", postalCode: "110024" }, { name: "Rohini", postalCode: "110085" }, { name: "Dwarka", postalCode: "110075" }, { name: "Saket", postalCode: "110017" }, { name: "Pitampura", postalCode: "110034" }, { name: "Janakpuri", postalCode: "110058" }, { name: "Nehru Place", postalCode: "110019" }] },
      { name: "Goa", cities: [{ name: "Panaji", postalCode: "403001" }, { name: "Margao", postalCode: "403601" }, { name: "Vasco da Gama", postalCode: "403802" }, { name: "Mapusa", postalCode: "403507" }, { name: "Ponda", postalCode: "403401" }] },
      { name: "Gujarat", cities: [{ name: "Ahmedabad", postalCode: "380001" }, { name: "Surat", postalCode: "395001" }, { name: "Vadodara", postalCode: "390001" }, { name: "Rajkot", postalCode: "360001" }, { name: "Bhavnagar", postalCode: "364001" }, { name: "Jamnagar", postalCode: "361001" }, { name: "Gandhinagar", postalCode: "382010" }, { name: "Anand", postalCode: "388001" }, { name: "Bharuch", postalCode: "392001" }, { name: "Morbi", postalCode: "363641" }] },
      { name: "Haryana", cities: [{ name: "Faridabad", postalCode: "121001" }, { name: "Gurgaon", postalCode: "122001" }, { name: "Panipat", postalCode: "132103" }, { name: "Ambala", postalCode: "134003" }, { name: "Yamunanagar", postalCode: "135001" }, { name: "Rohtak", postalCode: "124001" }, { name: "Hisar", postalCode: "125001" }, { name: "Karnal", postalCode: "132001" }, { name: "Sonipat", postalCode: "131001" }, { name: "Panchkula", postalCode: "134112" }] },
      { name: "Himachal Pradesh", cities: [{ name: "Shimla", postalCode: "171001" }, { name: "Dharamsala", postalCode: "176215" }, { name: "Mandi", postalCode: "175001" }, { name: "Solan", postalCode: "173211" }, { name: "Kullu", postalCode: "175101" }, { name: "Baddi", postalCode: "173205" }] },
      { name: "Jharkhand", cities: [{ name: "Ranchi", postalCode: "834001" }, { name: "Jamshedpur", postalCode: "831001" }, { name: "Dhanbad", postalCode: "826001" }, { name: "Bokaro", postalCode: "827001" }, { name: "Deoghar", postalCode: "814112" }, { name: "Hazaribagh", postalCode: "825301" }] },
      { name: "Karnataka", cities: [{ name: "Bengaluru", postalCode: "560001" }, { name: "Mysuru", postalCode: "570001" }, { name: "Hubli", postalCode: "580020" }, { name: "Mangaluru", postalCode: "575001" }, { name: "Belagavi", postalCode: "590001" }, { name: "Kalaburagi", postalCode: "585101" }, { name: "Ballari", postalCode: "583101" }, { name: "Davangere", postalCode: "577001" }, { name: "Shivamogga", postalCode: "577201" }, { name: "Tumakuru", postalCode: "572101" }, { name: "Udupi", postalCode: "576101" }, { name: "Hassan", postalCode: "573201" }, { name: "Dharwad", postalCode: "580001" }] },
      { name: "Kerala", cities: [{ name: "Thiruvananthapuram", postalCode: "695001" }, { name: "Kochi", postalCode: "682001" }, { name: "Kozhikode", postalCode: "673001" }, { name: "Thrissur", postalCode: "680001" }, { name: "Kollam", postalCode: "691001" }, { name: "Palakkad", postalCode: "678001" }, { name: "Alappuzha", postalCode: "688001" }, { name: "Malappuram", postalCode: "676505" }, { name: "Kannur", postalCode: "670001" }, { name: "Kottayam", postalCode: "686001" }] },
      { name: "Madhya Pradesh", cities: [{ name: "Bhopal", postalCode: "462001" }, { name: "Indore", postalCode: "452001" }, { name: "Gwalior", postalCode: "474001" }, { name: "Jabalpur", postalCode: "482001" }, { name: "Ujjain", postalCode: "456001" }, { name: "Sagar", postalCode: "470001" }, { name: "Rewa", postalCode: "486001" }, { name: "Satna", postalCode: "485001" }, { name: "Dewas", postalCode: "455001" }, { name: "Ratlam", postalCode: "457001" }] },
      { name: "Maharashtra", cities: [{ name: "Mumbai", postalCode: "400001" }, { name: "Pune", postalCode: "411001" }, { name: "Nagpur", postalCode: "440001" }, { name: "Thane", postalCode: "400601" }, { name: "Nashik", postalCode: "422001" }, { name: "Aurangabad", postalCode: "431001" }, { name: "Solapur", postalCode: "413001" }, { name: "Kolhapur", postalCode: "416001" }, { name: "Amravati", postalCode: "444601" }, { name: "Navi Mumbai", postalCode: "400703" }, { name: "Vasai", postalCode: "401202" }, { name: "Pimpri-Chinchwad", postalCode: "411017" }, { name: "Sangli", postalCode: "416416" }] },
      { name: "Manipur", cities: [{ name: "Imphal", postalCode: "795001" }, { name: "Thoubal", postalCode: "795138" }, { name: "Bishnupur", postalCode: "795126" }] },
      { name: "Meghalaya", cities: [{ name: "Shillong", postalCode: "793001" }, { name: "Tura", postalCode: "794001" }] },
      { name: "Mizoram", cities: [{ name: "Aizawl", postalCode: "796001" }, { name: "Lunglei", postalCode: "796701" }] },
      { name: "Nagaland", cities: [{ name: "Kohima", postalCode: "797001" }, { name: "Dimapur", postalCode: "797112" }] },
      { name: "Odisha", cities: [{ name: "Bhubaneswar", postalCode: "751001" }, { name: "Cuttack", postalCode: "753001" }, { name: "Rourkela", postalCode: "769001" }, { name: "Sambalpur", postalCode: "768001" }, { name: "Berhampur", postalCode: "760001" }, { name: "Puri", postalCode: "752001" }] },
      { name: "Punjab", cities: [{ name: "Ludhiana", postalCode: "141001" }, { name: "Amritsar", postalCode: "143001" }, { name: "Jalandhar", postalCode: "144001" }, { name: "Patiala", postalCode: "147001" }, { name: "Bathinda", postalCode: "151001" }, { name: "Mohali", postalCode: "160059" }, { name: "Pathankot", postalCode: "145001" }] },
      { name: "Rajasthan", cities: [{ name: "Jaipur", postalCode: "302001" }, { name: "Jodhpur", postalCode: "342001" }, { name: "Udaipur", postalCode: "313001" }, { name: "Kota", postalCode: "324001" }, { name: "Bikaner", postalCode: "334001" }, { name: "Ajmer", postalCode: "305001" }, { name: "Alwar", postalCode: "301001" }, { name: "Bhilwara", postalCode: "311001" }, { name: "Sikar", postalCode: "332001" }] },
      { name: "Sikkim", cities: [{ name: "Gangtok", postalCode: "737101" }, { name: "Namchi", postalCode: "737126" }] },
      { name: "Tamil Nadu", cities: [{ name: "Chennai", postalCode: "600001" }, { name: "Coimbatore", postalCode: "641001" }, { name: "Madurai", postalCode: "625001" }, { name: "Tiruchirappalli", postalCode: "620001" }, { name: "Salem", postalCode: "636001" }, { name: "Tirunelveli", postalCode: "627001" }, { name: "Erode", postalCode: "638001" }, { name: "Vellore", postalCode: "632001" }, { name: "Thanjavur", postalCode: "613001" }, { name: "Tiruppur", postalCode: "641601" }, { name: "Dindigul", postalCode: "624001" }, { name: "Nagercoil", postalCode: "629001" }, { name: "Kanchipuram", postalCode: "631501" }] },
      { name: "Telangana", cities: [{ name: "Hyderabad", postalCode: "500001" }, { name: "Warangal", postalCode: "506001" }, { name: "Nizamabad", postalCode: "503001" }, { name: "Karimnagar", postalCode: "505001" }, { name: "Ramagundam", postalCode: "505208" }, { name: "Khammam", postalCode: "507001" }, { name: "Secunderabad", postalCode: "500003" }, { name: "Mahbubnagar", postalCode: "509001" }] },
      { name: "Tripura", cities: [{ name: "Agartala", postalCode: "799001" }, { name: "Udaipur", postalCode: "799120" }] },
      { name: "Uttar Pradesh", cities: [{ name: "Lucknow", postalCode: "226001" }, { name: "Kanpur", postalCode: "208001" }, { name: "Agra", postalCode: "282001" }, { name: "Varanasi", postalCode: "221001" }, { name: "Meerut", postalCode: "250001" }, { name: "Allahabad", postalCode: "211001" }, { name: "Ghaziabad", postalCode: "201001" }, { name: "Noida", postalCode: "201301" }, { name: "Bareilly", postalCode: "243001" }, { name: "Aligarh", postalCode: "202001" }, { name: "Mathura", postalCode: "281001" }, { name: "Moradabad", postalCode: "244001" }, { name: "Gorakhpur", postalCode: "273001" }] },
      { name: "Uttarakhand", cities: [{ name: "Dehradun", postalCode: "248001" }, { name: "Haridwar", postalCode: "249401" }, { name: "Roorkee", postalCode: "247667" }, { name: "Haldwani", postalCode: "263139" }, { name: "Rishikesh", postalCode: "249201" }] },
      { name: "West Bengal", cities: [{ name: "Kolkata", postalCode: "700001" }, { name: "Howrah", postalCode: "711101" }, { name: "Durgapur", postalCode: "713201" }, { name: "Asansol", postalCode: "713301" }, { name: "Siliguri", postalCode: "734001" }, { name: "Bardhaman", postalCode: "713101" }, { name: "Kharagpur", postalCode: "721301" }] },
      { name: "Jammu and Kashmir", cities: [{ name: "Srinagar", postalCode: "190001" }, { name: "Jammu", postalCode: "180001" }, { name: "Anantnag", postalCode: "192101" }, { name: "Baramulla", postalCode: "193101" }] },
      { name: "Ladakh", cities: [{ name: "Leh", postalCode: "194101" }, { name: "Kargil", postalCode: "194103" }] },
      { name: "Chandigarh", cities: [{ name: "Chandigarh", postalCode: "160017" }, { name: "Sector 17", postalCode: "160017" }, { name: "Sector 22", postalCode: "160022" }] },
      { name: "Dadra and Nagar Haveli and Daman and Diu", cities: [{ name: "Daman", postalCode: "396210" }, { name: "Silvassa", postalCode: "396230" }, { name: "Diu", postalCode: "362520" }] },
      { name: "Lakshadweep", cities: [{ name: "Kavaratti", postalCode: "682555" }] },
      { name: "Puducherry", cities: [{ name: "Puducherry", postalCode: "605001" }, { name: "Karaikal", postalCode: "609601" }] },
      { name: "Andaman and Nicobar Islands", cities: [{ name: "Port Blair", postalCode: "744101" }] }
    ]
  },
  {
    name: "Indonesia",
    code: "ID",
    states: [
      { name: "Jakarta", cities: [{ name: "Jakarta Pusat", postalCode: "10110" }, { name: "Jakarta Selatan", postalCode: "12110" }, { name: "Jakarta Barat", postalCode: "11220" }, { name: "Jakarta Timur", postalCode: "13110" }, { name: "Jakarta Utara", postalCode: "14110" }] },
      { name: "West Java", cities: [{ name: "Bandung", postalCode: "40111" }, { name: "Bekasi", postalCode: "17112" }, { name: "Bogor", postalCode: "16111" }, { name: "Depok", postalCode: "16412" }] },
      { name: "East Java", cities: [{ name: "Surabaya", postalCode: "60111" }, { name: "Malang", postalCode: "65111" }, { name: "Madiun", postalCode: "63111" }] },
      { name: "Central Java", cities: [{ name: "Semarang", postalCode: "50111" }, { name: "Solo", postalCode: "57111" }, { name: "Yogyakarta", postalCode: "55111" }] },
      { name: "North Sumatra", cities: [{ name: "Medan", postalCode: "20111" }, { name: "Binjai", postalCode: "20711" }] },
      { name: "South Sulawesi", cities: [{ name: "Makassar", postalCode: "90111" }, { name: "Parepare", postalCode: "91111" }] },
      { name: "Bali", cities: [{ name: "Denpasar", postalCode: "80111" }, { name: "Kuta", postalCode: "80361" }, { name: "Ubud", postalCode: "80571" }] },
      { name: "South Sumatra", cities: [{ name: "Palembang", postalCode: "30111" }] },
      { name: "Riau", cities: [{ name: "Pekanbaru", postalCode: "28111" }] }
    ]
  },
  {
    name: "Iran",
    code: "IR",
    states: [
      { name: "Tehran", cities: [{ name: "Tehran", postalCode: "1111111111" }, { name: "Karaj", postalCode: "3137111111" }, { name: "Shemiranat", postalCode: "1917111111" }] },
      { name: "Isfahan", cities: [{ name: "Isfahan", postalCode: "8143111111" }, { name: "Kashan", postalCode: "8715111111" }] },
      { name: "Fars", cities: [{ name: "Shiraz", postalCode: "7194111111" }, { name: "Marvdasht", postalCode: "7376111111" }] },
      { name: "East Azerbaijan", cities: [{ name: "Tabriz", postalCode: "5166111111" }, { name: "Maragheh", postalCode: "5518111111" }] },
      { name: "Khorasan Razavi", cities: [{ name: "Mashhad", postalCode: "9187111111" }] },
      { name: "Khuzestan", cities: [{ name: "Ahvaz", postalCode: "6135111111" }, { name: "Abadan", postalCode: "6318111111" }] },
      { name: "Gilan", cities: [{ name: "Rasht", postalCode: "4145111111" }] },
      { name: "Mazandaran", cities: [{ name: "Sari", postalCode: "4815111111" }, { name: "Babol", postalCode: "4713111111" }] }
    ]
  },
  {
    name: "Iraq",
    code: "IQ",
    states: [
      { name: "Baghdad", cities: [{ name: "Baghdad", postalCode: "10001" }, { name: "Sadr City", postalCode: "10017" }, { name: "Kadhimiya", postalCode: "10013" }] },
      { name: "Basra", cities: [{ name: "Basra", postalCode: "61001" }, { name: "Zubayr", postalCode: "61006" }] },
      { name: "Arbil", cities: [{ name: "Erbil", postalCode: "44001" }] },
      { name: "Sulaymaniyah", cities: [{ name: "Sulaymaniyah", postalCode: "46001" }] },
      { name: "Nineveh", cities: [{ name: "Mosul", postalCode: "41001" }] },
      { name: "An Najaf", cities: [{ name: "Najaf", postalCode: "54001" }] }
    ]
  },
  {
    name: "Ireland",
    code: "IE",
    states: [
      { name: "Dublin", cities: [{ name: "Dublin 1", postalCode: "D01" }, { name: "Dublin 2", postalCode: "D02" }, { name: "Dublin 4", postalCode: "D04" }, { name: "Dublin 6", postalCode: "D06" }] },
      { name: "Cork", cities: [{ name: "Cork", postalCode: "T12" }, { name: "Cobh", postalCode: "P24" }] },
      { name: "Galway", cities: [{ name: "Galway", postalCode: "H91" }] },
      { name: "Limerick", cities: [{ name: "Limerick", postalCode: "V94" }] },
      { name: "Waterford", cities: [{ name: "Waterford", postalCode: "X91" }] },
      { name: "Kerry", cities: [{ name: "Tralee", postalCode: "V92" }, { name: "Killarney", postalCode: "V93" }] }
    ]
  },
  {
    name: "Israel",
    code: "IL",
    states: [
      { name: "Tel Aviv District", cities: [{ name: "Tel Aviv", postalCode: "6100000" }, { name: "Ramat Gan", postalCode: "5251300" }, { name: "Bat Yam", postalCode: "5940000" }] },
      { name: "Jerusalem District", cities: [{ name: "Jerusalem", postalCode: "9100000" }] },
      { name: "Haifa District", cities: [{ name: "Haifa", postalCode: "3100000" }] },
      { name: "Central District", cities: [{ name: "Rishon LeZion", postalCode: "7520000" }, { name: "Petah Tikva", postalCode: "4900000" }] },
      { name: "Northern District", cities: [{ name: "Nazareth", postalCode: "1600000" }, { name: "Acre", postalCode: "2412200" }] },
      { name: "Southern District", cities: [{ name: "Beersheba", postalCode: "8410000" }, { name: "Ashkelon", postalCode: "7838000" }] }
    ]
  },
  {
    name: "Italy",
    code: "IT",
    states: [
      { name: "Lazio", cities: [{ name: "Rome", postalCode: "00100" }, { name: "Latina", postalCode: "04100" }, { name: "Frosinone", postalCode: "03100" }] },
      { name: "Lombardy", cities: [{ name: "Milan", postalCode: "20121" }, { name: "Brescia", postalCode: "25121" }, { name: "Bergamo", postalCode: "24121" }, { name: "Monza", postalCode: "20900" }] },
      { name: "Campania", cities: [{ name: "Naples", postalCode: "80121" }, { name: "Salerno", postalCode: "84121" }] },
      { name: "Sicily", cities: [{ name: "Palermo", postalCode: "90121" }, { name: "Catania", postalCode: "95121" }, { name: "Messina", postalCode: "98121" }] },
      { name: "Veneto", cities: [{ name: "Venice", postalCode: "30121" }, { name: "Verona", postalCode: "37121" }, { name: "Padua", postalCode: "35121" }] },
      { name: "Emilia-Romagna", cities: [{ name: "Bologna", postalCode: "40121" }, { name: "Parma", postalCode: "43121" }, { name: "Modena", postalCode: "41121" }] },
      { name: "Tuscany", cities: [{ name: "Florence", postalCode: "50121" }, { name: "Pisa", postalCode: "56121" }, { name: "Siena", postalCode: "53100" }] },
      { name: "Piedmont", cities: [{ name: "Turin", postalCode: "10121" }, { name: "Novara", postalCode: "28100" }] },
      { name: "Apulia", cities: [{ name: "Bari", postalCode: "70121" }, { name: "Taranto", postalCode: "74121" }] },
      { name: "Liguria", cities: [{ name: "Genoa", postalCode: "16121" }] }
    ]
  },
  {
    name: "Japan",
    code: "JP",
    states: [
      { name: "Tokyo", cities: [{ name: "Shinjuku", postalCode: "160-0001" }, { name: "Shibuya", postalCode: "150-0001" }, { name: "Minato", postalCode: "105-0001" }, { name: "Chiyoda", postalCode: "100-0001" }, { name: "Sumida", postalCode: "130-0001" }] },
      { name: "Osaka", cities: [{ name: "Osaka", postalCode: "530-0001" }, { name: "Sakai", postalCode: "590-0000" }] },
      { name: "Kanagawa", cities: [{ name: "Yokohama", postalCode: "220-0001" }, { name: "Kawasaki", postalCode: "210-0001" }] },
      { name: "Aichi", cities: [{ name: "Nagoya", postalCode: "460-0001" }, { name: "Toyota", postalCode: "471-0001" }] },
      { name: "Hokkaido", cities: [{ name: "Sapporo", postalCode: "060-0001" }, { name: "Hakodate", postalCode: "040-0001" }] },
      { name: "Fukuoka", cities: [{ name: "Fukuoka", postalCode: "810-0001" }, { name: "Kitakyushu", postalCode: "800-0001" }] },
      { name: "Hyogo", cities: [{ name: "Kobe", postalCode: "650-0001" }, { name: "Himeji", postalCode: "670-0001" }] },
      { name: "Kyoto", cities: [{ name: "Kyoto", postalCode: "600-8001" }] },
      { name: "Saitama", cities: [{ name: "Saitama", postalCode: "330-0001" }, { name: "Kawagoe", postalCode: "350-0001" }] },
      { name: "Chiba", cities: [{ name: "Chiba", postalCode: "260-0001" }, { name: "Matsudo", postalCode: "271-0001" }] }
    ]
  },
  {
    name: "Jordan",
    code: "JO",
    states: [
      { name: "Amman", cities: [{ name: "Amman", postalCode: "11110" }, { name: "Zarqa", postalCode: "13110" }, { name: "Russeifa", postalCode: "13215" }] },
      { name: "Irbid", cities: [{ name: "Irbid", postalCode: "21110" }, { name: "Ramtha", postalCode: "27110" }] },
      { name: "Zarqa", cities: [{ name: "Zarqa City", postalCode: "13110" }] },
      { name: "Aqaba", cities: [{ name: "Aqaba", postalCode: "77110" }] },
      { name: "Balqa", cities: [{ name: "Salt", postalCode: "19110" }] }
    ]
  },
  {
    name: "Kazakhstan",
    code: "KZ",
    states: [
      { name: "Astana", cities: [{ name: "Astana", postalCode: "010000" }, { name: "Nur-Sultan", postalCode: "010000" }] },
      { name: "Almaty City", cities: [{ name: "Almaty", postalCode: "050000" }, { name: "Medeu", postalCode: "050060" }] },
      { name: "Karaganda", cities: [{ name: "Karaganda", postalCode: "100000" }, { name: "Temirtau", postalCode: "101400" }] },
      { name: "East Kazakhstan", cities: [{ name: "Ust-Kamenogorsk", postalCode: "070000" }, { name: "Semey", postalCode: "071400" }] },
      { name: "Shymkent", cities: [{ name: "Shymkent", postalCode: "160000" }] }
    ]
  },
  {
    name: "Kenya",
    code: "KE",
    states: [
      { name: "Nairobi", cities: [{ name: "Nairobi", postalCode: "00100" }, { name: "Westlands", postalCode: "00600" }, { name: "Karen", postalCode: "00502" }, { name: "Eastleigh", postalCode: "00610" }] },
      { name: "Mombasa", cities: [{ name: "Mombasa", postalCode: "80100" }, { name: "Nyali", postalCode: "80118" }] },
      { name: "Kisumu", cities: [{ name: "Kisumu", postalCode: "40100" }] },
      { name: "Nakuru", cities: [{ name: "Nakuru", postalCode: "20100" }] },
      { name: "Uasin Gishu", cities: [{ name: "Eldoret", postalCode: "30100" }] },
      { name: "Kiambu", cities: [{ name: "Thika", postalCode: "01000" }] }
    ]
  },
  {
    name: "Kuwait",
    code: "KW",
    states: [
      { name: "Capital", cities: [{ name: "Kuwait City", postalCode: "13001" }, { name: "Sharq", postalCode: "13007" }] },
      { name: "Hawalli", cities: [{ name: "Salmiya", postalCode: "22001" }, { name: "Hawalli", postalCode: "32001" }] },
      { name: "Al Farwaniyah", cities: [{ name: "Farwaniya", postalCode: "81001" }, { name: "Khaitan", postalCode: "82001" }] },
      { name: "Al Ahmadi", cities: [{ name: "Ahmadi", postalCode: "61001" }, { name: "Fahaheel", postalCode: "64001" }] },
      { name: "Al Jahra", cities: [{ name: "Jahra", postalCode: "91001" }] },
      { name: "Mubarak Al-Kabeer", cities: [{ name: "Sabah Al-Salem", postalCode: "36001" }] }
    ]
  },
  {
    name: "Malaysia",
    code: "MY",
    states: [
      { name: "Kuala Lumpur", cities: [{ name: "Kuala Lumpur", postalCode: "50000" }, { name: "Chow Kit", postalCode: "50350" }, { name: "Bukit Bintang", postalCode: "55100" }, { name: "Bangsar", postalCode: "59000" }] },
      { name: "Selangor", cities: [{ name: "Shah Alam", postalCode: "40000" }, { name: "Subang Jaya", postalCode: "47500" }, { name: "Petaling Jaya", postalCode: "46000" }, { name: "Klang", postalCode: "41000" }] },
      { name: "Johor", cities: [{ name: "Johor Bahru", postalCode: "80000" }, { name: "Batu Pahat", postalCode: "83000" }, { name: "Muar", postalCode: "84000" }] },
      { name: "Penang", cities: [{ name: "George Town", postalCode: "10000" }, { name: "Butterworth", postalCode: "12000" }] },
      { name: "Perak", cities: [{ name: "Ipoh", postalCode: "30000" }, { name: "Taiping", postalCode: "34000" }] },
      { name: "Sabah", cities: [{ name: "Kota Kinabalu", postalCode: "88000" }, { name: "Sandakan", postalCode: "90000" }] },
      { name: "Sarawak", cities: [{ name: "Kuching", postalCode: "93000" }, { name: "Miri", postalCode: "98000" }] },
      { name: "Putrajaya", cities: [{ name: "Putrajaya", postalCode: "62000" }] }
    ]
  },
  {
    name: "Mexico",
    code: "MX",
    states: [
      { name: "Ciudad de M\xE9xico", cities: [{ name: "Mexico City", postalCode: "06600" }, { name: "Coyoac\xE1n", postalCode: "04100" }, { name: "Tlalpan", postalCode: "14000" }, { name: "Iztapalapa", postalCode: "09820" }] },
      { name: "Jalisco", cities: [{ name: "Guadalajara", postalCode: "44100" }, { name: "Zapopan", postalCode: "45100" }, { name: "Tlaquepaque", postalCode: "45500" }] },
      { name: "Nuevo Le\xF3n", cities: [{ name: "Monterrey", postalCode: "64000" }, { name: "San Nicol\xE1s", postalCode: "66450" }] },
      { name: "Puebla", cities: [{ name: "Puebla", postalCode: "72000" }, { name: "Tehuac\xE1n", postalCode: "75700" }] },
      { name: "Estado de M\xE9xico", cities: [{ name: "Ecatepec", postalCode: "55000" }, { name: "Naucalpan", postalCode: "53000" }, { name: "Toluca", postalCode: "50000" }] },
      { name: "Guanajuato", cities: [{ name: "Le\xF3n", postalCode: "37000" }, { name: "Irapuato", postalCode: "36500" }] },
      { name: "Veracruz", cities: [{ name: "Veracruz", postalCode: "91700" }, { name: "Xalapa", postalCode: "91000" }] }
    ]
  },
  {
    name: "Morocco",
    code: "MA",
    states: [
      { name: "Casablanca-Settat", cities: [{ name: "Casablanca", postalCode: "20000" }, { name: "Mohammedia", postalCode: "28810" }, { name: "Settat", postalCode: "26000" }] },
      { name: "Rabat-Sal\xE9-K\xE9nitra", cities: [{ name: "Rabat", postalCode: "10000" }, { name: "Sal\xE9", postalCode: "11000" }, { name: "K\xE9nitra", postalCode: "14000" }] },
      { name: "F\xE8s-Mekn\xE8s", cities: [{ name: "F\xE8s", postalCode: "30000" }, { name: "Mekn\xE8s", postalCode: "50000" }] },
      { name: "Marrakech-Safi", cities: [{ name: "Marrakech", postalCode: "40000" }, { name: "Safi", postalCode: "46000" }] },
      { name: "Oriental", cities: [{ name: "Oujda", postalCode: "60000" }] },
      { name: "Tanger-Tetouan-Al Hoceima", cities: [{ name: "Tangier", postalCode: "90000" }, { name: "T\xE9touan", postalCode: "93000" }] },
      { name: "Souss-Massa", cities: [{ name: "Agadir", postalCode: "80000" }] }
    ]
  },
  {
    name: "Myanmar",
    code: "MM",
    states: [
      { name: "Yangon", cities: [{ name: "Yangon", postalCode: "11111" }, { name: "Hlaing", postalCode: "11121" }, { name: "South Okkalapa", postalCode: "11151" }] },
      { name: "Mandalay", cities: [{ name: "Mandalay", postalCode: "05031" }, { name: "Pyin Oo Lwin", postalCode: "05052" }] },
      { name: "Naypyidaw Union Territory", cities: [{ name: "Naypyidaw", postalCode: "15011" }] },
      { name: "Sagaing", cities: [{ name: "Sagaing", postalCode: "04011" }] },
      { name: "Bago", cities: [{ name: "Bago", postalCode: "12011" }] }
    ]
  },
  {
    name: "Nepal",
    code: "NP",
    states: [
      { name: "Bagmati", cities: [{ name: "Kathmandu", postalCode: "44600" }, { name: "Lalitpur", postalCode: "44700" }, { name: "Bhaktapur", postalCode: "44800" }, { name: "Kirtipur", postalCode: "44618" }] },
      { name: "Gandaki", cities: [{ name: "Pokhara", postalCode: "33700" }] },
      { name: "Lumbini", cities: [{ name: "Butwal", postalCode: "32907" }, { name: "Bhairahawa", postalCode: "32900" }] },
      { name: "Madhesh", cities: [{ name: "Janakpur", postalCode: "45600" }, { name: "Birgunj", postalCode: "44300" }] },
      { name: "Koshi", cities: [{ name: "Biratnagar", postalCode: "56613" }] }
    ]
  },
  {
    name: "Netherlands",
    code: "NL",
    states: [
      { name: "Noord-Holland", cities: [{ name: "Amsterdam", postalCode: "1011 AB" }, { name: "Haarlem", postalCode: "2011 AB" }, { name: "Almere", postalCode: "1311 AA" }] },
      { name: "Zuid-Holland", cities: [{ name: "Rotterdam", postalCode: "3011 AA" }, { name: "The Hague", postalCode: "2500 AA" }, { name: "Leiden", postalCode: "2300 AA" }] },
      { name: "Noord-Brabant", cities: [{ name: "Eindhoven", postalCode: "5600 AA" }, { name: "Tilburg", postalCode: "5000 AA" }, { name: "Breda", postalCode: "4800 AA" }] },
      { name: "Gelderland", cities: [{ name: "Nijmegen", postalCode: "6500 AA" }, { name: "Arnhem", postalCode: "6800 AA" }] },
      { name: "Utrecht", cities: [{ name: "Utrecht", postalCode: "3500 AA" }] },
      { name: "Overijssel", cities: [{ name: "Enschede", postalCode: "7500 AA" }, { name: "Zwolle", postalCode: "8000 AA" }] },
      { name: "Groningen", cities: [{ name: "Groningen", postalCode: "9700 AA" }] },
      { name: "Friesland", cities: [{ name: "Leeuwarden", postalCode: "8900 AA" }] }
    ]
  },
  {
    name: "New Zealand",
    code: "NZ",
    states: [
      { name: "Auckland", cities: [{ name: "Auckland", postalCode: "1010" }, { name: "Manukau", postalCode: "2104" }, { name: "North Shore", postalCode: "0620" }, { name: "Henderson", postalCode: "0610" }] },
      { name: "Wellington", cities: [{ name: "Wellington", postalCode: "6011" }, { name: "Lower Hutt", postalCode: "5010" }, { name: "Porirua", postalCode: "5022" }] },
      { name: "Canterbury", cities: [{ name: "Christchurch", postalCode: "8011" }, { name: "Ashburton", postalCode: "7700" }] },
      { name: "Waikato", cities: [{ name: "Hamilton", postalCode: "3204" }, { name: "Tauranga", postalCode: "3110" }] },
      { name: "Otago", cities: [{ name: "Dunedin", postalCode: "9016" }, { name: "Queenstown", postalCode: "9300" }] }
    ]
  },
  {
    name: "Nigeria",
    code: "NG",
    states: [
      { name: "Lagos", cities: [{ name: "Lagos Island", postalCode: "101001" }, { name: "Ikeja", postalCode: "100271" }, { name: "Victoria Island", postalCode: "106104" }, { name: "Lekki", postalCode: "105102" }] },
      { name: "FCT", cities: [{ name: "Abuja", postalCode: "900001" }, { name: "Garki", postalCode: "900211" }] },
      { name: "Kano", cities: [{ name: "Kano", postalCode: "700001" }] },
      { name: "Rivers", cities: [{ name: "Port Harcourt", postalCode: "500001" }] },
      { name: "Oyo", cities: [{ name: "Ibadan", postalCode: "200001" }] },
      { name: "Anambra", cities: [{ name: "Onitsha", postalCode: "420001" }, { name: "Awka", postalCode: "422001" }] },
      { name: "Delta", cities: [{ name: "Warri", postalCode: "332001" }, { name: "Asaba", postalCode: "320001" }] },
      { name: "Edo", cities: [{ name: "Benin City", postalCode: "300001" }] }
    ]
  },
  {
    name: "Norway",
    code: "NO",
    states: [
      { name: "Oslo", cities: [{ name: "Oslo", postalCode: "0010" }, { name: "Gr\xFCnerl\xF8kka", postalCode: "0550" }, { name: "Majorstuen", postalCode: "0305" }] },
      { name: "Rogaland", cities: [{ name: "Stavanger", postalCode: "4005" }, { name: "Sandnes", postalCode: "4306" }] },
      { name: "Vestland", cities: [{ name: "Bergen", postalCode: "5003" }, { name: "\xC5lesund", postalCode: "6002" }] },
      { name: "Innlandet", cities: [{ name: "Hamar", postalCode: "2317" }] },
      { name: "Tr\xF8ndelag", cities: [{ name: "Trondheim", postalCode: "7010" }] },
      { name: "Troms og Finnmark", cities: [{ name: "Troms\xF8", postalCode: "9005" }] }
    ]
  },
  {
    name: "Oman",
    code: "OM",
    states: [
      { name: "Muscat", cities: [{ name: "Muscat", postalCode: "100" }, { name: "Muttrah", postalCode: "114" }, { name: "Ruwi", postalCode: "112" }, { name: "Al Khuwair", postalCode: "133" }] },
      { name: "Dhofar", cities: [{ name: "Salalah", postalCode: "211" }] },
      { name: "North Al Batinah", cities: [{ name: "Sohar", postalCode: "311" }] },
      { name: "South Ash Sharqiyah", cities: [{ name: "Sur", postalCode: "411" }] },
      { name: "Al Buraimi", cities: [{ name: "Buraimi", postalCode: "512" }] }
    ]
  },
  {
    name: "Pakistan",
    code: "PK",
    states: [
      { name: "Punjab", cities: [{ name: "Lahore", postalCode: "54000" }, { name: "Faisalabad", postalCode: "38000" }, { name: "Rawalpindi", postalCode: "46000" }, { name: "Gujranwala", postalCode: "52250" }, { name: "Multan", postalCode: "60000" }, { name: "Sialkot", postalCode: "51310" }] },
      { name: "Sindh", cities: [{ name: "Karachi", postalCode: "74200" }, { name: "Hyderabad", postalCode: "71000" }, { name: "Sukkur", postalCode: "65200" }] },
      { name: "Khyber Pakhtunkhwa", cities: [{ name: "Peshawar", postalCode: "25000" }, { name: "Mardan", postalCode: "23200" }] },
      { name: "Islamabad Capital Territory", cities: [{ name: "Islamabad", postalCode: "44000" }, { name: "I-8", postalCode: "44060" }] },
      { name: "Balochistan", cities: [{ name: "Quetta", postalCode: "87300" }] },
      { name: "Azad Kashmir", cities: [{ name: "Muzaffarabad", postalCode: "13100" }] }
    ]
  },
  {
    name: "Philippines",
    code: "PH",
    states: [
      { name: "Metro Manila", cities: [{ name: "Manila", postalCode: "1000" }, { name: "Quezon City", postalCode: "1100" }, { name: "Makati", postalCode: "1200" }, { name: "Taguig", postalCode: "1630" }, { name: "Pasig", postalCode: "1600" }] },
      { name: "Cebu", cities: [{ name: "Cebu City", postalCode: "6000" }, { name: "Lapu-Lapu", postalCode: "6015" }, { name: "Mandaue", postalCode: "6014" }] },
      { name: "Davao del Sur", cities: [{ name: "Davao City", postalCode: "8000" }] },
      { name: "Laguna", cities: [{ name: "San Pedro", postalCode: "4023" }, { name: "Santa Rosa", postalCode: "4026" }] },
      { name: "Cavite", cities: [{ name: "Bacoor", postalCode: "4102" }, { name: "Imus", postalCode: "4103" }] },
      { name: "Pampanga", cities: [{ name: "Angeles City", postalCode: "2009" }, { name: "San Fernando", postalCode: "2000" }] }
    ]
  },
  {
    name: "Poland",
    code: "PL",
    states: [
      { name: "Masovian", cities: [{ name: "Warsaw", postalCode: "00-001" }, { name: "Radom", postalCode: "26-600" }, { name: "P\u0142ock", postalCode: "09-400" }] },
      { name: "Lesser Poland", cities: [{ name: "Krak\xF3w", postalCode: "30-001" }, { name: "Tarn\xF3w", postalCode: "33-100" }] },
      { name: "Silesian", cities: [{ name: "Katowice", postalCode: "40-001" }, { name: "Gliwice", postalCode: "44-100" }, { name: "Cz\u0119stochowa", postalCode: "42-200" }] },
      { name: "Greater Poland", cities: [{ name: "Pozna\u0144", postalCode: "60-001" }, { name: "Kalisz", postalCode: "62-800" }] },
      { name: "Lower Silesian", cities: [{ name: "Wroc\u0142aw", postalCode: "50-001" }, { name: "Legnica", postalCode: "59-220" }] },
      { name: "\u0141\xF3d\u017A", cities: [{ name: "\u0141\xF3d\u017A", postalCode: "90-001" }] },
      { name: "Pomeranian", cities: [{ name: "Gda\u0144sk", postalCode: "80-001" }, { name: "Gdynia", postalCode: "81-001" }] }
    ]
  },
  {
    name: "Portugal",
    code: "PT",
    states: [
      { name: "Lisbon", cities: [{ name: "Lisbon", postalCode: "1000-001" }, { name: "Sintra", postalCode: "2710-567" }, { name: "Cascais", postalCode: "2750-310" }] },
      { name: "Norte", cities: [{ name: "Porto", postalCode: "4000-001" }, { name: "Braga", postalCode: "4700-001" }, { name: "Vila Nova de Gaia", postalCode: "4400-001" }] },
      { name: "Centro", cities: [{ name: "Coimbra", postalCode: "3000-001" }, { name: "Aveiro", postalCode: "3800-001" }] },
      { name: "Algarve", cities: [{ name: "Faro", postalCode: "8000-001" }, { name: "Portim\xE3o", postalCode: "8500-001" }] },
      { name: "Alentejo", cities: [{ name: "\xC9vora", postalCode: "7000-001" }] }
    ]
  },
  {
    name: "Qatar",
    code: "QA",
    states: [
      { name: "Ad Dawhah", cities: [{ name: "Doha", postalCode: "PO Box 1" }, { name: "West Bay", postalCode: "PO Box 100" }, { name: "Al Sadd", postalCode: "PO Box 200" }] },
      { name: "Al Rayyan", cities: [{ name: "Al Rayyan", postalCode: "QR-001" }, { name: "Al Wakra", postalCode: "QR-002" }] },
      { name: "Al Wakrah", cities: [{ name: "Al Wakrah City", postalCode: "QW-001" }] },
      { name: "Al Khor", cities: [{ name: "Al Khor", postalCode: "QK-001" }] },
      { name: "Umm Salal", cities: [{ name: "Umm Salal", postalCode: "QU-001" }] }
    ]
  },
  {
    name: "Romania",
    code: "RO",
    states: [
      { name: "Bucharest", cities: [{ name: "Bucharest Sector 1", postalCode: "010101" }, { name: "Bucharest Sector 2", postalCode: "020101" }, { name: "Bucharest Sector 3", postalCode: "030101" }] },
      { name: "Cluj", cities: [{ name: "Cluj-Napoca", postalCode: "400001" }] },
      { name: "Timi\u0219", cities: [{ name: "Timi\u0219oara", postalCode: "300001" }] },
      { name: "Ia\u0219i", cities: [{ name: "Ia\u0219i", postalCode: "700001" }] },
      { name: "Bra\u0219ov", cities: [{ name: "Bra\u0219ov", postalCode: "500001" }] },
      { name: "Constan\u021Ba", cities: [{ name: "Constan\u021Ba", postalCode: "900001" }] }
    ]
  },
  {
    name: "Russia",
    code: "RU",
    states: [
      { name: "Moscow", cities: [{ name: "Moscow", postalCode: "101000" }, { name: "Zelenograd", postalCode: "124482" }, { name: "Troitsk", postalCode: "142190" }] },
      { name: "Saint Petersburg", cities: [{ name: "Saint Petersburg", postalCode: "190000" }, { name: "Peterhof", postalCode: "198516" }, { name: "Pushkin", postalCode: "196600" }] },
      { name: "Sverdlovsk Oblast", cities: [{ name: "Yekaterinburg", postalCode: "620000" }] },
      { name: "Tatarstan", cities: [{ name: "Kazan", postalCode: "420000" }] },
      { name: "Chelyabinsk Oblast", cities: [{ name: "Chelyabinsk", postalCode: "454000" }] },
      { name: "Samara Oblast", cities: [{ name: "Samara", postalCode: "443000" }] },
      { name: "Novosibirsk Oblast", cities: [{ name: "Novosibirsk", postalCode: "630000" }] },
      { name: "Rostov Oblast", cities: [{ name: "Rostov-on-Don", postalCode: "344000" }] },
      { name: "Krasnodar Krai", cities: [{ name: "Krasnodar", postalCode: "350000" }, { name: "Sochi", postalCode: "354000" }] },
      { name: "Primorsky Krai", cities: [{ name: "Vladivostok", postalCode: "690000" }] }
    ]
  },
  {
    name: "Saudi Arabia",
    code: "SA",
    states: [
      { name: "Riyadh", cities: [{ name: "Riyadh", postalCode: "11564" }, { name: "Al Olaya", postalCode: "12212" }, { name: "Al Malaz", postalCode: "11417" }, { name: "Al Rawdah", postalCode: "14812" }] },
      { name: "Mecca", cities: [{ name: "Jeddah", postalCode: "21589" }, { name: "Mecca", postalCode: "24231" }, { name: "Taif", postalCode: "21944" }] },
      { name: "Eastern Province", cities: [{ name: "Dammam", postalCode: "31411" }, { name: "Dhahran", postalCode: "31311" }, { name: "Al-Khobar", postalCode: "31952" }, { name: "Jubail", postalCode: "31951" }] },
      { name: "Al Madinah", cities: [{ name: "Medina", postalCode: "42311" }] },
      { name: "Asir", cities: [{ name: "Abha", postalCode: "62411" }] },
      { name: "Tabuk", cities: [{ name: "Tabuk", postalCode: "71411" }] },
      { name: "Ha'il", cities: [{ name: "Hail", postalCode: "55411" }] }
    ]
  },
  {
    name: "Singapore",
    code: "SG",
    states: [
      { name: "Central Region", cities: [{ name: "Marina Bay", postalCode: "018956" }, { name: "Orchard Road", postalCode: "238801" }, { name: "Chinatown", postalCode: "058416" }, { name: "Raffles Place", postalCode: "048616" }] },
      { name: "East Region", cities: [{ name: "Tampines", postalCode: "520001" }, { name: "Bedok", postalCode: "460001" }, { name: "Pasir Ris", postalCode: "510001" }] },
      { name: "North Region", cities: [{ name: "Woodlands", postalCode: "738099" }, { name: "Yishun", postalCode: "760001" }] },
      { name: "North-East Region", cities: [{ name: "Sengkang", postalCode: "540001" }, { name: "Hougang", postalCode: "530001" }] },
      { name: "West Region", cities: [{ name: "Jurong East", postalCode: "608701" }, { name: "Bukit Timah", postalCode: "588172" }, { name: "Clementi", postalCode: "120001" }] }
    ]
  },
  {
    name: "South Africa",
    code: "ZA",
    states: [
      { name: "Gauteng", cities: [{ name: "Johannesburg", postalCode: "2000" }, { name: "Pretoria", postalCode: "0001" }, { name: "Soweto", postalCode: "1804" }, { name: "Sandton", postalCode: "2196" }] },
      { name: "Western Cape", cities: [{ name: "Cape Town", postalCode: "8001" }, { name: "Stellenbosch", postalCode: "7600" }, { name: "George", postalCode: "6529" }] },
      { name: "KwaZulu-Natal", cities: [{ name: "Durban", postalCode: "4001" }, { name: "Pietermaritzburg", postalCode: "3201" }] },
      { name: "Eastern Cape", cities: [{ name: "Port Elizabeth", postalCode: "6001" }, { name: "East London", postalCode: "5201" }] },
      { name: "Free State", cities: [{ name: "Bloemfontein", postalCode: "9301" }] },
      { name: "Limpopo", cities: [{ name: "Polokwane", postalCode: "0699" }] },
      { name: "Mpumalanga", cities: [{ name: "Nelspruit", postalCode: "1200" }] },
      { name: "North West", cities: [{ name: "Rustenburg", postalCode: "0299" }] }
    ]
  },
  {
    name: "South Korea",
    code: "KR",
    states: [
      { name: "Seoul", cities: [{ name: "Seoul", postalCode: "03000" }, { name: "Gangnam", postalCode: "06000" }, { name: "Mapo", postalCode: "04000" }, { name: "Jongno", postalCode: "03001" }] },
      { name: "Gyeonggi-do", cities: [{ name: "Suwon", postalCode: "16000" }, { name: "Seongnam", postalCode: "13500" }, { name: "Goyang", postalCode: "10400" }] },
      { name: "Busan", cities: [{ name: "Busan", postalCode: "49000" }, { name: "Haeundae", postalCode: "48094" }] },
      { name: "Incheon", cities: [{ name: "Incheon", postalCode: "22000" }] },
      { name: "Daegu", cities: [{ name: "Daegu", postalCode: "41000" }] },
      { name: "Daejeon", cities: [{ name: "Daejeon", postalCode: "34000" }] },
      { name: "Gwangju", cities: [{ name: "Gwangju", postalCode: "61000" }] }
    ]
  },
  {
    name: "Spain",
    code: "ES",
    states: [
      { name: "Madrid", cities: [{ name: "Madrid", postalCode: "28001" }, { name: "Alcal\xE1 de Henares", postalCode: "28801" }, { name: "Legan\xE9s", postalCode: "28914" }, { name: "Getafe", postalCode: "28901" }] },
      { name: "Catalonia", cities: [{ name: "Barcelona", postalCode: "08001" }, { name: "L'Hospitalet", postalCode: "08901" }, { name: "Tarragona", postalCode: "43001" }] },
      { name: "Andalusia", cities: [{ name: "Seville", postalCode: "41001" }, { name: "M\xE1laga", postalCode: "29001" }, { name: "C\xF3rdoba", postalCode: "14001" }] },
      { name: "Valencia", cities: [{ name: "Valencia", postalCode: "46001" }, { name: "Alicante", postalCode: "03001" }] },
      { name: "Basque Country", cities: [{ name: "Bilbao", postalCode: "48001" }, { name: "San Sebasti\xE1n", postalCode: "20001" }] },
      { name: "Galicia", cities: [{ name: "Vigo", postalCode: "36001" }, { name: "A Coru\xF1a", postalCode: "15001" }] },
      { name: "Castile and Le\xF3n", cities: [{ name: "Valladolid", postalCode: "47001" }, { name: "Salamanca", postalCode: "37001" }] }
    ]
  },
  {
    name: "Sri Lanka",
    code: "LK",
    states: [
      { name: "Western", cities: [{ name: "Colombo", postalCode: "00100" }, { name: "Sri Jayawardenepura Kotte", postalCode: "10100" }, { name: "Dehiwala", postalCode: "10350" }, { name: "Negombo", postalCode: "11500" }] },
      { name: "Central", cities: [{ name: "Kandy", postalCode: "20000" }, { name: "Nuwara Eliya", postalCode: "22200" }] },
      { name: "Southern", cities: [{ name: "Galle", postalCode: "80000" }, { name: "Matara", postalCode: "81000" }] },
      { name: "Northern", cities: [{ name: "Jaffna", postalCode: "40000" }] },
      { name: "Eastern", cities: [{ name: "Trincomalee", postalCode: "31000" }, { name: "Batticaloa", postalCode: "30000" }] }
    ]
  },
  {
    name: "Sweden",
    code: "SE",
    states: [
      { name: "Stockholm", cities: [{ name: "Stockholm", postalCode: "111 29" }, { name: "Solna", postalCode: "171 22" }, { name: "Nacka", postalCode: "131 37" }] },
      { name: "V\xE4stra G\xF6taland", cities: [{ name: "Gothenburg", postalCode: "411 01" }, { name: "Bor\xE5s", postalCode: "503 01" }] },
      { name: "Sk\xE5ne", cities: [{ name: "Malm\xF6", postalCode: "211 20" }, { name: "Helsingborg", postalCode: "252 25" }, { name: "Lund", postalCode: "221 00" }] },
      { name: "\xD6sterg\xF6tland", cities: [{ name: "Link\xF6ping", postalCode: "582 17" }, { name: "Norrk\xF6ping", postalCode: "602 21" }] },
      { name: "Uppsala", cities: [{ name: "Uppsala", postalCode: "751 05" }] },
      { name: "Norrbotten", cities: [{ name: "Lule\xE5", postalCode: "972 41" }] }
    ]
  },
  {
    name: "Switzerland",
    code: "CH",
    states: [
      { name: "Zurich", cities: [{ name: "Zurich", postalCode: "8001" }, { name: "Winterthur", postalCode: "8400" }, { name: "Uster", postalCode: "8610" }] },
      { name: "Bern", cities: [{ name: "Bern", postalCode: "3001" }, { name: "Biel", postalCode: "2502" }] },
      { name: "Geneva", cities: [{ name: "Geneva", postalCode: "1201" }, { name: "Carouge", postalCode: "1227" }] },
      { name: "Basel-Stadt", cities: [{ name: "Basel", postalCode: "4001" }] },
      { name: "Vaud", cities: [{ name: "Lausanne", postalCode: "1003" }, { name: "Montreux", postalCode: "1820" }] },
      { name: "Ticino", cities: [{ name: "Lugano", postalCode: "6900" }, { name: "Bellinzona", postalCode: "6500" }] },
      { name: "Lucerne", cities: [{ name: "Lucerne", postalCode: "6003" }] }
    ]
  },
  {
    name: "Taiwan",
    code: "TW",
    states: [
      { name: "Taipei", cities: [{ name: "Taipei", postalCode: "100" }, { name: "Zhongzheng", postalCode: "100" }, { name: "Da'an", postalCode: "106" }] },
      { name: "New Taipei", cities: [{ name: "Banqiao", postalCode: "220" }, { name: "Xindian", postalCode: "231" }] },
      { name: "Taichung", cities: [{ name: "Taichung", postalCode: "400" }, { name: "Xitun", postalCode: "407" }] },
      { name: "Tainan", cities: [{ name: "Tainan", postalCode: "700" }] },
      { name: "Kaohsiung", cities: [{ name: "Kaohsiung", postalCode: "800" }] },
      { name: "Taoyuan", cities: [{ name: "Taoyuan", postalCode: "330" }, { name: "Zhongli", postalCode: "320" }] }
    ]
  },
  {
    name: "Tanzania",
    code: "TZ",
    states: [
      { name: "Dar es Salaam", cities: [{ name: "Dar es Salaam", postalCode: "11101" }, { name: "Kinondoni", postalCode: "14112" }, { name: "Ilala", postalCode: "11101" }] },
      { name: "Mwanza", cities: [{ name: "Mwanza", postalCode: "33101" }] },
      { name: "Arusha", cities: [{ name: "Arusha", postalCode: "23101" }] },
      { name: "Kilimanjaro", cities: [{ name: "Moshi", postalCode: "25101" }] },
      { name: "Dodoma", cities: [{ name: "Dodoma", postalCode: "41101" }] },
      { name: "Zanzibar West", cities: [{ name: "Zanzibar City", postalCode: "71101" }] }
    ]
  },
  {
    name: "Thailand",
    code: "TH",
    states: [
      { name: "Bangkok", cities: [{ name: "Bangkok", postalCode: "10200" }, { name: "Chatuchak", postalCode: "10900" }, { name: "Sukhumvit", postalCode: "10110" }, { name: "Silom", postalCode: "10500" }] },
      { name: "Chiang Mai", cities: [{ name: "Chiang Mai", postalCode: "50000" }, { name: "Hang Dong", postalCode: "50230" }] },
      { name: "Chon Buri", cities: [{ name: "Pattaya", postalCode: "20150" }, { name: "Chonburi", postalCode: "20000" }] },
      { name: "Nonthaburi", cities: [{ name: "Nonthaburi", postalCode: "11000" }] },
      { name: "Phuket", cities: [{ name: "Phuket City", postalCode: "83000" }, { name: "Patong", postalCode: "83150" }] },
      { name: "Khon Kaen", cities: [{ name: "Khon Kaen", postalCode: "40000" }] },
      { name: "Nakhon Ratchasima", cities: [{ name: "Korat", postalCode: "30000" }] }
    ]
  },
  {
    name: "Turkey",
    code: "TR",
    states: [
      { name: "\u0130stanbul", cities: [{ name: "Fatih", postalCode: "34134" }, { name: "Beyo\u011Flu", postalCode: "34430" }, { name: "Kad\u0131k\xF6y", postalCode: "34710" }, { name: "\u015Ei\u015Fli", postalCode: "34387" }, { name: "\xDCsk\xFCdar", postalCode: "34672" }] },
      { name: "Ankara", cities: [{ name: "Ankara", postalCode: "06100" }, { name: "\xC7ankaya", postalCode: "06550" }, { name: "Ke\xE7i\xF6ren", postalCode: "06380" }] },
      { name: "\u0130zmir", cities: [{ name: "\u0130zmir", postalCode: "35210" }, { name: "Kar\u015F\u0131yaka", postalCode: "35600" }, { name: "Bornova", postalCode: "35040" }] },
      { name: "Bursa", cities: [{ name: "Bursa", postalCode: "16010" }, { name: "Osmangazi", postalCode: "16080" }] },
      { name: "Antalya", cities: [{ name: "Antalya", postalCode: "07100" }, { name: "Alanya", postalCode: "07400" }] },
      { name: "Gaziantep", cities: [{ name: "Gaziantep", postalCode: "27010" }] },
      { name: "Konya", cities: [{ name: "Konya", postalCode: "42030" }] },
      { name: "Adana", cities: [{ name: "Adana", postalCode: "01130" }, { name: "Seyhan", postalCode: "01150" }] }
    ]
  },
  {
    name: "Uganda",
    code: "UG",
    states: [
      { name: "Central", cities: [{ name: "Kampala", postalCode: "256" }, { name: "Entebbe", postalCode: "257" }, { name: "Wakiso", postalCode: "258" }] },
      { name: "Eastern", cities: [{ name: "Jinja", postalCode: "259" }, { name: "Mbale", postalCode: "260" }] },
      { name: "Northern", cities: [{ name: "Gulu", postalCode: "261" }, { name: "Lira", postalCode: "262" }] },
      { name: "Western", cities: [{ name: "Mbarara", postalCode: "263" }, { name: "Fort Portal", postalCode: "264" }] }
    ]
  },
  {
    name: "Ukraine",
    code: "UA",
    states: [
      { name: "Kyiv City", cities: [{ name: "Kyiv", postalCode: "01001" }, { name: "Darnytsya", postalCode: "02099" }, { name: "Desnyansky", postalCode: "02140" }] },
      { name: "Kharkiv", cities: [{ name: "Kharkiv", postalCode: "61001" }] },
      { name: "Odessa", cities: [{ name: "Odessa", postalCode: "65001" }] },
      { name: "Dnipropetrovsk", cities: [{ name: "Dnipro", postalCode: "49001" }, { name: "Kryvyi Rih", postalCode: "50001" }] },
      { name: "Lviv", cities: [{ name: "Lviv", postalCode: "79001" }] },
      { name: "Donetsk", cities: [{ name: "Mariupol", postalCode: "87501" }] }
    ]
  },
  {
    name: "United Arab Emirates",
    code: "AE",
    states: [
      { name: "Dubai", cities: [{ name: "Dubai", postalCode: "00000" }, { name: "Deira", postalCode: "00001" }, { name: "Bur Dubai", postalCode: "00002" }, { name: "Jumeirah", postalCode: "00003" }, { name: "Business Bay", postalCode: "00004" }, { name: "Marina", postalCode: "00005" }] },
      { name: "Abu Dhabi", cities: [{ name: "Abu Dhabi", postalCode: "00000" }, { name: "Al Ain", postalCode: "00001" }, { name: "Khalifa City", postalCode: "00002" }] },
      { name: "Sharjah", cities: [{ name: "Sharjah City", postalCode: "00000" }, { name: "Al Qasimia", postalCode: "00001" }] },
      { name: "Ajman", cities: [{ name: "Ajman City", postalCode: "00000" }] },
      { name: "Ras Al Khaimah", cities: [{ name: "Ras Al Khaimah", postalCode: "00000" }] },
      { name: "Fujairah", cities: [{ name: "Fujairah City", postalCode: "00000" }] },
      { name: "Umm Al Quwain", cities: [{ name: "Umm Al Quwain", postalCode: "00000" }] }
    ]
  },
  {
    name: "United Kingdom",
    code: "GB",
    states: [
      { name: "Greater London", cities: [{ name: "City of London", postalCode: "EC1A 1BB" }, { name: "Westminster", postalCode: "SW1A 1AA" }, { name: "Canary Wharf", postalCode: "E14 5AB" }, { name: "Southwark", postalCode: "SE1 7PB" }, { name: "Hammersmith", postalCode: "W6 9DP" }, { name: "Islington", postalCode: "N1 9GU" }] },
      { name: "West Yorkshire", cities: [{ name: "Leeds", postalCode: "LS1 1BA" }, { name: "Bradford", postalCode: "BD1 1HX" }] },
      { name: "Greater Manchester", cities: [{ name: "Manchester", postalCode: "M1 1AE" }, { name: "Salford", postalCode: "M5 4WT" }] },
      { name: "West Midlands", cities: [{ name: "Birmingham", postalCode: "B1 1BB" }, { name: "Coventry", postalCode: "CV1 1EZ" }, { name: "Wolverhampton", postalCode: "WV1 1LH" }] },
      { name: "South Yorkshire", cities: [{ name: "Sheffield", postalCode: "S1 1DA" }, { name: "Rotherham", postalCode: "S60 1BD" }] },
      { name: "Merseyside", cities: [{ name: "Liverpool", postalCode: "L1 8JQ" }, { name: "Birkenhead", postalCode: "CH41 5BX" }] },
      { name: "Scotland", cities: [{ name: "Edinburgh", postalCode: "EH1 1YZ" }, { name: "Glasgow", postalCode: "G1 1HN" }, { name: "Aberdeen", postalCode: "AB10 1FQ" }] },
      { name: "Wales", cities: [{ name: "Cardiff", postalCode: "CF10 1EP" }, { name: "Swansea", postalCode: "SA1 3SN" }] },
      { name: "Northern Ireland", cities: [{ name: "Belfast", postalCode: "BT1 1AH" }, { name: "Londonderry", postalCode: "BT48 6AT" }] },
      { name: "Kent", cities: [{ name: "Canterbury", postalCode: "CT1 2EH" }, { name: "Maidstone", postalCode: "ME14 1LQ" }] },
      { name: "Hampshire", cities: [{ name: "Southampton", postalCode: "SO14 0YG" }, { name: "Portsmouth", postalCode: "PO1 1AE" }] },
      { name: "Bristol", cities: [{ name: "Bristol", postalCode: "BS1 1EH" }] },
      { name: "East Sussex", cities: [{ name: "Brighton", postalCode: "BN1 1EL" }] },
      { name: "Oxfordshire", cities: [{ name: "Oxford", postalCode: "OX1 1PT" }] },
      { name: "Cambridgeshire", cities: [{ name: "Cambridge", postalCode: "CB2 1TN" }] }
    ]
  },
  {
    name: "United States",
    code: "US",
    states: [
      { name: "Alabama", cities: [{ name: "Birmingham", postalCode: "35203" }, { name: "Montgomery", postalCode: "36104" }, { name: "Huntsville", postalCode: "35801" }] },
      { name: "Alaska", cities: [{ name: "Anchorage", postalCode: "99501" }, { name: "Fairbanks", postalCode: "99701" }] },
      { name: "Arizona", cities: [{ name: "Phoenix", postalCode: "85001" }, { name: "Tucson", postalCode: "85701" }, { name: "Mesa", postalCode: "85201" }, { name: "Scottsdale", postalCode: "85251" }] },
      { name: "Arkansas", cities: [{ name: "Little Rock", postalCode: "72201" }, { name: "Fort Smith", postalCode: "72901" }] },
      { name: "California", cities: [{ name: "Los Angeles", postalCode: "90001" }, { name: "San Francisco", postalCode: "94102" }, { name: "San Diego", postalCode: "92101" }, { name: "San Jose", postalCode: "95101" }, { name: "Sacramento", postalCode: "95814" }, { name: "Oakland", postalCode: "94601" }, { name: "Fresno", postalCode: "93721" }] },
      { name: "Colorado", cities: [{ name: "Denver", postalCode: "80202" }, { name: "Colorado Springs", postalCode: "80903" }, { name: "Aurora", postalCode: "80010" }] },
      { name: "Connecticut", cities: [{ name: "Hartford", postalCode: "06101" }, { name: "New Haven", postalCode: "06501" }, { name: "Bridgeport", postalCode: "06601" }] },
      { name: "Delaware", cities: [{ name: "Wilmington", postalCode: "19801" }, { name: "Dover", postalCode: "19901" }] },
      { name: "Florida", cities: [{ name: "Miami", postalCode: "33101" }, { name: "Orlando", postalCode: "32801" }, { name: "Tampa", postalCode: "33601" }, { name: "Jacksonville", postalCode: "32201" }, { name: "Fort Lauderdale", postalCode: "33301" }] },
      { name: "Georgia", cities: [{ name: "Atlanta", postalCode: "30301" }, { name: "Savannah", postalCode: "31401" }, { name: "Augusta", postalCode: "30901" }] },
      { name: "Hawaii", cities: [{ name: "Honolulu", postalCode: "96813" }, { name: "Hilo", postalCode: "96720" }] },
      { name: "Idaho", cities: [{ name: "Boise", postalCode: "83701" }, { name: "Nampa", postalCode: "83651" }] },
      { name: "Illinois", cities: [{ name: "Chicago", postalCode: "60601" }, { name: "Aurora", postalCode: "60506" }, { name: "Naperville", postalCode: "60540" }, { name: "Rockford", postalCode: "61101" }] },
      { name: "Indiana", cities: [{ name: "Indianapolis", postalCode: "46201" }, { name: "Fort Wayne", postalCode: "46801" }] },
      { name: "Iowa", cities: [{ name: "Des Moines", postalCode: "50301" }, { name: "Cedar Rapids", postalCode: "52401" }] },
      { name: "Kansas", cities: [{ name: "Wichita", postalCode: "67201" }, { name: "Overland Park", postalCode: "66201" }] },
      { name: "Kentucky", cities: [{ name: "Louisville", postalCode: "40201" }, { name: "Lexington", postalCode: "40501" }] },
      { name: "Louisiana", cities: [{ name: "New Orleans", postalCode: "70112" }, { name: "Baton Rouge", postalCode: "70801" }] },
      { name: "Maine", cities: [{ name: "Portland", postalCode: "04101" }, { name: "Augusta", postalCode: "04330" }] },
      { name: "Maryland", cities: [{ name: "Baltimore", postalCode: "21201" }, { name: "Rockville", postalCode: "20850" }] },
      { name: "Massachusetts", cities: [{ name: "Boston", postalCode: "02101" }, { name: "Worcester", postalCode: "01601" }, { name: "Cambridge", postalCode: "02139" }] },
      { name: "Michigan", cities: [{ name: "Detroit", postalCode: "48201" }, { name: "Grand Rapids", postalCode: "49501" }, { name: "Ann Arbor", postalCode: "48104" }] },
      { name: "Minnesota", cities: [{ name: "Minneapolis", postalCode: "55401" }, { name: "Saint Paul", postalCode: "55101" }] },
      { name: "Mississippi", cities: [{ name: "Jackson", postalCode: "39201" }, { name: "Gulfport", postalCode: "39501" }] },
      { name: "Missouri", cities: [{ name: "Kansas City", postalCode: "64101" }, { name: "St. Louis", postalCode: "63101" }] },
      { name: "Montana", cities: [{ name: "Billings", postalCode: "59101" }, { name: "Helena", postalCode: "59601" }] },
      { name: "Nebraska", cities: [{ name: "Omaha", postalCode: "68101" }, { name: "Lincoln", postalCode: "68501" }] },
      { name: "Nevada", cities: [{ name: "Las Vegas", postalCode: "89101" }, { name: "Reno", postalCode: "89501" }, { name: "Henderson", postalCode: "89002" }] },
      { name: "New Hampshire", cities: [{ name: "Manchester", postalCode: "03101" }, { name: "Concord", postalCode: "03301" }] },
      { name: "New Jersey", cities: [{ name: "Newark", postalCode: "07101" }, { name: "Jersey City", postalCode: "07302" }, { name: "Trenton", postalCode: "08601" }] },
      { name: "New Mexico", cities: [{ name: "Albuquerque", postalCode: "87101" }, { name: "Santa Fe", postalCode: "87501" }] },
      { name: "New York", cities: [{ name: "New York City", postalCode: "10001" }, { name: "Brooklyn", postalCode: "11201" }, { name: "Queens", postalCode: "11101" }, { name: "Buffalo", postalCode: "14201" }, { name: "Rochester", postalCode: "14604" }] },
      { name: "North Carolina", cities: [{ name: "Charlotte", postalCode: "28201" }, { name: "Raleigh", postalCode: "27601" }, { name: "Greensboro", postalCode: "27401" }] },
      { name: "North Dakota", cities: [{ name: "Fargo", postalCode: "58102" }, { name: "Bismarck", postalCode: "58501" }] },
      { name: "Ohio", cities: [{ name: "Columbus", postalCode: "43215" }, { name: "Cleveland", postalCode: "44101" }, { name: "Cincinnati", postalCode: "45201" }] },
      { name: "Oklahoma", cities: [{ name: "Oklahoma City", postalCode: "73101" }, { name: "Tulsa", postalCode: "74101" }] },
      { name: "Oregon", cities: [{ name: "Portland", postalCode: "97201" }, { name: "Salem", postalCode: "97301" }, { name: "Eugene", postalCode: "97401" }] },
      { name: "Pennsylvania", cities: [{ name: "Philadelphia", postalCode: "19102" }, { name: "Pittsburgh", postalCode: "15201" }, { name: "Allentown", postalCode: "18101" }] },
      { name: "Rhode Island", cities: [{ name: "Providence", postalCode: "02901" }] },
      { name: "South Carolina", cities: [{ name: "Charleston", postalCode: "29401" }, { name: "Columbia", postalCode: "29201" }] },
      { name: "South Dakota", cities: [{ name: "Sioux Falls", postalCode: "57104" }, { name: "Rapid City", postalCode: "57701" }] },
      { name: "Tennessee", cities: [{ name: "Nashville", postalCode: "37201" }, { name: "Memphis", postalCode: "38101" }, { name: "Knoxville", postalCode: "37901" }] },
      { name: "Texas", cities: [{ name: "Houston", postalCode: "77001" }, { name: "San Antonio", postalCode: "78201" }, { name: "Dallas", postalCode: "75201" }, { name: "Austin", postalCode: "78701" }, { name: "Fort Worth", postalCode: "76101" }, { name: "El Paso", postalCode: "79901" }] },
      { name: "Utah", cities: [{ name: "Salt Lake City", postalCode: "84101" }, { name: "Provo", postalCode: "84601" }] },
      { name: "Vermont", cities: [{ name: "Burlington", postalCode: "05401" }, { name: "Montpelier", postalCode: "05601" }] },
      { name: "Virginia", cities: [{ name: "Virginia Beach", postalCode: "23451" }, { name: "Richmond", postalCode: "23218" }, { name: "Arlington", postalCode: "22201" }] },
      { name: "Washington", cities: [{ name: "Seattle", postalCode: "98101" }, { name: "Spokane", postalCode: "99201" }, { name: "Tacoma", postalCode: "98401" }] },
      { name: "Washington DC", cities: [{ name: "Washington DC", postalCode: "20001" }, { name: "Georgetown", postalCode: "20007" }] },
      { name: "West Virginia", cities: [{ name: "Charleston", postalCode: "25301" }, { name: "Huntington", postalCode: "25701" }] },
      { name: "Wisconsin", cities: [{ name: "Milwaukee", postalCode: "53201" }, { name: "Madison", postalCode: "53701" }] },
      { name: "Wyoming", cities: [{ name: "Cheyenne", postalCode: "82001" }, { name: "Casper", postalCode: "82601" }] }
    ]
  },
  {
    name: "Uzbekistan",
    code: "UZ",
    states: [
      { name: "Tashkent City", cities: [{ name: "Tashkent", postalCode: "100000" }, { name: "Yunusabad", postalCode: "100093" }] },
      { name: "Samarqand", cities: [{ name: "Samarkand", postalCode: "140100" }] },
      { name: "Fergana", cities: [{ name: "Fergana", postalCode: "150100" }, { name: "Andijan", postalCode: "170100" }] },
      { name: "Namangan", cities: [{ name: "Namangan", postalCode: "160100" }] },
      { name: "Bukhara", cities: [{ name: "Bukhara", postalCode: "200100" }] }
    ]
  },
  {
    name: "Venezuela",
    code: "VE",
    states: [
      { name: "Distrito Capital", cities: [{ name: "Caracas", postalCode: "1010" }, { name: "Chacao", postalCode: "1060" }, { name: "Baruta", postalCode: "1080" }] },
      { name: "Miranda", cities: [{ name: "Los Teques", postalCode: "1201" }, { name: "Guarenas", postalCode: "1220" }] },
      { name: "Zulia", cities: [{ name: "Maracaibo", postalCode: "4001" }] },
      { name: "Carabobo", cities: [{ name: "Valencia", postalCode: "2001" }] },
      { name: "Aragua", cities: [{ name: "Maracay", postalCode: "2101" }] }
    ]
  },
  {
    name: "Vietnam",
    code: "VN",
    states: [
      { name: "H\xE0 N\u1ED9i", cities: [{ name: "Ho\xE0n Ki\u1EBFm", postalCode: "100000" }, { name: "\u0110\u1ED1ng \u0110a", postalCode: "116000" }, { name: "C\u1EA7u Gi\u1EA5y", postalCode: "122000" }, { name: "Thanh Xu\xE2n", postalCode: "120000" }] },
      { name: "Th\xE0nh ph\u1ED1 H\u1ED3 Ch\xED Minh", cities: [{ name: "District 1", postalCode: "700000" }, { name: "District 3", postalCode: "720000" }, { name: "B\xECnh Th\u1EA1nh", postalCode: "717000" }, { name: "T\xE2n B\xECnh", postalCode: "725000" }] },
      { name: "\u0110\xE0 N\u1EB5ng", cities: [{ name: "H\u1EA3i Ch\xE2u", postalCode: "550000" }, { name: "Thanh Kh\xEA", postalCode: "551000" }] },
      { name: "H\u1EA3i Ph\xF2ng", cities: [{ name: "H\u1ED3ng B\xE0ng", postalCode: "180000" }] },
      { name: "Kh\xE1nh H\xF2a", cities: [{ name: "Nha Trang", postalCode: "650000" }] },
      { name: "L\xE2m \u0110\u1ED3ng", cities: [{ name: "\u0110\xE0 L\u1EA1t", postalCode: "670000" }] }
    ]
  },
  {
    name: "Yemen",
    code: "YE",
    states: [
      { name: "Sanaa", cities: [{ name: "Sanaa", postalCode: "00967" }] },
      { name: "Aden", cities: [{ name: "Aden", postalCode: "00967" }] },
      { name: "Taiz", cities: [{ name: "Taiz", postalCode: "00967" }] },
      { name: "Hadramawt", cities: [{ name: "Mukalla", postalCode: "00967" }] },
      { name: "Ibb", cities: [{ name: "Ibb", postalCode: "00967" }] }
    ]
  },
  {
    name: "Zambia",
    code: "ZM",
    states: [
      { name: "Lusaka", cities: [{ name: "Lusaka", postalCode: "10101" }, { name: "Chilenje", postalCode: "10102" }] },
      { name: "Copperbelt", cities: [{ name: "Kitwe", postalCode: "20101" }, { name: "Ndola", postalCode: "20201" }] },
      { name: "Southern", cities: [{ name: "Livingstone", postalCode: "30101" }] },
      { name: "Northern", cities: [{ name: "Kasama", postalCode: "40101" }] }
    ]
  },
  {
    name: "Zimbabwe",
    code: "ZW",
    states: [
      { name: "Harare", cities: [{ name: "Harare", postalCode: "00263" }, { name: "Chitungwiza", postalCode: "00264" }] },
      { name: "Bulawayo", cities: [{ name: "Bulawayo", postalCode: "00263" }] },
      { name: "Mashonaland East", cities: [{ name: "Marondera", postalCode: "00263" }] },
      { name: "Manicaland", cities: [{ name: "Mutare", postalCode: "00263" }] }
    ]
  }
];
function getAllCountryNames() {
  return COUNTRY_STATE_CITY_DATA.map((c) => c.name);
}
function getStatesForCountry(countryName) {
  if (!countryName?.trim())
    return [];
  const found = COUNTRY_STATE_CITY_DATA.find((c) => c.name.trim().toLowerCase() === countryName.trim().toLowerCase());
  return found ? found.states.map((s) => s.name) : [];
}
function getCitiesForState(countryName, stateName) {
  if (!countryName?.trim() || !stateName?.trim())
    return [];
  const country = COUNTRY_STATE_CITY_DATA.find((c) => c.name.trim().toLowerCase() === countryName.trim().toLowerCase());
  if (!country)
    return [];
  const state = country.states.find((s) => s.name.trim().toLowerCase() === stateName.trim().toLowerCase());
  return state ? state.cities : [];
}
function getCityNamesForState(countryName, stateName) {
  return getCitiesForState(countryName, stateName).map((c) => c.name);
}
function getPostalCodeForCity(countryName, stateName, cityName) {
  if (!cityName?.trim())
    return "";
  const cities = getCitiesForState(countryName, stateName);
  const city = cities.find((c) => c.name.trim().toLowerCase() === cityName.trim().toLowerCase());
  return city ? city.postalCode : "";
}

// src/app/views/base/dashboard/supplier.service.ts
var _SupplierService = class _SupplierService {
  constructor(http) {
    this.http = http;
    this.API = environment.API_URL + "leadcapture/api";
  }
  getAuthHeaders() {
    const token = localStorage.getItem("token") || "";
    return new HttpHeaders({
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    });
  }
  // ==================== CREATE SUPPLIER WITH COMPLETE HIERARCHY ====================
  createCompleteHierarchy(supplier) {
    const url = `${this.API}/supplier`;
    console.log(`%c[CREATE SUPPLIER] POST ${url}`, "color: #0066cc; font-weight: bold;");
    console.log("%c[PAYLOAD]", "color: #0066cc;", JSON.stringify(supplier, null, 2));
    return this.http.post(url, supplier, { headers: this.getAuthHeaders() }).pipe(tap((response) => {
      console.log("%c[\u2713 SUCCESS] Supplier created with complete hierarchy", "color: #00aa00; font-weight: bold;", response);
    }), map((response) => response?.data || response), catchError((error) => {
      console.error("%c[ERROR] Failed to create supplier", "color: #cc0000; font-weight: bold;", error);
      return throwError(() => error);
    }));
  }
  // ==================== UPDATE SUPPLIER WITH COMPLETE HIERARCHY ====================
  updateCompleteHierarchy(supplierId, supplier) {
    const url = `${this.API}/supplier/${supplierId}`;
    console.log(`%c[UPDATE SUPPLIER] PUT ${url}`, "color: #ff9800; font-weight: bold;");
    return this.http.put(url, supplier, { headers: this.getAuthHeaders() }).pipe(tap((response) => {
      console.log("%c[\u2713 SUCCESS] Supplier updated", "color: #00aa00; font-weight: bold;", response);
    }), map((response) => response?.data || response), catchError((error) => {
      console.error("%c[ERROR] Failed to update supplier", "color: #cc0000; font-weight: bold;", error);
      return throwError(() => error);
    }));
  }
  // ==================== GET ALL SUPPLIERS ====================
  getAllSuppliers() {
    const url = `${this.API}/supplier`;
    console.log(`%c[GET ALL SUPPLIERS] GET ${url}`, "color: #0066cc; font-weight: bold;");
    return this.http.get(url, { headers: this.getAuthHeaders() }).pipe(map((response) => {
      let suppliers = [];
      if (response?.data && Array.isArray(response.data)) {
        suppliers = response.data;
      } else if (Array.isArray(response)) {
        suppliers = response;
      } else {
        console.warn("Unexpected response structure:", response);
        suppliers = [];
      }
      console.log(`%c[\u2713 SUCCESS] Loaded ${suppliers.length} suppliers`, "color: #00aa00; font-weight: bold;");
      return suppliers;
    }), catchError((error) => {
      console.error("%c[ERROR] Failed to load suppliers", "color: #cc0000; font-weight: bold;", error);
      return of([]);
    }));
  }
  // ==================== GET SUPPLIER BY ID ====================
  getSupplierById(id) {
    const url = `${this.API}/supplier/${id}`;
    console.log(`%c[GET SUPPLIER] GET ${url}`, "color: #0066cc; font-weight: bold;");
    return this.http.get(url, { headers: this.getAuthHeaders() }).pipe(map((response) => {
      let supplier;
      if (response?.data) {
        supplier = response.data;
      } else if (response?.id) {
        supplier = response;
      } else {
        throw new Error("Invalid response structure");
      }
      console.log(`%c[\u2713 SUCCESS] Loaded supplier: ${supplier.companyName}`, "color: #00aa00; font-weight: bold;");
      return supplier;
    }), catchError((error) => {
      console.error(`%c[ERROR] Failed to load supplier ${id}`, "color: #cc0000; font-weight: bold;", error);
      return throwError(() => error);
    }));
  }
  // ==================== DELETE SUPPLIER ====================
  deleteSupplier(id) {
    const url = `${this.API}/supplier/${id}`;
    console.log(`%c[DELETE SUPPLIER] DELETE ${url}`, "color: #cc0000; font-weight: bold;");
    return this.http.delete(url, { headers: this.getAuthHeaders() }).pipe(tap((response) => {
      console.log(`%c[\u2713 SUCCESS] Supplier ${id} deleted`, "color: #00aa00; font-weight: bold;", response);
    }), catchError((error) => {
      console.error(`%c[ERROR] Failed to delete supplier ${id}`, "color: #cc0000; font-weight: bold;", error);
      return throwError(() => error);
    }));
  }
  // ==================== LOGO METHODS ====================
  /**
   * ✅ NEW: Get supplier logo as base64 data URL.
   * Backend returns plain text (data:image/...;base64,...) — responseType: 'text' is critical.
   * Mirrors BuyerService.getBuyerLogoBase64() exactly.
   */
  getSupplierLogoBase64(supplierId) {
    const url = `${this.API}/supplier/${supplierId}/logo/base64`;
    console.log("%c[GET SUPPLIER LOGO BASE64]", "color:#06c;font-weight:bold", { supplierId, url });
    return this.http.get(url, {
      // ✅ CRITICAL: responseType 'text' — backend returns plain text, not JSON
      responseType: "text",
      headers: new HttpHeaders({
        "Authorization": "Bearer " + (localStorage.getItem("token") || "")
      })
    }).pipe(map((raw) => {
      const trimmed = raw ? raw.trim() : "";
      if (!trimmed || trimmed === "null") {
        console.log("%c[SUPPLIER LOGO]", "color:#f90", "No logo for supplier:", supplierId);
        return null;
      }
      console.log("%c[SUPPLIER LOGO OK]", "color:#0a0", `${trimmed.substring(0, 40)}\u2026 (${trimmed.length} chars)`);
      return trimmed;
    }), catchError((err) => {
      console.warn("%c[SUPPLIER LOGO ERR]", "color:#c00", err.status, err.message);
      return of(null);
    }));
  }
  /**
   * ✅ NEW: Get supplier logo raw image URL (for use in <img [src]="...">)
   */
  getSupplierLogoUrl(supplierId) {
    return `${this.API}/supplier/${supplierId}/logo`;
  }
  /**
   * ✅ Helper to convert File to base64 data URL (shared with create component)
   */
  convertFileToBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file);
    });
  }
  // ==================== OTHER EXISTING METHODS ====================
  supplierServiceHealth() {
    const url = `${this.API}/supplier/health`;
    return this.http.get(url, { headers: this.getAuthHeaders() });
  }
  supplierLogin(loginRequest) {
    const url = `${this.API}/supplier/login`;
    return this.http.post(url, loginRequest).pipe(tap((response) => {
      console.log("%c[SUPPLIER LOGIN RESPONSE]", "color: #00aa00; font-weight: bold;", response);
    }), catchError((error) => {
      console.error("%c[SUPPLIER LOGIN ERROR]", "color: #cc0000;", error);
      return throwError(() => error);
    }));
  }
};
_SupplierService.\u0275fac = function SupplierService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SupplierService)(\u0275\u0275inject(HttpClient));
};
_SupplierService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SupplierService, factory: _SupplierService.\u0275fac, providedIn: "root" });
var SupplierService = _SupplierService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SupplierService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/views/base/create-s/create-s.component.ts
var _c0 = () => ({ standalone: true });
function CreateSComponent_div_36_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 81)(1, "div", 82);
    \u0275\u0275element(2, "img", 83);
    \u0275\u0275elementStart(3, "button", 84);
    \u0275\u0275listener("click", function CreateSComponent_div_36_div_11_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.removeLogo());
    });
    \u0275\u0275element(4, "i", 85);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "p", 86);
    \u0275\u0275element(6, "i", 87);
    \u0275\u0275text(7, " Logo selected ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r2.logoPreview, \u0275\u0275sanitizeUrl);
  }
}
function CreateSComponent_div_36_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 88)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 89);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.selectedLogoFile.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("(", (ctx_r2.selectedLogoFile.size / 1024).toFixed(2), " KB)");
  }
}
function CreateSComponent_div_36_option_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 90);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const type_r4 = ctx.$implicit;
    \u0275\u0275property("value", type_r4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(type_r4);
  }
}
function CreateSComponent_div_36_div_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42)(1, "label", 31);
    \u0275\u0275text(2, "Specify Company Type ");
    \u0275\u0275elementStart(3, "span", 43);
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(5, "input", 91);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("is-invalid", ((tmp_3_0 = ctx_r2.supplierForm.get("otherCompanyType")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx_r2.supplierForm.get("otherCompanyType")) == null ? null : tmp_3_0.touched));
  }
}
function CreateSComponent_div_36_option_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 90);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const sector_r5 = ctx.$implicit;
    \u0275\u0275property("value", sector_r5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(sector_r5);
  }
}
function CreateSComponent_div_36_div_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42)(1, "label", 31);
    \u0275\u0275text(2, "Specify Industry Sector ");
    \u0275\u0275elementStart(3, "span", 43);
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(5, "input", 92);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("is-invalid", ((tmp_3_0 = ctx_r2.supplierForm.get("otherIndustrySector")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx_r2.supplierForm.get("otherIndustrySector")) == null ? null : tmp_3_0.touched));
  }
}
function CreateSComponent_div_36_option_111_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 90);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r6 = ctx.$implicit;
    \u0275\u0275property("value", c_r6);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r6);
  }
}
function CreateSComponent_div_36_option_120_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 90);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r7 = ctx.$implicit;
    \u0275\u0275property("value", s_r7);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r7);
  }
}
function CreateSComponent_div_36_option_129_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 90);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r8 = ctx.$implicit;
    \u0275\u0275property("value", c_r8);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r8);
  }
}
function CreateSComponent_div_36_option_130_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 93);
    \u0275\u0275text(1, "\u2014 Others (type your city) \u2014");
    \u0275\u0275elementEnd();
  }
}
function CreateSComponent_div_36_div_131_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42)(1, "label", 31);
    \u0275\u0275text(2, " Specify City ");
    \u0275\u0275elementStart(3, "span", 43);
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "small", 61);
    \u0275\u0275text(6, "\u2014 enter postal code manually");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(7, "input", 94);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275classProp("is-invalid", ((tmp_3_0 = ctx_r2.supplierForm.get("otherCity")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx_r2.supplierForm.get("otherCity")) == null ? null : tmp_3_0.touched));
  }
}
function CreateSComponent_div_36_button_158_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 95);
    \u0275\u0275listener("click", function CreateSComponent_div_36_button_158_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.removeDoc("gst"));
    });
    \u0275\u0275text(1, "\u2715");
    \u0275\u0275elementEnd();
  }
}
function CreateSComponent_div_36_small_159_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 96);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u2713 ", ctx_r2.gstDocFile.name);
  }
}
function CreateSComponent_div_36_small_160_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 97);
    \u0275\u0275text(1, "Required");
    \u0275\u0275elementEnd();
  }
}
function CreateSComponent_div_36_button_176_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 95);
    \u0275\u0275listener("click", function CreateSComponent_div_36_button_176_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.removeDoc("pan"));
    });
    \u0275\u0275text(1, "\u2715");
    \u0275\u0275elementEnd();
  }
}
function CreateSComponent_div_36_small_177_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 96);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u2713 ", ctx_r2.panDocFile.name);
  }
}
function CreateSComponent_div_36_small_178_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 97);
    \u0275\u0275text(1, "Required");
    \u0275\u0275elementEnd();
  }
}
function CreateSComponent_div_36_button_190_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 95);
    \u0275\u0275listener("click", function CreateSComponent_div_36_button_190_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.removeDoc("tan"));
    });
    \u0275\u0275text(1, "\u2715");
    \u0275\u0275elementEnd();
  }
}
function CreateSComponent_div_36_small_191_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 96);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u2713 ", ctx_r2.tanDocFile.name);
  }
}
function CreateSComponent_div_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23)(1, "div", 24)(2, "h4");
    \u0275\u0275text(3, "Supplier Company Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 19);
    \u0275\u0275text(5, "Enter your company and contact information");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 25);
    \u0275\u0275text(7, "Company Logo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 26)(9, "div", 27)(10, "div", 28);
    \u0275\u0275template(11, CreateSComponent_div_36_div_11_Template, 8, 1, "div", 29);
    \u0275\u0275elementStart(12, "div", 30)(13, "label", 31);
    \u0275\u0275text(14, " Upload Company Logo ");
    \u0275\u0275elementStart(15, "span", 32);
    \u0275\u0275text(16, "(Optional - Max 5MB, JPG/PNG/GIF/SVG)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 33)(18, "input", 34, 0);
    \u0275\u0275listener("change", function CreateSComponent_div_36_Template_input_change_18_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onLogoSelected($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "label", 35)(21, "div", 36);
    \u0275\u0275element(22, "i", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 38)(24, "strong");
    \u0275\u0275text(25, "Click to upload");
    \u0275\u0275elementEnd();
    \u0275\u0275text(26, " or drag and drop");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 39);
    \u0275\u0275text(28, "JPG, PNG, GIF or SVG (Max 5MB)");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(29, CreateSComponent_div_36_div_29_Template, 5, 2, "div", 40);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(30, "div", 41);
    \u0275\u0275text(31, "Company Information");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 26)(33, "div", 42)(34, "label", 31);
    \u0275\u0275text(35, "Company Name ");
    \u0275\u0275elementStart(36, "span", 43);
    \u0275\u0275text(37, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(38, "input", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "div", 42)(40, "label", 31);
    \u0275\u0275text(41, "Company Type ");
    \u0275\u0275elementStart(42, "span", 43);
    \u0275\u0275text(43, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "select", 45);
    \u0275\u0275listener("change", function CreateSComponent_div_36_Template_select_change_44_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onCompanyTypeChange($event));
    });
    \u0275\u0275elementStart(45, "option", 46);
    \u0275\u0275text(46, "Select Company Type");
    \u0275\u0275elementEnd();
    \u0275\u0275template(47, CreateSComponent_div_36_option_47_Template, 2, 2, "option", 47);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(48, CreateSComponent_div_36_div_48_Template, 6, 2, "div", 48);
    \u0275\u0275elementStart(49, "div", 42)(50, "label", 31);
    \u0275\u0275text(51, "Industry Sector ");
    \u0275\u0275elementStart(52, "span", 43);
    \u0275\u0275text(53, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(54, "select", 49);
    \u0275\u0275listener("change", function CreateSComponent_div_36_Template_select_change_54_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onIndustrySectorChange($event));
    });
    \u0275\u0275elementStart(55, "option", 46);
    \u0275\u0275text(56, "Select Industry Sector");
    \u0275\u0275elementEnd();
    \u0275\u0275template(57, CreateSComponent_div_36_option_57_Template, 2, 2, "option", 47);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(58, CreateSComponent_div_36_div_58_Template, 6, 2, "div", 48);
    \u0275\u0275elementStart(59, "div", 42)(60, "label", 31);
    \u0275\u0275text(61, "Website");
    \u0275\u0275elementEnd();
    \u0275\u0275element(62, "input", 50);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(63, "div", 41);
    \u0275\u0275text(64, "Primary Contact Person");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "div", 26)(66, "div", 42)(67, "label", 31);
    \u0275\u0275text(68, "Contact Person Name ");
    \u0275\u0275elementStart(69, "span", 43);
    \u0275\u0275text(70, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(71, "input", 51);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "div", 42)(73, "label", 31);
    \u0275\u0275text(74, "Designation ");
    \u0275\u0275elementStart(75, "span", 43);
    \u0275\u0275text(76, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(77, "input", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(78, "div", 42)(79, "label", 31);
    \u0275\u0275text(80, "Email ");
    \u0275\u0275elementStart(81, "span", 43);
    \u0275\u0275text(82, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(83, "input", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(84, "div", 42)(85, "label", 31);
    \u0275\u0275text(86, "Phone ");
    \u0275\u0275elementStart(87, "span", 43);
    \u0275\u0275text(88, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(89, "input", 54);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(90, "div", 41);
    \u0275\u0275text(91, "Headquarters Address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(92, "div", 26)(93, "div", 27)(94, "label", 31);
    \u0275\u0275text(95, "Address Line 1 ");
    \u0275\u0275elementStart(96, "span", 43);
    \u0275\u0275text(97, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(98, "input", 55);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(99, "div", 27)(100, "label", 31);
    \u0275\u0275text(101, "Address Line 2");
    \u0275\u0275elementEnd();
    \u0275\u0275element(102, "input", 56);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(103, "div", 42)(104, "label", 31);
    \u0275\u0275text(105, "Country ");
    \u0275\u0275elementStart(106, "span", 43);
    \u0275\u0275text(107, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(108, "select", 57);
    \u0275\u0275listener("change", function CreateSComponent_div_36_Template_select_change_108_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onHQCountryChange($event));
    });
    \u0275\u0275elementStart(109, "option", 46);
    \u0275\u0275text(110, "Select Country");
    \u0275\u0275elementEnd();
    \u0275\u0275template(111, CreateSComponent_div_36_option_111_Template, 2, 2, "option", 47);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(112, "div", 42)(113, "label", 31);
    \u0275\u0275text(114, "State / Province ");
    \u0275\u0275elementStart(115, "span", 43);
    \u0275\u0275text(116, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(117, "select", 58);
    \u0275\u0275listener("change", function CreateSComponent_div_36_Template_select_change_117_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onHQStateChange($event));
    });
    \u0275\u0275elementStart(118, "option", 46);
    \u0275\u0275text(119);
    \u0275\u0275elementEnd();
    \u0275\u0275template(120, CreateSComponent_div_36_option_120_Template, 2, 2, "option", 47);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(121, "div", 42)(122, "label", 31);
    \u0275\u0275text(123, "City ");
    \u0275\u0275elementStart(124, "span", 43);
    \u0275\u0275text(125, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(126, "select", 59);
    \u0275\u0275listener("change", function CreateSComponent_div_36_Template_select_change_126_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onHQCityChange($event));
    });
    \u0275\u0275elementStart(127, "option", 46);
    \u0275\u0275text(128);
    \u0275\u0275elementEnd();
    \u0275\u0275template(129, CreateSComponent_div_36_option_129_Template, 2, 2, "option", 47)(130, CreateSComponent_div_36_option_130_Template, 2, 0, "option", 60);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(131, CreateSComponent_div_36_div_131_Template, 8, 2, "div", 48);
    \u0275\u0275elementStart(132, "div", 42)(133, "label", 31);
    \u0275\u0275text(134, " Postal Code ");
    \u0275\u0275elementStart(135, "span", 43);
    \u0275\u0275text(136, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(137, "small", 61);
    \u0275\u0275text(138);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(139, "input", 62);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(140, "div", 41);
    \u0275\u0275text(141, "Company Registration Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(142, "div", 26)(143, "div", 63)(144, "label", 31);
    \u0275\u0275text(145, "GST Number ");
    \u0275\u0275elementStart(146, "span", 43);
    \u0275\u0275text(147, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(148, "input", 64);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(149, "div", 65)(150, "label", 31);
    \u0275\u0275text(151, "GST Certificate ");
    \u0275\u0275elementStart(152, "span", 43);
    \u0275\u0275text(153, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(154, "small", 66);
    \u0275\u0275text(155, "(PDF/JPG/PNG, Max 5MB)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(156, "div", 67)(157, "input", 68);
    \u0275\u0275listener("change", function CreateSComponent_div_36_Template_input_change_157_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDocSelected($event, "gst"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(158, CreateSComponent_div_36_button_158_Template, 2, 0, "button", 69);
    \u0275\u0275elementEnd();
    \u0275\u0275template(159, CreateSComponent_div_36_small_159_Template, 2, 1, "small", 70)(160, CreateSComponent_div_36_small_160_Template, 2, 0, "small", 71);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(161, "div", 63)(162, "label", 31);
    \u0275\u0275text(163, "PAN Number ");
    \u0275\u0275elementStart(164, "span", 43);
    \u0275\u0275text(165, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(166, "input", 72);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(167, "div", 65)(168, "label", 31);
    \u0275\u0275text(169, "PAN Card ");
    \u0275\u0275elementStart(170, "span", 43);
    \u0275\u0275text(171, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(172, "small", 66);
    \u0275\u0275text(173, "(PDF/JPG/PNG, Max 5MB)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(174, "div", 67)(175, "input", 73);
    \u0275\u0275listener("change", function CreateSComponent_div_36_Template_input_change_175_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDocSelected($event, "pan"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(176, CreateSComponent_div_36_button_176_Template, 2, 0, "button", 69);
    \u0275\u0275elementEnd();
    \u0275\u0275template(177, CreateSComponent_div_36_small_177_Template, 2, 1, "small", 70)(178, CreateSComponent_div_36_small_178_Template, 2, 0, "small", 71);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(179, "div", 63)(180, "label", 31);
    \u0275\u0275text(181, "TAN Number");
    \u0275\u0275elementEnd();
    \u0275\u0275element(182, "input", 74);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(183, "div", 65)(184, "label", 31);
    \u0275\u0275text(185, "TAN Document ");
    \u0275\u0275elementStart(186, "small", 66);
    \u0275\u0275text(187, "(PDF/JPG/PNG, Max 5MB)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(188, "div", 67)(189, "input", 75);
    \u0275\u0275listener("change", function CreateSComponent_div_36_Template_input_change_189_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDocSelected($event, "tan"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(190, CreateSComponent_div_36_button_190_Template, 2, 0, "button", 69);
    \u0275\u0275elementEnd();
    \u0275\u0275template(191, CreateSComponent_div_36_small_191_Template, 2, 1, "small", 70);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(192, "div", 41);
    \u0275\u0275text(193, "Bank Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(194, "div", 26)(195, "div", 42)(196, "label", 31);
    \u0275\u0275text(197, "Account Holder Name ");
    \u0275\u0275elementStart(198, "span", 43);
    \u0275\u0275text(199, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(200, "input", 76);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(201, "div", 42)(202, "label", 31);
    \u0275\u0275text(203, "Bank Account Number ");
    \u0275\u0275elementStart(204, "span", 43);
    \u0275\u0275text(205, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(206, "input", 77);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(207, "div", 63)(208, "label", 31);
    \u0275\u0275text(209, "Bank Name ");
    \u0275\u0275elementStart(210, "span", 43);
    \u0275\u0275text(211, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(212, "input", 78);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(213, "div", 63)(214, "label", 31);
    \u0275\u0275text(215, "Branch Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(216, "input", 79);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(217, "div", 63)(218, "label", 31);
    \u0275\u0275text(219, "IFSC Code ");
    \u0275\u0275elementStart(220, "span", 43);
    \u0275\u0275text(221, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(222, "input", 80);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_5_0;
    let tmp_6_0;
    let tmp_8_0;
    let tmp_9_0;
    let tmp_11_0;
    let tmp_12_0;
    let tmp_13_0;
    let tmp_14_0;
    let tmp_15_0;
    let tmp_16_0;
    let tmp_17_0;
    let tmp_19_0;
    let tmp_20_0;
    let tmp_22_0;
    let tmp_23_0;
    let tmp_28_0;
    let tmp_29_0;
    let tmp_33_0;
    let tmp_39_0;
    let tmp_40_0;
    let tmp_41_0;
    let tmp_42_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275property("ngIf", ctx_r2.logoPreview);
    \u0275\u0275advance();
    \u0275\u0275classProp("has-logo", ctx_r2.logoPreview);
    \u0275\u0275advance(17);
    \u0275\u0275property("ngIf", ctx_r2.selectedLogoFile && !ctx_r2.logoPreview);
    \u0275\u0275advance(9);
    \u0275\u0275classProp("is-invalid", ((tmp_5_0 = ctx_r2.supplierForm.get("companyName")) == null ? null : tmp_5_0.invalid) && ((tmp_5_0 = ctx_r2.supplierForm.get("companyName")) == null ? null : tmp_5_0.touched));
    \u0275\u0275advance(6);
    \u0275\u0275classProp("is-invalid", ((tmp_6_0 = ctx_r2.supplierForm.get("companyType")) == null ? null : tmp_6_0.invalid) && ((tmp_6_0 = ctx_r2.supplierForm.get("companyType")) == null ? null : tmp_6_0.touched));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r2.companyTypes);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_8_0 = ctx_r2.supplierForm.get("companyType")) == null ? null : tmp_8_0.value) === "Others");
    \u0275\u0275advance(6);
    \u0275\u0275classProp("is-invalid", ((tmp_9_0 = ctx_r2.supplierForm.get("industrySector")) == null ? null : tmp_9_0.invalid) && ((tmp_9_0 = ctx_r2.supplierForm.get("industrySector")) == null ? null : tmp_9_0.touched));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r2.industrySectors);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_11_0 = ctx_r2.supplierForm.get("industrySector")) == null ? null : tmp_11_0.value) === "Others");
    \u0275\u0275advance(13);
    \u0275\u0275classProp("is-invalid", ((tmp_12_0 = ctx_r2.supplierForm.get("contactPersonName")) == null ? null : tmp_12_0.invalid) && ((tmp_12_0 = ctx_r2.supplierForm.get("contactPersonName")) == null ? null : tmp_12_0.touched));
    \u0275\u0275advance(6);
    \u0275\u0275classProp("is-invalid", ((tmp_13_0 = ctx_r2.supplierForm.get("contactPersonDesignation")) == null ? null : tmp_13_0.invalid) && ((tmp_13_0 = ctx_r2.supplierForm.get("contactPersonDesignation")) == null ? null : tmp_13_0.touched));
    \u0275\u0275advance(6);
    \u0275\u0275classProp("is-invalid", ((tmp_14_0 = ctx_r2.supplierForm.get("contactPersonEmail")) == null ? null : tmp_14_0.invalid) && ((tmp_14_0 = ctx_r2.supplierForm.get("contactPersonEmail")) == null ? null : tmp_14_0.touched));
    \u0275\u0275advance(6);
    \u0275\u0275classProp("is-invalid", ((tmp_15_0 = ctx_r2.supplierForm.get("contactPersonPhone")) == null ? null : tmp_15_0.invalid) && ((tmp_15_0 = ctx_r2.supplierForm.get("contactPersonPhone")) == null ? null : tmp_15_0.touched));
    \u0275\u0275advance(9);
    \u0275\u0275classProp("is-invalid", ((tmp_16_0 = ctx_r2.supplierForm.get("addressLine1")) == null ? null : tmp_16_0.invalid) && ((tmp_16_0 = ctx_r2.supplierForm.get("addressLine1")) == null ? null : tmp_16_0.touched));
    \u0275\u0275advance(10);
    \u0275\u0275classProp("is-invalid", ((tmp_17_0 = ctx_r2.supplierForm.get("country")) == null ? null : tmp_17_0.invalid) && ((tmp_17_0 = ctx_r2.supplierForm.get("country")) == null ? null : tmp_17_0.touched));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r2.allCountries);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("is-invalid", ((tmp_19_0 = ctx_r2.supplierForm.get("state")) == null ? null : tmp_19_0.invalid) && ((tmp_19_0 = ctx_r2.supplierForm.get("state")) == null ? null : tmp_19_0.touched));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(((tmp_20_0 = ctx_r2.supplierForm.get("country")) == null ? null : tmp_20_0.value) ? "Select State" : "Select Country first");
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.hqStates);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("is-invalid", ((tmp_22_0 = ctx_r2.supplierForm.get("city")) == null ? null : tmp_22_0.invalid) && ((tmp_22_0 = ctx_r2.supplierForm.get("city")) == null ? null : tmp_22_0.touched));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(((tmp_23_0 = ctx_r2.supplierForm.get("state")) == null ? null : tmp_23_0.value) ? "Select City" : "Select State first");
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.hqCities);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.hqCities.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.hqCityIsOthers);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", ctx_r2.hqCityIsOthers ? "(enter manually)" : "(auto-filled, editable)", " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("is-invalid", ((tmp_28_0 = ctx_r2.supplierForm.get("postalCode")) == null ? null : tmp_28_0.invalid) && ((tmp_28_0 = ctx_r2.supplierForm.get("postalCode")) == null ? null : tmp_28_0.touched));
    \u0275\u0275advance(9);
    \u0275\u0275classProp("is-invalid", ((tmp_29_0 = ctx_r2.supplierForm.get("gstNumber")) == null ? null : tmp_29_0.invalid) && ((tmp_29_0 = ctx_r2.supplierForm.get("gstNumber")) == null ? null : tmp_29_0.touched));
    \u0275\u0275advance(10);
    \u0275\u0275property("ngIf", ctx_r2.gstDocFile);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.gstDocFile);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.gstDocFile && ctx_r2.mode === "create");
    \u0275\u0275advance(6);
    \u0275\u0275classProp("is-invalid", ((tmp_33_0 = ctx_r2.supplierForm.get("panNumber")) == null ? null : tmp_33_0.invalid) && ((tmp_33_0 = ctx_r2.supplierForm.get("panNumber")) == null ? null : tmp_33_0.touched));
    \u0275\u0275advance(10);
    \u0275\u0275property("ngIf", ctx_r2.panDocFile);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.panDocFile);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.panDocFile && ctx_r2.mode === "create");
    \u0275\u0275advance(12);
    \u0275\u0275property("ngIf", ctx_r2.tanDocFile);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.tanDocFile);
    \u0275\u0275advance(9);
    \u0275\u0275classProp("is-invalid", ((tmp_39_0 = ctx_r2.supplierForm.get("bankAccountHolderName")) == null ? null : tmp_39_0.invalid) && ((tmp_39_0 = ctx_r2.supplierForm.get("bankAccountHolderName")) == null ? null : tmp_39_0.touched));
    \u0275\u0275advance(6);
    \u0275\u0275classProp("is-invalid", ((tmp_40_0 = ctx_r2.supplierForm.get("bankAccountNumber")) == null ? null : tmp_40_0.invalid) && ((tmp_40_0 = ctx_r2.supplierForm.get("bankAccountNumber")) == null ? null : tmp_40_0.touched));
    \u0275\u0275advance(6);
    \u0275\u0275classProp("is-invalid", ((tmp_41_0 = ctx_r2.supplierForm.get("bankName")) == null ? null : tmp_41_0.invalid) && ((tmp_41_0 = ctx_r2.supplierForm.get("bankName")) == null ? null : tmp_41_0.touched));
    \u0275\u0275advance(10);
    \u0275\u0275classProp("is-invalid", ((tmp_42_0 = ctx_r2.supplierForm.get("bankIfscCode")) == null ? null : tmp_42_0.invalid) && ((tmp_42_0 = ctx_r2.supplierForm.get("bankIfscCode")) == null ? null : tmp_42_0.touched));
  }
}
function CreateSComponent_div_37_div_7_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 95);
    \u0275\u0275listener("click", function CreateSComponent_div_37_div_7_button_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r14);
      const i_r15 = \u0275\u0275nextContext().index;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.removeLocation(i_r15));
    });
    \u0275\u0275element(1, "i", 112);
    \u0275\u0275text(2, " Remove ");
    \u0275\u0275elementEnd();
  }
}
function CreateSComponent_div_37_div_7_option_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 90);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const type_r16 = ctx.$implicit;
    \u0275\u0275property("value", type_r16);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(type_r16);
  }
}
function CreateSComponent_div_37_div_7_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42)(1, "label", 31);
    \u0275\u0275text(2, "Specify Location Type ");
    \u0275\u0275elementStart(3, "span", 43);
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(5, "input", 113);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_5_0;
    const loc_r17 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275classProp("is-invalid", ((tmp_5_0 = loc_r17.get("otherLocationType")) == null ? null : tmp_5_0.invalid) && ((tmp_5_0 = loc_r17.get("otherLocationType")) == null ? null : tmp_5_0.touched));
  }
}
function CreateSComponent_div_37_div_7_option_71_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 90);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r18 = ctx.$implicit;
    \u0275\u0275property("value", c_r18);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r18);
  }
}
function CreateSComponent_div_37_div_7_option_80_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 90);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r19 = ctx.$implicit;
    \u0275\u0275property("value", s_r19);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r19);
  }
}
function CreateSComponent_div_37_div_7_option_89_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 90);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r20 = ctx.$implicit;
    \u0275\u0275property("value", c_r20);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r20);
  }
}
function CreateSComponent_div_37_div_7_option_90_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 93);
    \u0275\u0275text(1, "\u2014 Others (type your city) \u2014");
    \u0275\u0275elementEnd();
  }
}
function CreateSComponent_div_37_div_7_div_91_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42)(1, "label", 31);
    \u0275\u0275text(2, " Specify City ");
    \u0275\u0275elementStart(3, "span", 43);
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "small", 61);
    \u0275\u0275text(6, "\u2014 enter postal code manually");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(7, "input", 94);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_5_0;
    const loc_r17 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(7);
    \u0275\u0275classProp("is-invalid", ((tmp_5_0 = loc_r17.get("otherCity")) == null ? null : tmp_5_0.invalid) && ((tmp_5_0 = loc_r17.get("otherCity")) == null ? null : tmp_5_0.touched));
  }
}
function CreateSComponent_div_37_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 102)(1, "div", 103)(2, "h6", 104);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, CreateSComponent_div_37_div_7_button_4_Template, 3, 0, "button", 69);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 105)(6, "div", 41);
    \u0275\u0275text(7, "Location Information");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 26)(9, "div", 42)(10, "label", 31);
    \u0275\u0275text(11, "Location Name ");
    \u0275\u0275elementStart(12, "span", 43);
    \u0275\u0275text(13, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(14, "input", 106);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 42)(16, "label", 31);
    \u0275\u0275text(17, "Location Type ");
    \u0275\u0275elementStart(18, "span", 43);
    \u0275\u0275text(19, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "select", 107);
    \u0275\u0275listener("change", function CreateSComponent_div_37_div_7_Template_select_change_20_listener($event) {
      const i_r15 = \u0275\u0275restoreView(_r13).index;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onLocationTypeChange($event, i_r15));
    });
    \u0275\u0275elementStart(21, "option", 46);
    \u0275\u0275text(22, "Select Type");
    \u0275\u0275elementEnd();
    \u0275\u0275template(23, CreateSComponent_div_37_div_7_option_23_Template, 2, 2, "option", 47);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(24, CreateSComponent_div_37_div_7_div_24_Template, 6, 2, "div", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 41);
    \u0275\u0275text(26, "Location Contact Person");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 26)(28, "div", 42)(29, "label", 31);
    \u0275\u0275text(30, "Contact Name ");
    \u0275\u0275elementStart(31, "span", 43);
    \u0275\u0275text(32, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(33, "input", 108);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 42)(35, "label", 31);
    \u0275\u0275text(36, "Email ");
    \u0275\u0275elementStart(37, "span", 43);
    \u0275\u0275text(38, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(39, "input", 109);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div", 42)(41, "label", 31);
    \u0275\u0275text(42, "Phone ");
    \u0275\u0275elementStart(43, "span", 43);
    \u0275\u0275text(44, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(45, "input", 110);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "div", 42)(47, "label", 31);
    \u0275\u0275text(48, "Landline Number");
    \u0275\u0275elementEnd();
    \u0275\u0275element(49, "input", 111);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "div", 41);
    \u0275\u0275text(51, "Location Address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "div", 26)(53, "div", 27)(54, "label", 31);
    \u0275\u0275text(55, "Address Line 1 ");
    \u0275\u0275elementStart(56, "span", 43);
    \u0275\u0275text(57, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(58, "input", 55);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "div", 27)(60, "label", 31);
    \u0275\u0275text(61, "Address Line 2");
    \u0275\u0275elementEnd();
    \u0275\u0275element(62, "input", 56);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "div", 42)(64, "label", 31);
    \u0275\u0275text(65, "Country ");
    \u0275\u0275elementStart(66, "span", 43);
    \u0275\u0275text(67, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(68, "select", 57);
    \u0275\u0275listener("change", function CreateSComponent_div_37_div_7_Template_select_change_68_listener($event) {
      const i_r15 = \u0275\u0275restoreView(_r13).index;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onLocationCountryChange($event, i_r15));
    });
    \u0275\u0275elementStart(69, "option", 46);
    \u0275\u0275text(70, "Select Country");
    \u0275\u0275elementEnd();
    \u0275\u0275template(71, CreateSComponent_div_37_div_7_option_71_Template, 2, 2, "option", 47);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(72, "div", 42)(73, "label", 31);
    \u0275\u0275text(74, "State / Province ");
    \u0275\u0275elementStart(75, "span", 43);
    \u0275\u0275text(76, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(77, "select", 58);
    \u0275\u0275listener("change", function CreateSComponent_div_37_div_7_Template_select_change_77_listener($event) {
      const i_r15 = \u0275\u0275restoreView(_r13).index;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onLocationStateChange($event, i_r15));
    });
    \u0275\u0275elementStart(78, "option", 46);
    \u0275\u0275text(79);
    \u0275\u0275elementEnd();
    \u0275\u0275template(80, CreateSComponent_div_37_div_7_option_80_Template, 2, 2, "option", 47);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(81, "div", 42)(82, "label", 31);
    \u0275\u0275text(83, "City ");
    \u0275\u0275elementStart(84, "span", 43);
    \u0275\u0275text(85, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(86, "select", 59);
    \u0275\u0275listener("change", function CreateSComponent_div_37_div_7_Template_select_change_86_listener($event) {
      const i_r15 = \u0275\u0275restoreView(_r13).index;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onLocationCityChange($event, i_r15));
    });
    \u0275\u0275elementStart(87, "option", 46);
    \u0275\u0275text(88);
    \u0275\u0275elementEnd();
    \u0275\u0275template(89, CreateSComponent_div_37_div_7_option_89_Template, 2, 2, "option", 47)(90, CreateSComponent_div_37_div_7_option_90_Template, 2, 0, "option", 60);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(91, CreateSComponent_div_37_div_7_div_91_Template, 8, 2, "div", 48);
    \u0275\u0275elementStart(92, "div", 42)(93, "label", 31);
    \u0275\u0275text(94, " Postal Code ");
    \u0275\u0275elementStart(95, "span", 43);
    \u0275\u0275text(96, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(97, "small", 61);
    \u0275\u0275text(98);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(99, "input", 62);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_7_0;
    let tmp_8_0;
    let tmp_10_0;
    let tmp_11_0;
    let tmp_12_0;
    let tmp_13_0;
    let tmp_14_0;
    let tmp_15_0;
    let tmp_17_0;
    let tmp_18_0;
    let tmp_20_0;
    let tmp_21_0;
    let tmp_26_0;
    const loc_r17 = ctx.$implicit;
    const i_r15 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("formGroupName", i_r15);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Location ", i_r15 + 1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.locations.length > 1);
    \u0275\u0275advance(10);
    \u0275\u0275classProp("is-invalid", ((tmp_7_0 = loc_r17.get("locationName")) == null ? null : tmp_7_0.invalid) && ((tmp_7_0 = loc_r17.get("locationName")) == null ? null : tmp_7_0.touched));
    \u0275\u0275advance(6);
    \u0275\u0275classProp("is-invalid", ((tmp_8_0 = loc_r17.get("locationType")) == null ? null : tmp_8_0.invalid) && ((tmp_8_0 = loc_r17.get("locationType")) == null ? null : tmp_8_0.touched));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r2.locationTypes);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_10_0 = loc_r17.get("locationType")) == null ? null : tmp_10_0.value) === "Others");
    \u0275\u0275advance(9);
    \u0275\u0275classProp("is-invalid", ((tmp_11_0 = loc_r17.get("locationContactName")) == null ? null : tmp_11_0.invalid) && ((tmp_11_0 = loc_r17.get("locationContactName")) == null ? null : tmp_11_0.touched));
    \u0275\u0275advance(6);
    \u0275\u0275classProp("is-invalid", ((tmp_12_0 = loc_r17.get("locationContactEmail")) == null ? null : tmp_12_0.invalid) && ((tmp_12_0 = loc_r17.get("locationContactEmail")) == null ? null : tmp_12_0.touched));
    \u0275\u0275advance(6);
    \u0275\u0275classProp("is-invalid", ((tmp_13_0 = loc_r17.get("locationContactPhone")) == null ? null : tmp_13_0.invalid) && ((tmp_13_0 = loc_r17.get("locationContactPhone")) == null ? null : tmp_13_0.touched));
    \u0275\u0275advance(13);
    \u0275\u0275classProp("is-invalid", ((tmp_14_0 = loc_r17.get("addressLine1")) == null ? null : tmp_14_0.invalid) && ((tmp_14_0 = loc_r17.get("addressLine1")) == null ? null : tmp_14_0.touched));
    \u0275\u0275advance(10);
    \u0275\u0275classProp("is-invalid", ((tmp_15_0 = loc_r17.get("country")) == null ? null : tmp_15_0.invalid) && ((tmp_15_0 = loc_r17.get("country")) == null ? null : tmp_15_0.touched));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r2.allCountries);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("is-invalid", ((tmp_17_0 = loc_r17.get("state")) == null ? null : tmp_17_0.invalid) && ((tmp_17_0 = loc_r17.get("state")) == null ? null : tmp_17_0.touched));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(((tmp_18_0 = loc_r17.get("country")) == null ? null : tmp_18_0.value) ? "Select State" : "Select Country first");
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.getStatesForLocation(i_r15));
    \u0275\u0275advance(6);
    \u0275\u0275classProp("is-invalid", ((tmp_20_0 = loc_r17.get("city")) == null ? null : tmp_20_0.invalid) && ((tmp_20_0 = loc_r17.get("city")) == null ? null : tmp_20_0.touched));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(((tmp_21_0 = loc_r17.get("state")) == null ? null : tmp_21_0.value) ? "Select City" : "Select State first");
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.getCitiesForLocation(i_r15));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.getCitiesForLocation(i_r15).length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isLocationCityOthers(i_r15));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", ctx_r2.isLocationCityOthers(i_r15) ? "(enter manually)" : "(auto-filled, editable)", " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("is-invalid", ((tmp_26_0 = loc_r17.get("postalCode")) == null ? null : tmp_26_0.invalid) && ((tmp_26_0 = loc_r17.get("postalCode")) == null ? null : tmp_26_0.touched));
  }
}
function CreateSComponent_div_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23)(1, "div", 24)(2, "h4");
    \u0275\u0275text(3, "Add Supplier Locations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 19);
    \u0275\u0275text(5, "Add office and warehouse locations");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 98);
    \u0275\u0275template(7, CreateSComponent_div_37_div_7_Template, 100, 33, "div", 99);
    \u0275\u0275elementStart(8, "button", 100);
    \u0275\u0275listener("click", function CreateSComponent_div_37_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.addLocation());
    });
    \u0275\u0275element(9, "i", 101);
    \u0275\u0275text(10, " Add Another Location ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx_r2.locations.controls);
  }
}
function CreateSComponent_div_38_div_7_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 95);
    \u0275\u0275listener("click", function CreateSComponent_div_38_div_7_button_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r23);
      const i_r24 = \u0275\u0275nextContext().index;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.removeDepartment(i_r24));
    });
    \u0275\u0275element(1, "i", 112);
    \u0275\u0275text(2, " Remove ");
    \u0275\u0275elementEnd();
  }
}
function CreateSComponent_div_38_div_7_option_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 90);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_8_0;
    const loc_r25 = ctx.$implicit;
    const idx_r26 = ctx.index;
    \u0275\u0275property("value", idx_r26);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ((tmp_8_0 = loc_r25.get("locationName")) == null ? null : tmp_8_0.value) || "Location " + (idx_r26 + 1), " ");
  }
}
function CreateSComponent_div_38_div_7_option_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 90);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const category_r27 = ctx.$implicit;
    \u0275\u0275property("value", category_r27);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(category_r27);
  }
}
function CreateSComponent_div_38_div_7_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42)(1, "label", 31);
    \u0275\u0275text(2, "Specify Category Type ");
    \u0275\u0275elementStart(3, "span", 43);
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(5, "input", 120);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_5_0;
    const dept_r28 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275classProp("is-invalid", ((tmp_5_0 = dept_r28.get("otherCategoryType")) == null ? null : tmp_5_0.invalid) && ((tmp_5_0 = dept_r28.get("otherCategoryType")) == null ? null : tmp_5_0.touched));
  }
}
function CreateSComponent_div_38_div_7_div_34_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 126)(1, "div", 127)(2, "span", 128);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 129)(5, "button", 130);
    \u0275\u0275listener("click", function CreateSComponent_div_38_div_7_div_34_div_5_Template_button_click_5_listener() {
      const q_r30 = \u0275\u0275restoreView(_r29).$implicit;
      const i_r24 = \u0275\u0275nextContext(2).index;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.setQuestionnaireAnswer(i_r24, q_r30.id, true));
    });
    \u0275\u0275text(6, "Yes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 130);
    \u0275\u0275listener("click", function CreateSComponent_div_38_div_7_div_34_div_5_Template_button_click_7_listener() {
      const q_r30 = \u0275\u0275restoreView(_r29).$implicit;
      const i_r24 = \u0275\u0275nextContext(2).index;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.setQuestionnaireAnswer(i_r24, q_r30.id, false));
    });
    \u0275\u0275text(8, "No");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "input", 131);
    \u0275\u0275listener("ngModelChange", function CreateSComponent_div_38_div_7_div_34_div_5_Template_input_ngModelChange_9_listener($event) {
      const q_r30 = \u0275\u0275restoreView(_r29).$implicit;
      const i_r24 = \u0275\u0275nextContext(2).index;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.setQuestionnaireRemarks(i_r24, q_r30.id, $event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const q_r30 = ctx.$implicit;
    const i_r24 = \u0275\u0275nextContext(2).index;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(q_r30.questionText);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("btn-success", ctx_r2.getQuestionnaireAnswer(i_r24, q_r30.id) === true)("btn-outline-secondary", ctx_r2.getQuestionnaireAnswer(i_r24, q_r30.id) !== true);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("btn-danger", ctx_r2.getQuestionnaireAnswer(i_r24, q_r30.id) === false)("btn-outline-secondary", ctx_r2.getQuestionnaireAnswer(i_r24, q_r30.id) !== false);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r2.getQuestionnaireRemarks(i_r24, q_r30.id))("ngModelOptions", \u0275\u0275pureFunction0(11, _c0));
  }
}
function CreateSComponent_div_38_div_7_div_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 121)(1, "div", 122)(2, "label", 123);
    \u0275\u0275element(3, "i", 124);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, CreateSComponent_div_38_div_7_div_34_div_5_Template, 10, 12, "div", 125);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_5_0;
    const ctx_r30 = \u0275\u0275nextContext();
    const dept_r28 = ctx_r30.$implicit;
    const i_r24 = ctx_r30.index;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" Standards Questionnaire for ", (tmp_5_0 = dept_r28.get("categoryOfProducts")) == null ? null : tmp_5_0.value, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.departmentQuestionnaires[i_r24]);
  }
}
function CreateSComponent_div_38_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 102)(1, "div", 103)(2, "h6", 104);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, CreateSComponent_div_38_div_7_button_4_Template, 3, 0, "button", 69);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 105)(6, "div", 26)(7, "div", 27)(8, "label", 31);
    \u0275\u0275text(9, "Select Location ");
    \u0275\u0275elementStart(10, "span", 43);
    \u0275\u0275text(11, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "select", 115)(13, "option", 46);
    \u0275\u0275text(14, "Choose a location");
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, CreateSComponent_div_38_div_7_option_15_Template, 2, 2, "option", 47);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 42)(17, "label", 31);
    \u0275\u0275text(18, "Category Name ");
    \u0275\u0275elementStart(19, "span", 43);
    \u0275\u0275text(20, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(21, "input", 116);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 42)(23, "label", 31);
    \u0275\u0275text(24, "Category Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "select", 117);
    \u0275\u0275listener("change", function CreateSComponent_div_38_div_7_Template_select_change_25_listener($event) {
      const i_r24 = \u0275\u0275restoreView(_r22).index;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onCategoryTypeChange($event, i_r24));
    });
    \u0275\u0275elementStart(26, "option", 46);
    \u0275\u0275text(27, "Select Type");
    \u0275\u0275elementEnd();
    \u0275\u0275template(28, CreateSComponent_div_38_div_7_option_28_Template, 2, 2, "option", 47);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(29, CreateSComponent_div_38_div_7_div_29_Template, 6, 2, "div", 48);
    \u0275\u0275elementStart(30, "div", 27)(31, "label", 31);
    \u0275\u0275text(32, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275element(33, "textarea", 118);
    \u0275\u0275elementEnd();
    \u0275\u0275template(34, CreateSComponent_div_38_div_7_div_34_Template, 6, 2, "div", 119);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_7_0;
    let tmp_9_0;
    let tmp_11_0;
    const dept_r28 = ctx.$implicit;
    const i_r24 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("formGroupName", i_r24);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Category ", i_r24 + 1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.departments.length > 1);
    \u0275\u0275advance(8);
    \u0275\u0275classProp("is-invalid", ((tmp_7_0 = dept_r28.get("locationIndex")) == null ? null : tmp_7_0.invalid) && ((tmp_7_0 = dept_r28.get("locationIndex")) == null ? null : tmp_7_0.touched));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r2.locations.controls);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("is-invalid", ((tmp_9_0 = dept_r28.get("departmentName")) == null ? null : tmp_9_0.invalid) && ((tmp_9_0 = dept_r28.get("departmentName")) == null ? null : tmp_9_0.touched));
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx_r2.categoryOfProducts);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_11_0 = dept_r28.get("categoryOfProducts")) == null ? null : tmp_11_0.value) === "Others");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", (ctx_r2.departmentQuestionnaires[i_r24] == null ? null : ctx_r2.departmentQuestionnaires[i_r24].length) > 0);
  }
}
function CreateSComponent_div_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23)(1, "div", 24)(2, "h4");
    \u0275\u0275text(3, "Add Product Categories");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 19);
    \u0275\u0275text(5, "Add categories and assign them to locations");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 114);
    \u0275\u0275template(7, CreateSComponent_div_38_div_7_Template, 35, 11, "div", 99);
    \u0275\u0275elementStart(8, "button", 100);
    \u0275\u0275listener("click", function CreateSComponent_div_38_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.addDepartment());
    });
    \u0275\u0275element(9, "i", 101);
    \u0275\u0275text(10, " Add Category ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx_r2.departments.controls);
  }
}
function CreateSComponent_div_39_div_7_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 95);
    \u0275\u0275listener("click", function CreateSComponent_div_39_div_7_button_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r33);
      const i_r34 = \u0275\u0275nextContext().index;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.removeUser(i_r34));
    });
    \u0275\u0275element(1, "i", 112);
    \u0275\u0275text(2, " Remove ");
    \u0275\u0275elementEnd();
  }
}
function CreateSComponent_div_39_div_7_option_17_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const idx_r35 = \u0275\u0275nextContext().index;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" - ", ctx_r2.getLocationNameForDepartment(idx_r35), " ");
  }
}
function CreateSComponent_div_39_div_7_option_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 90);
    \u0275\u0275text(1);
    \u0275\u0275template(2, CreateSComponent_div_39_div_7_option_17_ng_container_2_Template, 2, 1, "ng-container", 152);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_8_0;
    const dept_r36 = ctx.$implicit;
    const idx_r35 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275property("value", idx_r35);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ((tmp_8_0 = dept_r36.get("departmentName")) == null ? null : tmp_8_0.value) || "Category " + (idx_r35 + 1), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.getLocationNameForDepartment(idx_r35));
  }
}
function CreateSComponent_div_39_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 102)(1, "div", 103)(2, "h6", 104);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, CreateSComponent_div_39_div_7_button_4_Template, 3, 0, "button", 69);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 105)(6, "div", 41);
    \u0275\u0275text(7, "Category Assignment");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 26)(9, "div", 27)(10, "label", 31);
    \u0275\u0275text(11, "Select Category ");
    \u0275\u0275elementStart(12, "span", 43);
    \u0275\u0275text(13, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "select", 135)(15, "option", 46);
    \u0275\u0275text(16, "Choose a category");
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, CreateSComponent_div_39_div_7_option_17_Template, 3, 3, "option", 47);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div", 41);
    \u0275\u0275text(19, "Personal Information");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 26)(21, "div", 42)(22, "label", 31);
    \u0275\u0275text(23, "First Name ");
    \u0275\u0275elementStart(24, "span", 43);
    \u0275\u0275text(25, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(26, "input", 136);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 42)(28, "label", 31);
    \u0275\u0275text(29, "Last Name ");
    \u0275\u0275elementStart(30, "span", 43);
    \u0275\u0275text(31, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(32, "input", 137);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 42)(34, "label", 31);
    \u0275\u0275text(35, "Gender");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "select", 138)(37, "option", 46);
    \u0275\u0275text(38, "Select");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "option", 139);
    \u0275\u0275text(40, "Male");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "option", 140);
    \u0275\u0275text(42, "Female");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "option", 141);
    \u0275\u0275text(44, "Other");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(45, "div", 42)(46, "label", 31);
    \u0275\u0275text(47, "Date of Birth");
    \u0275\u0275elementEnd();
    \u0275\u0275element(48, "input", 142);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "div", 41);
    \u0275\u0275text(50, "Contact & Employment");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "div", 26)(52, "div", 42)(53, "label", 31);
    \u0275\u0275text(54, "Email ");
    \u0275\u0275elementStart(55, "span", 43);
    \u0275\u0275text(56, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(57, "input", 143);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "div", 42)(59, "label", 31);
    \u0275\u0275text(60, "Phone ");
    \u0275\u0275elementStart(61, "span", 43);
    \u0275\u0275text(62, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(63, "input", 144);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "div", 42)(65, "label", 31);
    \u0275\u0275text(66, "Designation ");
    \u0275\u0275elementStart(67, "span", 43);
    \u0275\u0275text(68, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(69, "input", 145);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "div", 42)(71, "label", 31);
    \u0275\u0275text(72, "Employee ID ");
    \u0275\u0275elementStart(73, "span", 43);
    \u0275\u0275text(74, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(75, "input", 146);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(76, "div", 41);
    \u0275\u0275text(77, "Residential Address (Optional)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(78, "div", 26)(79, "div", 27)(80, "label", 31);
    \u0275\u0275text(81, "Address Line 1");
    \u0275\u0275elementEnd();
    \u0275\u0275element(82, "input", 55);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(83, "div", 27)(84, "label", 31);
    \u0275\u0275text(85, "Address Line 2");
    \u0275\u0275elementEnd();
    \u0275\u0275element(86, "input", 147);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(87, "div", 42)(88, "label", 31);
    \u0275\u0275text(89, "City");
    \u0275\u0275elementEnd();
    \u0275\u0275element(90, "input", 148);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(91, "div", 42)(92, "label", 31);
    \u0275\u0275text(93, "State");
    \u0275\u0275elementEnd();
    \u0275\u0275element(94, "input", 149);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(95, "div", 42)(96, "label", 31);
    \u0275\u0275text(97, "Postal Code");
    \u0275\u0275elementEnd();
    \u0275\u0275element(98, "input", 150);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(99, "div", 41);
    \u0275\u0275text(100, "Security");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(101, "div", 26)(102, "div", 27)(103, "label", 31);
    \u0275\u0275text(104, "Password ");
    \u0275\u0275elementStart(105, "span", 43);
    \u0275\u0275text(106, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(107, "input", 151);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_7_0;
    let tmp_9_0;
    let tmp_10_0;
    let tmp_11_0;
    let tmp_12_0;
    let tmp_13_0;
    let tmp_14_0;
    let tmp_15_0;
    const user_r37 = ctx.$implicit;
    const i_r34 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("formGroupName", i_r34);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Contact ", i_r34 + 1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.users.length > 1);
    \u0275\u0275advance(10);
    \u0275\u0275classProp("is-invalid", ((tmp_7_0 = user_r37.get("departmentIndex")) == null ? null : tmp_7_0.invalid) && ((tmp_7_0 = user_r37.get("departmentIndex")) == null ? null : tmp_7_0.touched));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r2.departments.controls);
    \u0275\u0275advance(9);
    \u0275\u0275classProp("is-invalid", ((tmp_9_0 = user_r37.get("firstName")) == null ? null : tmp_9_0.invalid) && ((tmp_9_0 = user_r37.get("firstName")) == null ? null : tmp_9_0.touched));
    \u0275\u0275advance(6);
    \u0275\u0275classProp("is-invalid", ((tmp_10_0 = user_r37.get("lastName")) == null ? null : tmp_10_0.invalid) && ((tmp_10_0 = user_r37.get("lastName")) == null ? null : tmp_10_0.touched));
    \u0275\u0275advance(25);
    \u0275\u0275classProp("is-invalid", ((tmp_11_0 = user_r37.get("email")) == null ? null : tmp_11_0.invalid) && ((tmp_11_0 = user_r37.get("email")) == null ? null : tmp_11_0.touched));
    \u0275\u0275advance(6);
    \u0275\u0275classProp("is-invalid", ((tmp_12_0 = user_r37.get("phone")) == null ? null : tmp_12_0.invalid) && ((tmp_12_0 = user_r37.get("phone")) == null ? null : tmp_12_0.touched));
    \u0275\u0275advance(6);
    \u0275\u0275classProp("is-invalid", ((tmp_13_0 = user_r37.get("designation")) == null ? null : tmp_13_0.invalid) && ((tmp_13_0 = user_r37.get("designation")) == null ? null : tmp_13_0.touched));
    \u0275\u0275advance(6);
    \u0275\u0275classProp("is-invalid", ((tmp_14_0 = user_r37.get("employeeId")) == null ? null : tmp_14_0.invalid) && ((tmp_14_0 = user_r37.get("employeeId")) == null ? null : tmp_14_0.touched));
    \u0275\u0275advance(32);
    \u0275\u0275classProp("is-invalid", ((tmp_15_0 = user_r37.get("password")) == null ? null : tmp_15_0.invalid) && ((tmp_15_0 = user_r37.get("password")) == null ? null : tmp_15_0.touched));
  }
}
function CreateSComponent_div_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23)(1, "div", 24)(2, "h4");
    \u0275\u0275text(3, "Add Supplier Contacts");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 19);
    \u0275\u0275text(5, "Add contact persons and assign them to categories");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 132);
    \u0275\u0275template(7, CreateSComponent_div_39_div_7_Template, 108, 20, "div", 99);
    \u0275\u0275elementStart(8, "button", 133);
    \u0275\u0275listener("click", function CreateSComponent_div_39_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r32);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.addUser());
    });
    \u0275\u0275element(9, "i", 134);
    \u0275\u0275text(10, " Add Contact ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx_r2.users.controls);
  }
}
function CreateSComponent_button_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 153);
    \u0275\u0275listener("click", function CreateSComponent_button_48_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r38);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.saveStep());
    });
    \u0275\u0275element(1, "i", 154);
    \u0275\u0275text(2, " Save & Next ");
    \u0275\u0275elementEnd();
  }
}
function CreateSComponent_button_49_Template(rf, ctx) {
  if (rf & 1) {
    const _r39 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 155);
    \u0275\u0275listener("click", function CreateSComponent_button_49_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r39);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onSubmit());
    });
    \u0275\u0275element(1, "i", 156);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r2.isSubmitting || ctx_r2.supplierForm.invalid);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.mode === "create" ? "Create Supplier" : "Update Supplier", " ");
  }
}
var _CreateSComponent = class _CreateSComponent {
  constructor(fb, supplierService, messageService, router, route, http, dataService) {
    this.fb = fb;
    this.supplierService = supplierService;
    this.messageService = messageService;
    this.router = router;
    this.route = route;
    this.http = http;
    this.dataService = dataService;
    this.currentStep = 1;
    this.maxStep = 4;
    this.isSubmitting = false;
    this.mode = "create";
    this.supplierId = null;
    this.selectedLogoFile = null;
    this.logoPreview = null;
    this.maxLogoSize = 5 * 1024 * 1024;
    this.allowedLogoTypes = ["image/jpeg", "image/jpg", "image/png", "image/gif", "image/svg+xml"];
    this.gstDocFile = null;
    this.panDocFile = null;
    this.tanDocFile = null;
    this.allowedDocTypes = ["application/pdf", "image/jpeg", "image/jpg", "image/png"];
    this.maxDocSize = 5 * 1024 * 1024;
    this.email = "";
    this.companyName = "";
    this.fullName = "";
    this.allCountries = getAllCountryNames();
    this.hqStates = [];
    this.hqCities = [];
    this.hqCityIsOthers = false;
    this.locationStates = [];
    this.locationCities = [];
    this.locationCityIsOthers = [];
    this.companyTypes = ["Manufacturing", "Trading", "Services", "Distribution", "Retail", "Pharma", "Others"];
    this.locationTypes = ["Head Office", "Branch", "Warehouse", "Service Center", "Others"];
    this.industrySectors = [
      "IT",
      "Logistics",
      "Electrical",
      "Construction",
      "Healthcare",
      "Automotive",
      "Textile",
      "Food & Beverage",
      "Pharmaceutical",
      "Others"
    ];
    this.categoryOfProducts = [
      "IT Equipment",
      "Industrial Equipment",
      "Software Services",
      "Hardware Supplies",
      "Pharmaceutical Products",
      "Others"
    ];
    this.departmentQuestionnaires = [];
    this.departmentAnswers = [];
  }
  ngOnInit() {
    this.initializeForm();
    this.loadUserHeaderInfo();
    this.checkEditMode();
    this.hqStates = getStatesForCountry("India");
  }
  loadUserHeaderInfo() {
    this.email = localStorage.getItem("email") || "admin@gmail.com";
    this.companyName = localStorage.getItem("companyName") || "ITI Pvt Ltd Bangalore";
    this.fullName = localStorage.getItem("fullName") || "Admin";
  }
  initializeForm() {
    this.supplierForm = this.fb.group({
      companyName: ["", [Validators.required, Validators.minLength(2)]],
      companyType: ["", Validators.required],
      otherCompanyType: [""],
      industrySector: ["", Validators.required],
      otherIndustrySector: [""],
      logo: [null],
      contactPersonName: ["", [Validators.required, Validators.minLength(2)]],
      contactPersonDesignation: ["", Validators.required],
      contactPersonEmail: ["", [Validators.required, Validators.email]],
      contactPersonPhone: ["", [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      addressLine1: ["", [Validators.required, Validators.minLength(5)]],
      addressLine2: [""],
      city: ["", Validators.required],
      otherCity: [""],
      // ✅ HQ custom city
      state: ["", Validators.required],
      postalCode: ["", [Validators.required, Validators.pattern(/^[A-Za-z0-9\s\-]{3,10}$/)]],
      country: ["India", Validators.required],
      gstNumber: ["", Validators.required],
      panNumber: ["", Validators.required],
      tanNumber: [""],
      website: [""],
      bankAccountHolderName: ["", Validators.required],
      bankAccountNumber: ["", Validators.required],
      bankName: ["", Validators.required],
      bankBranchName: [""],
      bankIfscCode: ["", Validators.required],
      locations: this.fb.array([], Validators.minLength(1)),
      departments: this.fb.array([]),
      users: this.fb.array([])
    });
    if (!this.supplierForm.get("locations")?.value?.length) {
      this.addLocation();
    }
  }
  // ======================================================================
  // HQ: COUNTRY → STATE → CITY (+ Others) → POSTAL
  // ======================================================================
  onHQCountryChange(event) {
    const country = event.target.value;
    this.hqStates = getStatesForCountry(country);
    this.hqCities = [];
    this.hqCityIsOthers = false;
    this.supplierForm.get("otherCity")?.clearValidators();
    this.supplierForm.get("otherCity")?.setValue("");
    this.supplierForm.get("otherCity")?.updateValueAndValidity();
    this.supplierForm.patchValue({ state: "", city: "", postalCode: "" });
  }
  onHQStateChange(event) {
    const country = this.supplierForm.get("country")?.value;
    const state = event.target.value;
    this.hqCities = getCityNamesForState(country, state);
    this.hqCityIsOthers = false;
    this.supplierForm.get("otherCity")?.clearValidators();
    this.supplierForm.get("otherCity")?.setValue("");
    this.supplierForm.get("otherCity")?.updateValueAndValidity();
    this.supplierForm.patchValue({ city: "", postalCode: "" });
  }
  onHQCityChange(event) {
    const selected = event.target.value;
    if (selected === "__others__") {
      this.hqCityIsOthers = true;
      this.supplierForm.patchValue({ city: "__others__", otherCity: "", postalCode: "" });
      this.supplierForm.get("otherCity")?.setValidators([Validators.required, Validators.minLength(2)]);
      this.supplierForm.get("otherCity")?.updateValueAndValidity();
    } else {
      this.hqCityIsOthers = false;
      this.supplierForm.get("otherCity")?.clearValidators();
      this.supplierForm.get("otherCity")?.setValue("");
      this.supplierForm.get("otherCity")?.updateValueAndValidity();
      const country = this.supplierForm.get("country")?.value;
      const state = this.supplierForm.get("state")?.value;
      const postal = getPostalCodeForCity(country, state, selected);
      this.supplierForm.patchValue({ city: selected, postalCode: postal || "" });
    }
  }
  // ======================================================================
  // LOCATION: COUNTRY → STATE → CITY (+ Others) → POSTAL
  // ======================================================================
  onLocationCountryChange(event, idx) {
    const country = event.target.value;
    this.locationStates[idx] = getStatesForCountry(country);
    this.locationCities[idx] = [];
    this.locationCityIsOthers[idx] = false;
    const loc = this.locations.at(idx);
    loc.get("otherCity")?.clearValidators();
    loc.get("otherCity")?.setValue("");
    loc.get("otherCity")?.updateValueAndValidity();
    loc.patchValue({ state: "", city: "", postalCode: "" });
  }
  onLocationStateChange(event, idx) {
    const country = this.locations.at(idx).get("country")?.value;
    const state = event.target.value;
    this.locationCities[idx] = getCityNamesForState(country, state);
    this.locationCityIsOthers[idx] = false;
    const loc = this.locations.at(idx);
    loc.get("otherCity")?.clearValidators();
    loc.get("otherCity")?.setValue("");
    loc.get("otherCity")?.updateValueAndValidity();
    loc.patchValue({ city: "", postalCode: "" });
  }
  onLocationCityChange(event, idx) {
    const selected = event.target.value;
    const loc = this.locations.at(idx);
    if (selected === "__others__") {
      this.locationCityIsOthers[idx] = true;
      loc.patchValue({ city: "__others__", otherCity: "", postalCode: "" });
      loc.get("otherCity")?.setValidators([Validators.required, Validators.minLength(2)]);
      loc.get("otherCity")?.updateValueAndValidity();
    } else {
      this.locationCityIsOthers[idx] = false;
      loc.get("otherCity")?.clearValidators();
      loc.get("otherCity")?.setValue("");
      loc.get("otherCity")?.updateValueAndValidity();
      const country = loc.get("country")?.value;
      const state = loc.get("state")?.value;
      const postal = getPostalCodeForCity(country, state, selected);
      loc.patchValue({ city: selected, postalCode: postal || "" });
    }
  }
  getStatesForLocation(idx) {
    return this.locationStates[idx] || [];
  }
  getCitiesForLocation(idx) {
    return this.locationCities[idx] || [];
  }
  isLocationCityOthers(idx) {
    return this.locationCityIsOthers[idx] || false;
  }
  // ======================================================================
  // LOGO
  // ======================================================================
  onLogoSelected(event) {
    const file = event.target.files[0];
    if (!file)
      return;
    if (!this.allowedLogoTypes.includes(file.type)) {
      this.messageService.showMessage("error", "Invalid File Type", "Please select a valid image file (JPG, PNG, GIF, SVG)");
      event.target.value = "";
      return;
    }
    if (file.size > this.maxLogoSize) {
      this.messageService.showMessage("error", "File Too Large", "Logo must be smaller than 5MB");
      event.target.value = "";
      return;
    }
    this.selectedLogoFile = file;
    const reader = new FileReader();
    reader.onload = (e) => {
      this.logoPreview = e.target.result;
    };
    reader.readAsDataURL(file);
  }
  removeLogo() {
    this.selectedLogoFile = null;
    this.logoPreview = null;
    this.supplierForm.patchValue({ logo: null });
    const fileInput = document.querySelector('input[type="file"]');
    if (fileInput)
      fileInput.value = "";
  }
  // ======================================================================
  // DOCUMENT UPLOAD (GST / PAN / TAN certificates) — same pattern/endpoint
  // as the public self-registration flow (supplier-register.component.ts)
  // ======================================================================
  onDocSelected(event, type) {
    const file = event.target.files[0];
    if (!file)
      return;
    if (!this.allowedDocTypes.includes(file.type)) {
      this.messageService.showMessage("error", "Invalid File Type", "Please select a PDF, JPG, or PNG file.");
      event.target.value = "";
      return;
    }
    if (file.size > this.maxDocSize) {
      this.messageService.showMessage("error", "File Too Large", "Document must be smaller than 5 MB.");
      event.target.value = "";
      return;
    }
    if (type === "gst")
      this.gstDocFile = file;
    if (type === "pan")
      this.panDocFile = file;
    if (type === "tan")
      this.tanDocFile = file;
  }
  removeDoc(type) {
    if (type === "gst") {
      this.gstDocFile = null;
      document.getElementById("gstDocInput").value = "";
    }
    if (type === "pan") {
      this.panDocFile = null;
      document.getElementById("panDocInput").value = "";
    }
    if (type === "tan") {
      this.tanDocFile = null;
      document.getElementById("tanDocInput").value = "";
    }
  }
  /**
   * Upload a single document to the backend.
   * Endpoint: POST /api/supplier/documents/upload
   * Multipart: file + documentType (gst|pan|tan) + supplierId
   */
  uploadDocument(file, type, supplierId) {
    return __async(this, null, function* () {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("documentType", type);
      formData.append("supplierId", supplierId.toString());
      const url = `${environment.API_URL}leadcapture/api/supplier/documents/upload`;
      yield this.http.post(url, formData).toPromise();
    });
  }
  /** Uploads whichever GST/PAN/TAN files were selected, for the given supplier. Failures are
   * logged but don't block the create/update success message - the supplier record itself
   * already saved successfully by the time this runs. */
  uploadSelectedDocuments(supplierId) {
    return __async(this, null, function* () {
      if (!supplierId)
        return;
      const uploads = [];
      if (this.gstDocFile)
        uploads.push(this.uploadDocument(this.gstDocFile, "gst", supplierId));
      if (this.panDocFile)
        uploads.push(this.uploadDocument(this.panDocFile, "pan", supplierId));
      if (this.tanDocFile)
        uploads.push(this.uploadDocument(this.tanDocFile, "tan", supplierId));
      if (uploads.length === 0)
        return;
      try {
        yield Promise.all(uploads);
      } catch (docErr) {
        console.warn("Document upload partial failure \u2014 supplier record itself was saved.", docErr);
      }
    });
  }
  checkEditMode() {
    this.route.paramMap.subscribe((params) => {
      const id = params.get("id");
      if (id) {
        this.mode = "edit";
        this.supplierId = +id;
        this.currentStep = 1;
        this.loadSupplierData(this.supplierId);
      } else {
        this.mode = "create";
        this.currentStep = 1;
      }
    });
  }
  get locations() {
    return this.supplierForm.get("locations");
  }
  get departments() {
    return this.supplierForm.get("departments");
  }
  get users() {
    return this.supplierForm.get("users");
  }
  // ======================================================================
  // FORM ARRAYS
  // ======================================================================
  addLocation() {
    const locationGroup = this.fb.group({
      id: [null],
      locationName: ["", [Validators.required, Validators.minLength(2)]],
      locationType: ["", Validators.required],
      otherLocationType: [""],
      locationContactName: ["", [Validators.required, Validators.minLength(2)]],
      locationContactEmail: ["", [Validators.required, Validators.email]],
      locationContactPhone: ["", [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      addressLine1: ["", [Validators.required, Validators.minLength(5)]],
      addressLine2: [""],
      city: ["", Validators.required],
      otherCity: [""],
      // ✅ custom city per location
      state: ["", Validators.required],
      postalCode: ["", [Validators.required, Validators.pattern(/^[A-Za-z0-9\s\-]{3,10}$/)]],
      country: ["India", Validators.required],
      landlineNumber: [""],
      faxNumber: [""]
    });
    const newIndex = this.locations.length;
    this.locations.push(locationGroup);
    this.locationStates[newIndex] = getStatesForCountry("India");
    this.locationCities[newIndex] = [];
    this.locationCityIsOthers[newIndex] = false;
  }
  removeLocation(index) {
    if (this.locations.length > 1) {
      this.locations.removeAt(index);
      this.locationStates.splice(index, 1);
      this.locationCities.splice(index, 1);
      this.locationCityIsOthers.splice(index, 1);
    } else {
      this.messageService.showMessage("warning", "Warning", "At least one location is required");
    }
  }
  addDepartment() {
    const departmentGroup = this.fb.group({
      id: [null],
      locationIndex: ["", Validators.required],
      departmentName: ["", [Validators.required, Validators.minLength(2)]],
      departmentDescription: [""],
      categoryOfProducts: [""],
      otherCategoryType: [""]
    });
    this.departments.push(departmentGroup);
    this.departmentQuestionnaires.push([]);
    this.departmentAnswers.push({});
  }
  removeDepartment(deptIndex) {
    if (this.departments.length > 1) {
      this.departments.removeAt(deptIndex);
      this.departmentQuestionnaires.splice(deptIndex, 1);
      this.departmentAnswers.splice(deptIndex, 1);
    } else {
      this.messageService.showMessage("warning", "Warning", "At least one category is required");
    }
  }
  fetchQuestionnaireForDepartment(deptIndex, category) {
    if (!category || category === "Others") {
      this.departmentQuestionnaires[deptIndex] = [];
      this.departmentAnswers[deptIndex] = {};
      return;
    }
    this.dataService.getRegistrationQuestionnaireCriteriaForCategory(category).subscribe({
      next: (response) => {
        const questions = response && response.success && response.data ? response.data : [];
        this.departmentQuestionnaires[deptIndex] = questions;
        const existing = this.departmentAnswers[deptIndex] || {};
        const answers = {};
        for (const q of questions) {
          answers[q.id] = existing[q.id] ?? { isCompliant: true, remarks: "" };
        }
        this.departmentAnswers[deptIndex] = answers;
      },
      error: () => {
        this.departmentQuestionnaires[deptIndex] = [];
      }
    });
  }
  setQuestionnaireAnswer(deptIndex, criteriaId, value) {
    if (!this.departmentAnswers[deptIndex])
      this.departmentAnswers[deptIndex] = {};
    const current = this.departmentAnswers[deptIndex][criteriaId] || { isCompliant: true, remarks: "" };
    this.departmentAnswers[deptIndex][criteriaId] = __spreadProps(__spreadValues({}, current), { isCompliant: value });
  }
  setQuestionnaireRemarks(deptIndex, criteriaId, remarks) {
    if (!this.departmentAnswers[deptIndex])
      this.departmentAnswers[deptIndex] = {};
    const current = this.departmentAnswers[deptIndex][criteriaId] || { isCompliant: true, remarks: "" };
    this.departmentAnswers[deptIndex][criteriaId] = __spreadProps(__spreadValues({}, current), { remarks });
  }
  getQuestionnaireAnswer(deptIndex, criteriaId) {
    return this.departmentAnswers[deptIndex]?.[criteriaId]?.isCompliant ?? true;
  }
  getQuestionnaireRemarks(deptIndex, criteriaId) {
    return this.departmentAnswers[deptIndex]?.[criteriaId]?.remarks ?? "";
  }
  addUser(userData) {
    const userGroup = this.fb.group({
      id: [userData?.id || null],
      departmentIndex: [userData ? userData.departmentIndex : "", Validators.required],
      firstName: [userData?.firstName || "", [Validators.required, Validators.minLength(2)]],
      lastName: [userData?.lastName || "", [Validators.required, Validators.minLength(2)]],
      email: [userData?.email || "", [Validators.required, Validators.email]],
      phone: [userData?.phone || "", [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      designation: [userData?.designation || "", Validators.required],
      employeeId: [userData?.employeeId || "", Validators.required],
      gender: [userData?.gender || ""],
      dateOfBirth: [userData?.dateOfBirth || ""],
      addressLine1: [userData?.addressLine1 || ""],
      addressLine2: [userData?.addressLine2 || ""],
      city: [userData?.city || ""],
      state: [userData?.state || ""],
      postalCode: [userData?.postalCode || ""],
      password: [userData?.password || "", [Validators.required, Validators.minLength(6)]]
    });
    this.users.push(userGroup);
  }
  removeUser(userIndex) {
    if (this.users.length > 1) {
      this.users.removeAt(userIndex);
    } else {
      this.messageService.showMessage("warning", "Warning", "At least one contact is required");
    }
  }
  getLocationNameForDepartment(deptIndex) {
    const dept = this.departments.at(deptIndex);
    const locIndex = dept?.get("locationIndex")?.value;
    if (locIndex !== "" && locIndex !== null && locIndex !== void 0) {
      const location = this.locations.at(locIndex);
      return location?.get("locationName")?.value || `Location ${locIndex + 1}`;
    }
    return "";
  }
  // ======================================================================
  // OTHERS HANDLING
  // ======================================================================
  onCompanyTypeChange(event) {
    const ctrl = this.supplierForm.get("otherCompanyType");
    if (event.target.value === "Others") {
      ctrl?.setValidators([Validators.required, Validators.minLength(2)]);
      ctrl?.setValue("");
    } else {
      ctrl?.clearValidators();
      ctrl?.setValue(null);
    }
    ctrl?.updateValueAndValidity();
  }
  onIndustrySectorChange(event) {
    const ctrl = this.supplierForm.get("otherIndustrySector");
    if (event.target.value === "Others") {
      ctrl?.setValidators([Validators.required, Validators.minLength(2)]);
      ctrl?.setValue("");
    } else {
      ctrl?.clearValidators();
      ctrl?.setValue(null);
    }
    ctrl?.updateValueAndValidity();
  }
  onLocationTypeChange(event, locationIndex) {
    const locationGroup = this.locations.at(locationIndex);
    const ctrl = locationGroup.get("otherLocationType");
    if (event.target.value === "Others") {
      ctrl?.setValidators([Validators.required, Validators.minLength(2)]);
      ctrl?.setValue("");
    } else {
      ctrl?.clearValidators();
      ctrl?.setValue(null);
    }
    ctrl?.updateValueAndValidity();
  }
  onCategoryTypeChange(event, deptIndex) {
    const departmentGroup = this.departments.at(deptIndex);
    const ctrl = departmentGroup.get("otherCategoryType");
    if (event.target.value === "Others") {
      ctrl?.setValidators([Validators.required, Validators.minLength(2)]);
      ctrl?.setValue("");
    } else {
      ctrl?.clearValidators();
      ctrl?.setValue(null);
    }
    ctrl?.updateValueAndValidity();
    this.fetchQuestionnaireForDepartment(deptIndex, event.target.value);
  }
  // ======================================================================
  // EDIT MODE — LOAD SUPPLIER DATA
  // ======================================================================
  loadSupplierData(id) {
    this.supplierService.getSupplierById(id).subscribe({
      next: (supplier) => {
        let companyTypeForForm = supplier.companyType;
        let otherCompanyType = null;
        let industrySectorForForm = supplier.industrySector;
        let otherIndustrySector = null;
        if (supplier.companyType && !this.companyTypes.includes(supplier.companyType)) {
          companyTypeForForm = "Others";
          otherCompanyType = supplier.companyType;
        }
        if (supplier.industrySector && !this.industrySectors.includes(supplier.industrySector)) {
          industrySectorForForm = "Others";
          otherIndustrySector = supplier.industrySector;
        }
        this.supplierForm.patchValue({
          companyName: supplier.companyName,
          companyType: companyTypeForForm,
          otherCompanyType,
          industrySector: industrySectorForForm,
          otherIndustrySector,
          contactPersonName: supplier.contactPersonName,
          contactPersonDesignation: supplier.contactPersonDesignation,
          contactPersonEmail: supplier.contactPersonEmail,
          contactPersonPhone: supplier.contactPersonPhone,
          addressLine1: supplier.addressLine1,
          addressLine2: supplier.addressLine2,
          state: supplier.state,
          postalCode: supplier.postalCode,
          country: supplier.country,
          gstNumber: supplier.gstNumber,
          panNumber: supplier.panNumber,
          tanNumber: supplier.tanNumber,
          website: supplier.website,
          bankAccountHolderName: supplier.bankAccountHolderName,
          bankAccountNumber: supplier.bankAccountNumber,
          bankName: supplier.bankName,
          bankBranchName: supplier.bankBranchName,
          bankIfscCode: supplier.bankIfscCode
        });
        if (supplier.country)
          this.hqStates = getStatesForCountry(supplier.country);
        if (supplier.country && supplier.state) {
          this.hqCities = getCityNamesForState(supplier.country, supplier.state);
        }
        const knownCities = this.hqCities;
        if (supplier.city && knownCities.length > 0 && !knownCities.includes(supplier.city)) {
          this.hqCityIsOthers = true;
          this.supplierForm.patchValue({ city: "__others__", otherCity: supplier.city });
          this.supplierForm.get("otherCity")?.setValidators([Validators.required, Validators.minLength(2)]);
          this.supplierForm.get("otherCity")?.updateValueAndValidity();
        } else {
          this.hqCityIsOthers = false;
          this.supplierForm.patchValue({ city: supplier.city });
        }
        this.onCompanyTypeChange({ target: { value: companyTypeForForm } });
        this.onIndustrySectorChange({ target: { value: industrySectorForForm } });
        if (supplier.id) {
          this.supplierService.getSupplierLogoBase64(supplier.id).subscribe({
            next: (logoData) => {
              if (logoData)
                this.logoPreview = logoData;
            },
            error: () => {
            }
          });
        }
        while (this.locations.length)
          this.locations.removeAt(0);
        while (this.departments.length)
          this.departments.removeAt(0);
        while (this.users.length)
          this.users.removeAt(0);
        this.locationStates = [];
        this.locationCities = [];
        this.locationCityIsOthers = [];
        if (supplier.locations && Array.isArray(supplier.locations)) {
          this.populateLocations(supplier.locations);
        }
      },
      error: () => {
        this.messageService.showMessage("error", "Error", "Failed to load supplier data");
        setTimeout(() => this.router.navigate(["/dashboard"]), 2e3);
      }
    });
  }
  populateLocations(locations) {
    locations.forEach((loc, locIndex) => {
      this.addLocation();
      let locationTypeForForm = loc.locationType;
      let otherLocationType = null;
      if (loc.locationType && !this.locationTypes.includes(loc.locationType)) {
        locationTypeForForm = "Others";
        otherLocationType = loc.locationType;
      }
      if (loc.country)
        this.locationStates[locIndex] = getStatesForCountry(loc.country);
      if (loc.country && loc.state) {
        this.locationCities[locIndex] = getCityNamesForState(loc.country, loc.state);
      }
      const knownCities = this.locationCities[locIndex] || [];
      let cityValue = loc.city;
      let otherCityValue = "";
      if (loc.city && knownCities.length > 0 && !knownCities.includes(loc.city)) {
        this.locationCityIsOthers[locIndex] = true;
        cityValue = "__others__";
        otherCityValue = loc.city;
      } else {
        this.locationCityIsOthers[locIndex] = false;
      }
      this.locations.at(locIndex).patchValue({
        id: loc.id,
        locationName: loc.locationName,
        locationType: locationTypeForForm,
        otherLocationType,
        locationContactName: loc.locationContactName,
        locationContactEmail: loc.locationContactEmail,
        locationContactPhone: loc.locationContactPhone,
        addressLine1: loc.addressLine1,
        addressLine2: loc.addressLine2,
        city: cityValue,
        otherCity: otherCityValue,
        state: loc.state,
        postalCode: loc.postalCode,
        country: loc.country,
        landlineNumber: loc.landlineNumber,
        faxNumber: loc.faxNumber
      });
      if (this.locationCityIsOthers[locIndex]) {
        this.locations.at(locIndex).get("otherCity")?.setValidators([Validators.required, Validators.minLength(2)]);
        this.locations.at(locIndex).get("otherCity")?.updateValueAndValidity();
      }
      this.onLocationTypeChange({ target: { value: locationTypeForForm } }, locIndex);
      if (loc.departments && loc.departments.length > 0) {
        loc.departments.forEach((dept) => {
          const deptIndex = this.departments.length;
          this.addDepartment();
          let categoryForForm = dept.categoryOfProducts;
          let otherCategoryType = null;
          if (dept.categoryOfProducts && !this.categoryOfProducts.includes(dept.categoryOfProducts)) {
            categoryForForm = "Others";
            otherCategoryType = dept.categoryOfProducts;
          }
          this.departments.at(deptIndex).patchValue({
            id: dept.id,
            locationIndex: locIndex,
            departmentName: dept.departmentName,
            departmentDescription: dept.departmentDescription,
            categoryOfProducts: categoryForForm,
            otherCategoryType
          });
          if (dept.questionnaireResponses) {
            try {
              const savedAnswers = JSON.parse(dept.questionnaireResponses);
              const answerMap = {};
              for (const a of savedAnswers) {
                answerMap[a.criteriaId] = { isCompliant: a.isCompliant, remarks: a.remarks || "" };
              }
              this.departmentAnswers[deptIndex] = answerMap;
            } catch {
            }
          }
          this.onCategoryTypeChange({ target: { value: categoryForForm } }, deptIndex);
          if (dept.users && dept.users.length > 0) {
            dept.users.forEach((user) => {
              this.addUser({
                id: user.id,
                departmentIndex: deptIndex,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                phone: user.phone,
                designation: user.designation,
                employeeId: user.employeeId,
                gender: user.gender,
                dateOfBirth: user.dateOfBirth,
                addressLine1: user.addressLine1,
                addressLine2: user.addressLine2,
                city: user.city,
                state: user.state,
                postalCode: user.postalCode,
                password: ""
              });
            });
          }
        });
      }
    });
  }
  // ======================================================================
  // STEP VALIDATION
  // ======================================================================
  isCurrentStepValid() {
    switch (this.currentStep) {
      case 1:
        return this.isSupplierDetailsValid();
      case 2:
        return this.locationsBasicsValid();
      case 3:
        return this.departmentsValid();
      case 4:
        return this.usersValid();
      default:
        return false;
    }
  }
  isSupplierDetailsValid() {
    const fields = [
      "companyName",
      "companyType",
      "industrySector",
      "contactPersonName",
      "contactPersonDesignation",
      "contactPersonEmail",
      "contactPersonPhone",
      "addressLine1",
      "city",
      "state",
      "postalCode",
      "country",
      "gstNumber",
      "panNumber",
      "bankAccountHolderName",
      "bankAccountNumber",
      "bankName",
      "bankIfscCode"
    ];
    const standardValid = fields.every((f) => this.supplierForm.get(f)?.valid);
    const companyOtherValid = this.supplierForm.get("companyType")?.value === "Others" ? this.supplierForm.get("otherCompanyType")?.valid ?? false : true;
    const industryOtherValid = this.supplierForm.get("industrySector")?.value === "Others" ? this.supplierForm.get("otherIndustrySector")?.valid ?? false : true;
    const otherCityValid = this.hqCityIsOthers ? this.supplierForm.get("otherCity")?.valid ?? false : true;
    const gstDocValid = this.mode === "edit" || !!this.gstDocFile;
    const panDocValid = this.mode === "edit" || !!this.panDocFile;
    return standardValid && companyOtherValid && industryOtherValid && otherCityValid && gstDocValid && panDocValid;
  }
  locationsBasicsValid() {
    return this.locations.length > 0 && this.locations.controls.every((loc, idx) => {
      const fields = [
        "locationName",
        "locationType",
        "locationContactName",
        "locationContactEmail",
        "locationContactPhone",
        "addressLine1",
        "city",
        "state",
        "postalCode",
        "country"
      ];
      const standardValid = fields.every((f) => loc.get(f)?.valid);
      const otherTypeValid = loc.get("locationType")?.value === "Others" ? loc.get("otherLocationType")?.valid ?? false : true;
      const otherCityValid = this.locationCityIsOthers[idx] ? loc.get("otherCity")?.valid ?? false : true;
      return standardValid && otherTypeValid && otherCityValid;
    });
  }
  departmentsValid() {
    return this.departments.length > 0 && this.departments.controls.every((dept) => {
      const catOtherValid = dept.get("categoryOfProducts")?.value === "Others" ? dept.get("otherCategoryType")?.valid ?? false : true;
      return dept.get("departmentName")?.valid && dept.get("locationIndex")?.valid && catOtherValid;
    });
  }
  usersValid() {
    return this.users.length > 0 && this.users.controls.every((user) => user.get("firstName")?.valid && user.get("lastName")?.valid && user.get("email")?.valid && user.get("phone")?.valid && user.get("designation")?.valid && user.get("employeeId")?.valid && user.get("departmentIndex")?.valid && user.get("password")?.valid);
  }
  saveStep() {
    if (!this.isCurrentStepValid()) {
      this.messageService.showMessage("warning", "Validation Error", "Please fill all required fields on this step");
      this.supplierForm.markAllAsTouched();
      return;
    }
    this.messageService.showMessage("success", "Saved", `Step ${this.currentStep} saved successfully`);
    if (this.currentStep < this.maxStep)
      this.currentStep++;
  }
  prevStep() {
    if (this.currentStep > 1)
      this.currentStep--;
  }
  nextStep() {
    if (this.currentStep < this.maxStep)
      this.currentStep++;
  }
  // ======================================================================
  // SUBMIT — resolve all Others values
  // ======================================================================
  onSubmit() {
    return __async(this, null, function* () {
      if (this.supplierForm.invalid) {
        this.supplierForm.markAllAsTouched();
        this.messageService.showMessage("error", "Validation Error", "Please fill all required fields");
        return;
      }
      this.isSubmitting = true;
      const formValue = this.supplierForm.getRawValue();
      if (formValue.city === "__others__" && formValue.otherCity)
        formValue.city = formValue.otherCity;
      delete formValue.otherCity;
      if (formValue.companyType === "Others" && formValue.otherCompanyType)
        formValue.companyType = formValue.otherCompanyType;
      delete formValue.otherCompanyType;
      if (formValue.industrySector === "Others" && formValue.otherIndustrySector)
        formValue.industrySector = formValue.otherIndustrySector;
      delete formValue.otherIndustrySector;
      const processedLocations = [];
      if (formValue.locations && Array.isArray(formValue.locations)) {
        formValue.locations.forEach((loc) => {
          if (loc.city === "__others__" && loc.otherCity)
            loc.city = loc.otherCity;
          delete loc.otherCity;
          if (loc.locationType === "Others" && loc.otherLocationType)
            loc.locationType = loc.otherLocationType;
          delete loc.otherLocationType;
          loc.departments = [];
          processedLocations.push(loc);
        });
      }
      if (formValue.departments && Array.isArray(formValue.departments)) {
        formValue.departments.forEach((dept, deptIdx) => {
          const locationIdx = parseInt(dept.locationIndex, 10);
          if (isNaN(locationIdx) || !processedLocations[locationIdx])
            return;
          const _a = dept, { locationIndex: _ } = _a, deptData = __objRest(_a, ["locationIndex"]);
          if (deptData.categoryOfProducts === "Others" && deptData.otherCategoryType) {
            deptData.categoryOfProducts = deptData.otherCategoryType;
          }
          delete deptData.otherCategoryType;
          deptData.users = [];
          const questions = this.departmentQuestionnaires[deptIdx] || [];
          if (questions.length > 0) {
            const answers = this.departmentAnswers[deptIdx] || {};
            deptData.questionnaireResponses = JSON.stringify(questions.map((q) => ({
              criteriaId: q.id,
              questionText: q.questionText,
              isCompliant: answers[q.id]?.isCompliant ?? true,
              remarks: answers[q.id]?.remarks || ""
            })));
          }
          processedLocations[locationIdx].departments.push(deptData);
        });
      }
      if (formValue.users && Array.isArray(formValue.users)) {
        formValue.users.forEach((user) => {
          const deptIdx = parseInt(user.departmentIndex, 10);
          const department = formValue.departments?.[deptIdx];
          if (!department)
            return;
          const locationIdx = parseInt(department.locationIndex, 10);
          if (!processedLocations[locationIdx])
            return;
          const targetDept = processedLocations[locationIdx].departments.find((d) => d.departmentName === department.departmentName);
          if (targetDept) {
            const _a = user, { departmentIndex: _ } = _a, userData = __objRest(_a, ["departmentIndex"]);
            if (this.mode === "edit" && (!userData.password || !userData.password.trim())) {
              delete userData.password;
            }
            targetDept.users.push(userData);
          }
        });
      }
      const payload = __spreadProps(__spreadValues({}, formValue), { locations: processedLocations });
      delete payload.departments;
      delete payload.users;
      delete payload.logo;
      payload.createdByCompanyName = localStorage.getItem("companyName") || "";
      payload.createdByUserId = Number(localStorage.getItem("userId")) || null;
      if (this.selectedLogoFile) {
        try {
          const logoBase64 = yield this.supplierService.convertFileToBase64(this.selectedLogoFile);
          payload.logoBase64 = logoBase64;
          payload.logoFilename = this.selectedLogoFile.name;
          payload.logoContentType = this.selectedLogoFile.type;
        } catch (error) {
          this.messageService.showMessage("error", "Error", "Failed to process logo");
          this.isSubmitting = false;
          return;
        }
      }
      if (this.mode === "create") {
        this.supplierService.createCompleteHierarchy(payload).subscribe({
          next: (res) => __async(this, null, function* () {
            const newSupplierId = res?.data?.id;
            if (newSupplierId) {
              yield this.uploadSelectedDocuments(newSupplierId);
            }
            this.messageService.showMessage("success", "Success", "Supplier created successfully");
            this.isSubmitting = false;
            setTimeout(() => this.router.navigate(["/dashboard"]), 1500);
          }),
          error: (err) => {
            this.messageService.showMessage("error", "Error", err.error?.message || err.message || "Failed to create supplier");
            this.isSubmitting = false;
          }
        });
      } else if (this.supplierId) {
        this.supplierService.updateCompleteHierarchy(this.supplierId, payload).subscribe({
          next: () => __async(this, null, function* () {
            yield this.uploadSelectedDocuments(this.supplierId);
            this.messageService.showMessage("success", "Success", "Supplier updated successfully");
            this.isSubmitting = false;
            setTimeout(() => this.router.navigate(["/dashboard"]), 1500);
          }),
          error: (err) => {
            this.messageService.showMessage("error", "Error", err.error?.message || err.message || "Failed to update supplier");
            this.isSubmitting = false;
          }
        });
      }
    });
  }
};
_CreateSComponent.\u0275fac = function CreateSComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CreateSComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(SupplierService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(DataService));
};
_CreateSComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CreateSComponent, selectors: [["app-create-s"]], decls: 50, vars: 29, consts: [["logoInput", ""], [1, "wizard-container", "p-4"], [1, "form-header", "mb-4"], [1, "form-header-title"], [1, "form-header-icon"], [1, "cil-sitemap"], [1, "form-header-subtitle"], [1, "cil-building"], [1, "cil-envelope-closed"], [1, "step-indicator", "mb-5"], [1, "step-item"], [1, "step-number"], [1, "step-label"], [3, "formGroup"], ["class", "step-content fade-in", 4, "ngIf"], [1, "step-navigation", "mt-5", "pt-4", "border-top"], [1, "d-flex", "gap-3", "justify-content-between", "align-items-center"], ["type", "button", 1, "btn", "btn-outline-secondary", "btn-lg", 3, "click", "disabled"], [1, "bi", "bi-chevron-left"], [1, "text-muted"], [1, "d-flex", "gap-2"], ["type", "button", "class", "btn btn-success btn-lg", 3, "click", 4, "ngIf"], ["type", "button", "class", "btn btn-success btn-lg px-5", 3, "disabled", "click", 4, "ngIf"], [1, "step-content", "fade-in"], [1, "step-title", "mb-4"], [1, "section-header", "mb-3", "mt-4"], [1, "row"], [1, "col-12", "mb-3"], [1, "logo-upload-container"], ["class", "logo-preview-section", 4, "ngIf"], [1, "logo-upload-section"], [1, "form-label"], [1, "text-muted", "small"], [1, "custom-file-upload"], ["type", "file", "id", "logoFileInput", "accept", "image/jpeg,image/jpg,image/png,image/gif,image/svg+xml", 1, "file-input", 3, "change"], ["for", "logoFileInput", 1, "file-upload-label"], [1, "upload-icon"], [1, "bi", "bi-cloud-upload"], [1, "upload-text"], [1, "upload-hint"], ["class", "selected-file-info", 4, "ngIf"], [1, "section-header", "mb-3"], [1, "col-md-6", "mb-3"], [1, "text-danger"], ["type", "text", "formControlName", "companyName", "placeholder", "Enter company name", 1, "form-control"], ["formControlName", "companyType", 1, "form-control", 3, "change"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["class", "col-md-6 mb-3", 4, "ngIf"], ["formControlName", "industrySector", 1, "form-control", 3, "change"], ["type", "url", "formControlName", "website", "placeholder", "https://example.com", 1, "form-control"], ["type", "text", "formControlName", "contactPersonName", "placeholder", "Full name", 1, "form-control"], ["type", "text", "formControlName", "contactPersonDesignation", "placeholder", "e.g., Supply Manager", 1, "form-control"], ["type", "email", "formControlName", "contactPersonEmail", "placeholder", "contact@company.com", 1, "form-control"], ["type", "tel", "formControlName", "contactPersonPhone", "placeholder", "10 digit number", "maxlength", "10", 1, "form-control"], ["type", "text", "formControlName", "addressLine1", "placeholder", "Street address", 1, "form-control"], ["type", "text", "formControlName", "addressLine2", "placeholder", "Building name, Floor, etc.", 1, "form-control"], ["formControlName", "country", 1, "form-control", 3, "change"], ["formControlName", "state", 1, "form-control", 3, "change"], ["formControlName", "city", 1, "form-control", 3, "change"], ["value", "__others__", 4, "ngIf"], [1, "text-muted", "ms-1"], ["type", "text", "formControlName", "postalCode", "placeholder", "Postal / ZIP code", "maxlength", "10", 1, "form-control"], [1, "col-md-4", "mb-3"], ["type", "text", "formControlName", "gstNumber", "placeholder", "15 digit GST", 1, "form-control"], [1, "col-md-8", "mb-3"], [1, "text-muted", "fw-normal"], [1, "d-flex", "align-items-center", "gap-2"], ["type", "file", "id", "gstDocInput", "accept", ".pdf,image/jpeg,image/jpg,image/png", 1, "form-control", 3, "change"], ["type", "button", "class", "btn btn-sm btn-outline-danger", 3, "click", 4, "ngIf"], ["class", "text-success", 4, "ngIf"], ["class", "text-muted d-block", 4, "ngIf"], ["type", "text", "formControlName", "panNumber", "placeholder", "10 digit PAN", 1, "form-control"], ["type", "file", "id", "panDocInput", "accept", ".pdf,image/jpeg,image/jpg,image/png", 1, "form-control", 3, "change"], ["type", "text", "formControlName", "tanNumber", "placeholder", "Tax Account Number", 1, "form-control"], ["type", "file", "id", "tanDocInput", "accept", ".pdf,image/jpeg,image/jpg,image/png", 1, "form-control", 3, "change"], ["type", "text", "formControlName", "bankAccountHolderName", "placeholder", "As per bank records", 1, "form-control"], ["type", "text", "formControlName", "bankAccountNumber", "placeholder", "Account number", 1, "form-control"], ["type", "text", "formControlName", "bankName", "placeholder", "e.g., State Bank of India", 1, "form-control"], ["type", "text", "formControlName", "bankBranchName", "placeholder", "Branch name", 1, "form-control"], ["type", "text", "formControlName", "bankIfscCode", "placeholder", "11-character IFSC", 1, "form-control", 2, "text-transform", "uppercase"], [1, "logo-preview-section"], [1, "logo-preview-wrapper"], ["alt", "Company Logo", 1, "logo-preview-image", 3, "src"], ["type", "button", "title", "Remove logo", 1, "btn", "btn-sm", "btn-danger", "logo-remove-btn", 3, "click"], [1, "bi", "bi-x-circle"], [1, "text-muted", "small", "mt-2", "mb-0"], [1, "bi", "bi-check-circle", "text-success"], [1, "selected-file-info"], [1, "file-size"], [3, "value"], ["type", "text", "formControlName", "otherCompanyType", "placeholder", "e.g., Joint Venture, Partnership", 1, "form-control"], ["type", "text", "formControlName", "otherIndustrySector", "placeholder", "e.g., Consulting, Manufacturing", 1, "form-control"], ["value", "__others__"], ["type", "text", "formControlName", "otherCity", "placeholder", "Enter your city name", 1, "form-control"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-danger", 3, "click"], [1, "text-success"], [1, "text-muted", "d-block"], ["formArrayName", "locations"], ["class", "card mb-4", 3, "formGroupName", 4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "btn-primary", "btn-lg", "w-100", "mt-3", 3, "click"], [1, "bi", "bi-plus-circle"], [1, "card", "mb-4", 3, "formGroupName"], [1, "card-header", "bg-light", "d-flex", "justify-content-between", "align-items-center"], [1, "mb-0"], [1, "card-body"], ["type", "text", "formControlName", "locationName", "placeholder", "e.g., Head Office, Bangalore Branch", 1, "form-control"], ["formControlName", "locationType", 1, "form-control", 3, "change"], ["type", "text", "formControlName", "locationContactName", "placeholder", "Full name", 1, "form-control"], ["type", "email", "formControlName", "locationContactEmail", "placeholder", "email@company.com", 1, "form-control"], ["type", "tel", "formControlName", "locationContactPhone", "placeholder", "10 digit number", "maxlength", "10", 1, "form-control"], ["type", "tel", "formControlName", "landlineNumber", "placeholder", "Optional", 1, "form-control"], [1, "bi", "bi-trash"], ["type", "text", "formControlName", "otherLocationType", "placeholder", "e.g., Distribution Center, Retail Shop", 1, "form-control"], ["formArrayName", "departments"], ["formControlName", "locationIndex", 1, "form-control"], ["type", "text", "formControlName", "departmentName", "placeholder", "e.g., Hardware Supply, Software Services", 1, "form-control"], ["formControlName", "categoryOfProducts", 1, "form-control", 3, "change"], ["formControlName", "departmentDescription", "placeholder", "Brief description", "rows", "2", 1, "form-control"], ["class", "col-12", 4, "ngIf"], ["type", "text", "formControlName", "otherCategoryType", "placeholder", "e.g., Specialized Machinery", 1, "form-control"], [1, "col-12"], [1, "p-3", "border", "rounded", 2, "background", "#f8f9fa"], [1, "form-label", "fw-bold", "small", "mb-2"], [1, "bi", "bi-clipboard-check", "me-1"], ["class", "py-2 border-bottom", 4, "ngFor", "ngForOf"], [1, "py-2", "border-bottom"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "small"], ["role", "group", 1, "btn-group", "btn-group-sm"], ["type", "button", 1, "btn", 3, "click"], ["type", "text", "placeholder", "Remarks (optional) \u2014 explain your answer", 1, "form-control", "form-control-sm", "mt-2", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["formArrayName", "users"], ["type", "button", 1, "btn", "btn-success", "btn-lg", "w-100", "mt-3", 3, "click"], [1, "bi", "bi-person-plus"], ["formControlName", "departmentIndex", 1, "form-control"], ["type", "text", "formControlName", "firstName", "placeholder", "First name", 1, "form-control"], ["type", "text", "formControlName", "lastName", "placeholder", "Last name", 1, "form-control"], ["formControlName", "gender", 1, "form-control"], ["value", "M"], ["value", "F"], ["value", "Other"], ["type", "date", "formControlName", "dateOfBirth", 1, "form-control"], ["type", "email", "formControlName", "email", "placeholder", "contact@supplier.com", 1, "form-control"], ["type", "tel", "formControlName", "phone", "placeholder", "10 digit number", "maxlength", "10", 1, "form-control"], ["type", "text", "formControlName", "designation", "placeholder", "Job title", 1, "form-control"], ["type", "text", "formControlName", "employeeId", "placeholder", "e.g., SUP001", 1, "form-control"], ["type", "text", "formControlName", "addressLine2", "placeholder", "Apt, Suite, etc.", 1, "form-control"], ["type", "text", "formControlName", "city", "placeholder", "City", 1, "form-control"], ["type", "text", "formControlName", "state", "placeholder", "State / Province", 1, "form-control"], ["type", "text", "formControlName", "postalCode", "placeholder", "Postal code", "maxlength", "10", 1, "form-control"], ["type", "password", "formControlName", "password", "placeholder", "Strong password", 1, "form-control"], [4, "ngIf"], ["type", "button", 1, "btn", "btn-success", "btn-lg", 3, "click"], [1, "bi", "bi-floppy"], ["type", "button", 1, "btn", "btn-success", "btn-lg", "px-5", 3, "click", "disabled"], [1, "bi", "bi-check-circle"]], template: function CreateSComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4);
    \u0275\u0275element(4, "i", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h2");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "p", 6)(8, "span");
    \u0275\u0275element(9, "i", 7);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span");
    \u0275\u0275element(12, "i", 8);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 9)(15, "div", 10)(16, "div", 11);
    \u0275\u0275text(17, "1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 12);
    \u0275\u0275text(19, "Supplier Details");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 10)(21, "div", 11);
    \u0275\u0275text(22, "2");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 12);
    \u0275\u0275text(24, "Locations");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 10)(26, "div", 11);
    \u0275\u0275text(27, "3");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 12);
    \u0275\u0275text(29, "Categories");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 10)(31, "div", 11);
    \u0275\u0275text(32, "4");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 12);
    \u0275\u0275text(34, "Contacts");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(35, "form", 13);
    \u0275\u0275template(36, CreateSComponent_div_36_Template, 223, 60, "div", 14)(37, CreateSComponent_div_37_Template, 11, 1, "div", 14)(38, CreateSComponent_div_38_Template, 11, 1, "div", 14)(39, CreateSComponent_div_39_Template, 11, 1, "div", 14);
    \u0275\u0275elementStart(40, "div", 15)(41, "div", 16)(42, "button", 17);
    \u0275\u0275listener("click", function CreateSComponent_Template_button_click_42_listener() {
      return ctx.prevStep();
    });
    \u0275\u0275element(43, "i", 18);
    \u0275\u0275text(44, " Previous ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "span", 19);
    \u0275\u0275text(46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "div", 20);
    \u0275\u0275template(48, CreateSComponent_button_48_Template, 3, 0, "button", 21)(49, CreateSComponent_button_49_Template, 3, 2, "button", 22);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx.mode === "create" ? "Supplier Management" : "Edit Supplier Details");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" Company: ", ctx.companyName || "-");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx.email || "-");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx.currentStep === 1)("completed", ctx.currentStep > 1);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("active", ctx.currentStep === 2)("completed", ctx.currentStep > 2);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("active", ctx.currentStep === 3)("completed", ctx.currentStep > 3);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("active", ctx.currentStep === 4)("completed", ctx.currentStep > 4);
    \u0275\u0275advance(5);
    \u0275\u0275property("formGroup", ctx.supplierForm);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.currentStep === 1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.currentStep === 2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.currentStep === 3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.currentStep === 4);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx.currentStep === 1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("Step ", ctx.currentStep, " of ", ctx.maxStep);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx.currentStep < ctx.maxStep);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.currentStep === ctx.maxStep);
  }
}, dependencies: [CommonModule, NgForOf, NgIf, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, FormGroupDirective, FormControlName, FormGroupName, FormArrayName], styles: ['\n\n.logo-upload-container[_ngcontent-%COMP%] {\n  border: 2px dashed #dee2e6;\n  border-radius: 8px;\n  padding: 20px;\n  background-color: #f8f9fa;\n  transition: all 0.3s ease;\n}\n.logo-upload-container[_ngcontent-%COMP%]:hover {\n  border-color: #0d6efd;\n  background-color: #e7f1ff;\n}\n.logo-preview-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-bottom: 20px;\n}\n.logo-preview-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  max-width: 300px;\n  max-height: 200px;\n}\n.logo-preview-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  max-height: 200px;\n  border-radius: 8px;\n  border: 2px solid #dee2e6;\n  object-fit: contain;\n  background-color: white;\n  padding: 10px;\n}\n.logo-remove-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -10px;\n  right: -10px;\n  border-radius: 50%;\n  width: 32px;\n  height: 32px;\n  padding: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n}\n.logo-remove-btn[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n}\n.logo-upload-section[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.logo-upload-section.has-logo[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n.custom-file-upload[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n}\n.file-input[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 0.1px;\n  height: 0.1px;\n  opacity: 0;\n  overflow: hidden;\n  z-index: -1;\n}\n.file-upload-label[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 30px;\n  border: 2px dashed #0d6efd;\n  border-radius: 8px;\n  background-color: white;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  min-height: 150px;\n}\n.file-upload-label[_ngcontent-%COMP%]:hover {\n  border-color: #0b5ed7;\n  background-color: #f0f8ff;\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(13, 110, 253, 0.15);\n}\n.upload-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  color: #0d6efd;\n  margin-bottom: 15px;\n}\n.upload-text[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #212529;\n  margin-bottom: 8px;\n}\n.upload-text[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #0d6efd;\n}\n.upload-hint[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #6c757d;\n}\n.selected-file-info[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  padding: 12px;\n  background-color: white;\n  border: 1px solid #dee2e6;\n  border-radius: 6px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  color: #495057;\n}\n.selected-file-info[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: #0d6efd;\n}\n.file-size[_ngcontent-%COMP%] {\n  color: #6c757d;\n  font-size: 0.9em;\n  margin-left: auto;\n}\n@media (max-width: 768px) {\n  .logo-preview-wrapper[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n  .logo-preview-image[_ngcontent-%COMP%] {\n    max-height: 150px;\n  }\n  .file-upload-label[_ngcontent-%COMP%] {\n    padding: 20px;\n    min-height: 120px;\n  }\n  .upload-icon[_ngcontent-%COMP%] {\n    font-size: 36px;\n  }\n}\n@keyframes _ngcontent-%COMP%_fadeInScale {\n  from {\n    opacity: 0;\n    transform: scale(0.9);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n.logo-preview-wrapper[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeInScale 0.3s ease;\n}\n.professional-header[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  border-radius: 16px;\n  padding: 2rem;\n  margin-bottom: 2rem;\n  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);\n  color: white;\n}\n.header-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 2rem;\n  flex-wrap: wrap;\n}\n.header-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1.5rem;\n}\n.header-avatar[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  min-width: 80px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.25);\n  border: 3px solid rgba(255, 255, 255, 0.4);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 2rem;\n  font-weight: 700;\n  color: white;\n  text-transform: uppercase;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);\n}\n.header-user-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.header-user-name[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  font-weight: 700;\n  color: white;\n  margin: 0;\n  line-height: 1.2;\n}\n.header-user-role[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  color: rgba(255, 255, 255, 0.9);\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin: 0;\n}\n.header-user-role[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.header-info-cards[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  flex-wrap: wrap;\n}\n.header-info-card[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.15);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  border-radius: 12px;\n  padding: 1rem 1.25rem;\n  min-width: 200px;\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  transition: all 0.3s ease;\n  border: 1px solid rgba(255, 255, 255, 0.2);\n}\n.header-info-card[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.2);\n  transform: translateY(-2px);\n}\n.header-info-icon[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  min-width: 48px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.25);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.5rem;\n  color: white;\n}\n.header-info-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.header-info-label[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  color: rgba(255, 255, 255, 0.85);\n  font-weight: 600;\n}\n.header-info-value[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 600;\n  color: white;\n  word-break: break-word;\n}\n.form-header[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  border-radius: 16px;\n  padding: 2rem;\n  margin-bottom: 2rem;\n  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);\n  color: white;\n  text-align: center;\n}\n.form-header-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 1rem;\n  margin-bottom: 0.75rem;\n}\n.form-header-icon[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.25);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.75rem;\n  color: white;\n}\n.form-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 700;\n  color: white;\n  margin: 0;\n}\n.form-header-subtitle[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 1.5rem;\n  font-size: 0.95rem;\n  color: rgba(255, 255, 255, 0.9);\n  margin: 0;\n  flex-wrap: wrap;\n}\n.form-header-subtitle[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 0.5rem;\n}\n@media (max-width: 992px) {\n  .header-content[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .header-info-cards[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .header-info-card[_ngcontent-%COMP%] {\n    flex: 1;\n    min-width: 180px;\n  }\n}\n@media (max-width: 768px) {\n  .professional-header[_ngcontent-%COMP%] {\n    padding: 1.5rem;\n  }\n  .header-avatar[_ngcontent-%COMP%] {\n    width: 60px;\n    height: 60px;\n    min-width: 60px;\n    font-size: 1.5rem;\n  }\n  .header-user-name[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n  .header-info-cards[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .header-info-card[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .form-header[_ngcontent-%COMP%] {\n    padding: 1.5rem;\n  }\n  .form-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n  .form-header-icon[_ngcontent-%COMP%] {\n    width: 50px;\n    height: 50px;\n    font-size: 1.5rem;\n  }\n  .form-header-subtitle[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 0.5rem;\n  }\n}\n.wizard-container[_ngcontent-%COMP%] {\n  max-width: 1120px;\n  margin: 0 auto;\n  padding: 10px 20px;\n  font-family:\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    "Helvetica Neue",\n    Arial,\n    sans-serif;\n}\n.step-indicator[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  position: relative;\n  padding: 0 0 5px 0;\n}\n.step-indicator[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 20px;\n  left: 0;\n  right: 0;\n  height: 2px;\n  background: #e9ecef;\n  z-index: -1;\n}\n.step-item[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  position: relative;\n}\n.step-number[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background: #f8f9fa;\n  border: 2px solid #dee2e6;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 600;\n  color: #6c757d;\n  margin-bottom: 10px;\n  transition: all 0.3s ease;\n}\n.step-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #6c757d;\n  text-align: center;\n  font-weight: 500;\n  transition: all 0.3s ease;\n}\n.step-item.active[_ngcontent-%COMP%]   .step-number[_ngcontent-%COMP%] {\n  background: #0d6efd;\n  border-color: #0d6efd;\n  color: white;\n  box-shadow: 0 0 0 3px rgba(13, 110, 253, 0.15);\n}\n.step-item.active[_ngcontent-%COMP%]   .step-label[_ngcontent-%COMP%] {\n  color: #0d6efd;\n  font-weight: 600;\n}\n.step-item.completed[_ngcontent-%COMP%]   .step-number[_ngcontent-%COMP%] {\n  background: #198754;\n  border-color: #198754;\n  color: white;\n}\n.step-item.completed[_ngcontent-%COMP%]   .step-number[_ngcontent-%COMP%]::after {\n  content: "\\2713";\n  font-weight: bold;\n}\n.step-item.completed[_ngcontent-%COMP%]   .step-label[_ngcontent-%COMP%] {\n  color: #198754;\n}\n.step-content[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeIn 0.3s ease-in;\n  padding: 0;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.fade-in[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeIn 0.3s ease-in;\n}\n.step-title[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 600;\n  color: #212529;\n  margin-bottom: 5px;\n}\n.step-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  margin: 0;\n}\n.form-label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #212529;\n  margin-bottom: 8px;\n  display: block;\n}\n.required[_ngcontent-%COMP%] {\n  color: #dc3545;\n  margin-left: 2px;\n}\n.form-control[_ngcontent-%COMP%], \n.form-control-lg[_ngcontent-%COMP%] {\n  border: 1px solid #dee2e6;\n  border-radius: 6px;\n  padding: 10px 12px;\n  font-size: 14px;\n  transition: all 0.2s ease;\n}\n.form-control-lg[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  font-size: 16px;\n}\n.form-control[_ngcontent-%COMP%]:focus, \n.form-control-lg[_ngcontent-%COMP%]:focus {\n  border-color: #0d6efd;\n  box-shadow: 0 0 0 3px rgba(13, 110, 253, 0.1);\n  outline: none;\n}\n.form-control.is-invalid[_ngcontent-%COMP%] {\n  border-color: #dc3545;\n}\n.form-control.is-invalid[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 3px rgba(220, 53, 69, 0.1);\n}\n.invalid-feedback[_ngcontent-%COMP%] {\n  display: block;\n  color: #dc3545;\n  font-size: 12px;\n  margin-top: 5px;\n}\n.locations-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.card[_ngcontent-%COMP%] {\n  border: 1px solid #dee2e6;\n  border-radius: 8px;\n  overflow: hidden;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);\n  transition: all 0.2s ease;\n}\n.card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.card-header[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  background-color: #f8f9fa;\n  border-bottom: 1px solid #dee2e6;\n}\n.card-header[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #212529;\n  margin: 0;\n}\n.card-body[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n.btn[_ngcontent-%COMP%] {\n  border-radius: 6px;\n  font-weight: 500;\n  transition: all 0.2s ease;\n  cursor: pointer;\n  border: none;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background-color: #0d6efd;\n  color: white;\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #0b5ed7;\n  transform: translateY(-1px);\n  box-shadow: 0 4px 8px rgba(13, 110, 253, 0.3);\n}\n.btn-primary[_ngcontent-%COMP%]:disabled {\n  background-color: #b8c6db;\n  cursor: not-allowed;\n}\n.btn-outline-primary[_ngcontent-%COMP%] {\n  color: #0d6efd;\n  border: 1px solid #0d6efd;\n  background-color: white;\n}\n.btn-outline-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #0d6efd;\n  color: white;\n}\n.btn-outline-success[_ngcontent-%COMP%] {\n  color: #198754;\n  border: 1px solid #198754;\n  background-color: white;\n}\n.btn-outline-success[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #198754;\n  color: white;\n}\n.btn-outline-danger[_ngcontent-%COMP%] {\n  color: #dc3545;\n  border: 1px solid #dc3545;\n  background-color: white;\n}\n.btn-outline-danger[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #dc3545;\n  color: white;\n}\n.btn-outline-secondary[_ngcontent-%COMP%] {\n  color: #6c757d;\n  border: 1px solid #6c757d;\n  background-color: white;\n}\n.btn-outline-secondary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #6c757d;\n  color: white;\n}\n.btn-success[_ngcontent-%COMP%] {\n  background-color: #198754;\n  color: white;\n}\n.btn-success[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #157347;\n  transform: translateY(-1px);\n  box-shadow: 0 4px 8px rgba(25, 135, 84, 0.3);\n}\n.btn-success[_ngcontent-%COMP%]:disabled {\n  background-color: #b8d8be;\n  cursor: not-allowed;\n}\n.btn-lg[_ngcontent-%COMP%] {\n  padding: 12px 24px;\n  font-size: 16px;\n}\n.btn-sm[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  font-size: 12px;\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.w-100[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.px-5[_ngcontent-%COMP%] {\n  padding-left: 48px;\n  padding-right: 48px;\n}\n.location-section[_ngcontent-%COMP%], \n.dept-section[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.location-header[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], \n.dept-section[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin: 0;\n  font-size: 16px;\n}\n.dept-section[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  color: #0d6efd;\n}\n.users-container[_ngcontent-%COMP%], \n.departments-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  margin-bottom: 12px;\n}\n.alert[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  border-radius: 6px;\n  margin: 0;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 14px;\n}\n.alert-info[_ngcontent-%COMP%] {\n  background-color: #cfe2ff;\n  color: #084298;\n  border: 1px solid #b6d4fe;\n}\n.step-navigation[_ngcontent-%COMP%] {\n  margin-top: 40px;\n  padding-top: 24px;\n}\n.d-flex[_ngcontent-%COMP%] {\n  display: flex;\n}\n.gap-3[_ngcontent-%COMP%] {\n  gap: 24px;\n}\n.justify-content-between[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n.justify-content-center[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n.align-items-center[_ngcontent-%COMP%] {\n  align-items: center;\n}\n.step-indicator-text[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  font-size: 14px;\n}\n.text-muted[_ngcontent-%COMP%] {\n  color: #6c757d;\n}\n.text-primary[_ngcontent-%COMP%] {\n  color: #0d6efd;\n}\n.mb-0[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.mb-2[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n.mb-3[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.mb-4[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.mb-5[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n}\n.mt-3[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n.mt-4[_ngcontent-%COMP%] {\n  margin-top: 24px;\n}\n.mt-5[_ngcontent-%COMP%] {\n  margin-top: 32px;\n}\n.ms-3[_ngcontent-%COMP%] {\n  margin-left: 16px;\n}\n.pt-4[_ngcontent-%COMP%] {\n  padding-top: 24px;\n}\n.bg-light[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n}\n.border-top[_ngcontent-%COMP%] {\n  border-top: 1px solid #dee2e6;\n}\n@media (max-width: 768px) {\n  .wizard-container[_ngcontent-%COMP%] {\n    padding: 20px 10px;\n  }\n  .step-indicator[_ngcontent-%COMP%] {\n    padding-bottom: 20px;\n  }\n  .step-indicator[_ngcontent-%COMP%]::before {\n    top: 15px;\n  }\n  .step-number[_ngcontent-%COMP%] {\n    width: 36px;\n    height: 36px;\n    font-size: 14px;\n  }\n  .step-label[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n  .step-title[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  .d-flex[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .gap-3[_ngcontent-%COMP%] {\n    gap: 12px;\n  }\n  .row[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n  .col-md-6[_ngcontent-%COMP%] {\n    flex: 0 0 100%;\n    padding: 0;\n  }\n  .step-navigation[_ngcontent-%COMP%] {\n    margin-top: 24px;\n  }\n  .btn-lg[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=create-s.component.css.map */'] });
var CreateSComponent = _CreateSComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CreateSComponent, [{
    type: Component,
    args: [{ selector: "app-create-s", standalone: true, imports: [CommonModule, ReactiveFormsModule], template: `<!-- \r
\r
<div class="wizard-container p-4">\r
\r
  <div class="form-header mb-4">\r
    <div class="form-header-title">\r
      <div class="form-header-icon">\r
        <i class="cil-sitemap"></i>\r
      </div>\r
      <h2>\r
        {{ mode === 'create' ? 'Supplier Management' : 'Edit Supplier Details' }}\r
      </h2>\r
    </div>\r
    <p class="form-header-subtitle">\r
      <span>\r
        <i class="cil-building"></i>\r
        Company: {{ companyName || '-' }}\r
      </span>\r
      <span>\r
        <i class="cil-envelope-closed"></i>\r
        {{ email || '-' }}\r
      </span>\r
    </p>\r
  </div>\r
\r
  \r
  <div class="step-indicator mb-5">\r
    <div class="step-item" [class.active]="currentStep === 1" [class.completed]="currentStep > 1">\r
      <div class="step-number">1</div>\r
      <div class="step-label">Supplier Details</div>\r
    </div>\r
    <div class="step-item" [class.active]="currentStep === 2" [class.completed]="currentStep > 2">\r
      <div class="step-number">2</div>\r
      <div class="step-label">Locations</div>\r
    </div>\r
    <div class="step-item" [class.active]="currentStep === 3" [class.completed]="currentStep > 3">\r
      <div class="step-number">3</div>\r
      <div class="step-label">Categories</div>\r
    </div>\r
    <div class="step-item" [class.active]="currentStep === 4" [class.completed]="currentStep > 4">\r
      <div class="step-number">4</div>\r
      <div class="step-label">Contacts</div>\r
    </div>\r
  </div>\r
\r
  <form [formGroup]="supplierForm">\r
\r
    \r
    <div *ngIf="currentStep === 1" class="step-content fade-in">\r
      <div class="step-title mb-4">\r
        <h4>Supplier Company Details</h4>\r
        <p class="text-muted">Enter your company and contact information</p>\r
      </div>\r
\r
      <div class="section-header mb-3 mt-4">Company Logo</div>\r
      <div class="row">\r
        <div class="col-12 mb-3">\r
          <div class="logo-upload-container">\r
            <div class="logo-preview-section" *ngIf="logoPreview">\r
              <div class="logo-preview-wrapper">\r
                <img [src]="logoPreview" alt="Company Logo" class="logo-preview-image">\r
                <button type="button" class="btn btn-sm btn-danger logo-remove-btn"\r
                  (click)="removeLogo()" title="Remove logo">\r
                  <i class="bi bi-x-circle"></i>\r
                </button>\r
              </div>\r
              <p class="text-muted small mt-2 mb-0">\r
                <i class="bi bi-check-circle text-success"></i> Logo selected\r
              </p>\r
            </div>\r
            <div class="logo-upload-section" [class.has-logo]="logoPreview">\r
              <label class="form-label">\r
                Upload Company Logo\r
                <span class="text-muted small">(Optional - Max 5MB, JPG/PNG/GIF/SVG)</span>\r
              </label>\r
              <div class="custom-file-upload">\r
                <input type="file" id="logoFileInput" class="file-input"\r
                  accept="image/jpeg,image/jpg,image/png,image/gif,image/svg+xml"\r
                  (change)="onLogoSelected($event)" #logoInput>\r
                <label for="logoFileInput" class="file-upload-label">\r
                  <div class="upload-icon"><i class="bi bi-cloud-upload"></i></div>\r
                  <div class="upload-text"><strong>Click to upload</strong> or drag and drop</div>\r
                  <div class="upload-hint">JPG, PNG, GIF or SVG (Max 5MB)</div>\r
                </label>\r
              </div>\r
              <div class="selected-file-info" *ngIf="selectedLogoFile && !logoPreview">\r
                <i class="bi bi-file-earmark-image"></i>\r
                <span>{{ selectedLogoFile.name }}</span>\r
                <span class="file-size">({{ (selectedLogoFile.size / 1024).toFixed(2) }} KB)</span>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
\r
     \r
      <div class="section-header mb-3">Company Information</div>\r
      <div class="row">\r
        <div class="col-md-6 mb-3">\r
          <label class="form-label">Company Name <span class="text-danger">*</span></label>\r
          <input type="text" class="form-control" formControlName="companyName"\r
            placeholder="Enter company name"\r
            [class.is-invalid]="supplierForm.get('companyName')?.invalid && supplierForm.get('companyName')?.touched"/>\r
        </div>\r
        <div class="col-md-6 mb-3">\r
          <label class="form-label">Company Type <span class="text-danger">*</span></label>\r
          <select class="form-control" formControlName="companyType"\r
            [class.is-invalid]="supplierForm.get('companyType')?.invalid && supplierForm.get('companyType')?.touched"\r
            (change)="onCompanyTypeChange($event)">\r
            <option value="">Select Company Type</option>\r
            <option *ngFor="let type of companyTypes" [value]="type">{{ type }}</option>\r
          </select>\r
        </div>\r
\r
        <div class="col-md-6 mb-3" *ngIf="supplierForm.get('companyType')?.value === 'Others'">\r
          <label class="form-label">Specify Company Type <span class="text-danger">*</span></label>\r
          <input type="text" class="form-control" formControlName="otherCompanyType"\r
            placeholder="e.g., Joint Venture, Partnership"\r
            [class.is-invalid]="supplierForm.get('otherCompanyType')?.invalid && supplierForm.get('otherCompanyType')?.touched"/>\r
        </div>\r
\r
        <div class="col-md-6 mb-3">\r
          <label class="form-label">Industry Sector <span class="text-danger">*</span></label>\r
          <select class="form-control" formControlName="industrySector"\r
            [class.is-invalid]="supplierForm.get('industrySector')?.invalid && supplierForm.get('industrySector')?.touched"\r
            (change)="onIndustrySectorChange($event)">\r
            <option value="">Select Industry Sector</option>\r
            <option *ngFor="let sector of industrySectors" [value]="sector">{{ sector }}</option>\r
          </select>\r
        </div>\r
\r
        <div class="col-md-6 mb-3" *ngIf="supplierForm.get('industrySector')?.value === 'Others'">\r
          <label class="form-label">Specify Industry Sector <span class="text-danger">*</span></label>\r
          <input type="text" class="form-control" formControlName="otherIndustrySector"\r
            placeholder="e.g., Consulting, Manufacturing"\r
            [class.is-invalid]="supplierForm.get('otherIndustrySector')?.invalid && supplierForm.get('otherIndustrySector')?.touched"/>\r
        </div>\r
\r
        <div class="col-md-6 mb-3">\r
          <label class="form-label">Website</label>\r
          <input type="url" class="form-control" formControlName="website" placeholder="https://example.com"/>\r
        </div>\r
      </div>\r
\r
      \r
      <div class="section-header mb-3">Primary Contact Person</div>\r
      <div class="row">\r
        <div class="col-md-6 mb-3">\r
          <label class="form-label">Contact Person Name <span class="text-danger">*</span></label>\r
          <input type="text" class="form-control" formControlName="contactPersonName"\r
            placeholder="Full name"\r
            [class.is-invalid]="supplierForm.get('contactPersonName')?.invalid && supplierForm.get('contactPersonName')?.touched"/>\r
        </div>\r
        <div class="col-md-6 mb-3">\r
          <label class="form-label">Designation <span class="text-danger">*</span></label>\r
          <input type="text" class="form-control" formControlName="contactPersonDesignation"\r
            placeholder="e.g., Supply Manager"\r
            [class.is-invalid]="supplierForm.get('contactPersonDesignation')?.invalid && supplierForm.get('contactPersonDesignation')?.touched"/>\r
        </div>\r
        <div class="col-md-6 mb-3">\r
          <label class="form-label">Email <span class="text-danger">*</span></label>\r
          <input type="email" class="form-control" formControlName="contactPersonEmail"\r
            placeholder="contact@company.com"\r
            [class.is-invalid]="supplierForm.get('contactPersonEmail')?.invalid && supplierForm.get('contactPersonEmail')?.touched"/>\r
        </div>\r
        <div class="col-md-6 mb-3">\r
          <label class="form-label">Phone <span class="text-danger">*</span></label>\r
          <input type="tel" class="form-control" formControlName="contactPersonPhone"\r
            placeholder="10 digit number" maxlength="10"\r
            [class.is-invalid]="supplierForm.get('contactPersonPhone')?.invalid && supplierForm.get('contactPersonPhone')?.touched"/>\r
        </div>\r
      </div>\r
\r
      \r
      <div class="section-header mb-3">Headquarters Address</div>\r
      <div class="row">\r
        <div class="col-12 mb-3">\r
          <label class="form-label">Address Line 1 <span class="text-danger">*</span></label>\r
          <input type="text" class="form-control" formControlName="addressLine1"\r
            placeholder="Street address"\r
            [class.is-invalid]="supplierForm.get('addressLine1')?.invalid && supplierForm.get('addressLine1')?.touched"/>\r
        </div>\r
        <div class="col-12 mb-3">\r
          <label class="form-label">Address Line 2</label>\r
          <input type="text" class="form-control" formControlName="addressLine2"\r
            placeholder="Building name, Floor, etc."/>\r
        </div>\r
\r
        \r
        <div class="col-md-6 mb-3">\r
          <label class="form-label">Country <span class="text-danger">*</span></label>\r
          <select class="form-control" formControlName="country"\r
            [class.is-invalid]="supplierForm.get('country')?.invalid && supplierForm.get('country')?.touched"\r
            (change)="onHQCountryChange($event)">\r
            <option value="">Select Country</option>\r
            <option *ngFor="let c of allCountries" [value]="c">{{ c }}</option>\r
          </select>\r
        </div>\r
\r
        \r
        <div class="col-md-6 mb-3">\r
          <label class="form-label">State / Province <span class="text-danger">*</span></label>\r
          <select class="form-control" formControlName="state"\r
            [class.is-invalid]="supplierForm.get('state')?.invalid && supplierForm.get('state')?.touched"\r
            (change)="onHQStateChange($event)">\r
            <option value="">\r
              {{ supplierForm.get('country')?.value ? 'Select State / Province' : 'Select Country first' }}\r
            </option>\r
            <option *ngFor="let s of hqStates" [value]="s">{{ s }}</option>\r
          </select>\r
        </div>\r
\r
       \r
        <div class="col-md-6 mb-3">\r
          <label class="form-label">City <span class="text-danger">*</span></label>\r
          <select class="form-control" formControlName="city"\r
            [class.is-invalid]="supplierForm.get('city')?.invalid && supplierForm.get('city')?.touched"\r
            (change)="onHQCityChange($event)">\r
            <option value="">\r
              {{ supplierForm.get('state')?.value ? 'Select City' : 'Select State first' }}\r
            </option>\r
            <option *ngFor="let c of hqCities" [value]="c">{{ c }}</option>\r
          </select>\r
          <small class="text-muted"\r
            *ngIf="hqCities.length === 0 && supplierForm.get('state')?.value">\r
            No cities found \u2014 you may type the postal code manually below\r
          </small>\r
        </div>\r
\r
        \r
        <div class="col-md-6 mb-3">\r
          <label class="form-label">\r
            Postal Code <span class="text-danger">*</span>\r
            <small class="text-muted ms-1">(auto-filled from city, editable)</small>\r
          </label>\r
          <input type="text" class="form-control" formControlName="postalCode"\r
            placeholder="Postal / ZIP code" maxlength="10"\r
            [class.is-invalid]="supplierForm.get('postalCode')?.invalid && supplierForm.get('postalCode')?.touched"/>\r
        </div>\r
      </div>\r
\r
     \r
      <div class="section-header mb-3">Company Registration Details</div>\r
      <div class="row">\r
     <div class="col-md-4 mb-3">\r
  <label class="form-label">GST Number <span class="text-danger">*</span></label>\r
  <input type="text" class="form-control" formControlName="gstNumber"\r
    placeholder="e.g. 22AAAAA0000A1Z5"\r
    [class.is-invalid]="supplierForm.get('gstNumber')?.invalid && supplierForm.get('gstNumber')?.touched"/>\r
\r
</div>\r
<div class="col-md-4 mb-3">\r
  <label class="form-label">PAN Number <span class="text-danger">*</span></label>\r
  <input type="text" class="form-control" formControlName="panNumber"\r
    placeholder="e.g. AAAAA0000A" maxlength="10"\r
    [class.is-invalid]="supplierForm.get('panNumber')?.invalid && supplierForm.get('panNumber')?.touched"/>\r
\r
</div>\r
        <div class="col-md-4 mb-3">\r
          <label class="form-label">TAN Number</label>\r
          <input type="text" class="form-control" formControlName="tanNumber" placeholder="Tax Account Number"/>\r
        </div>\r
      </div>\r
    </div>\r
\r
    \r
    <div *ngIf="currentStep === 2" class="step-content fade-in">\r
      <div class="step-title mb-4">\r
        <h4>Add Supplier Locations</h4>\r
        <p class="text-muted">Add office and warehouse locations</p>\r
      </div>\r
\r
      <div formArrayName="locations">\r
        <div *ngFor="let loc of locations.controls; let i = index" [formGroupName]="i" class="card mb-4">\r
          <div class="card-header bg-light d-flex justify-content-between align-items-center">\r
            <h6 class="mb-0">Location {{ i + 1 }}</h6>\r
            <button type="button" class="btn btn-sm btn-outline-danger"\r
              (click)="removeLocation(i)" *ngIf="locations.length > 1">\r
              <i class="bi bi-trash"></i> Remove\r
            </button>\r
          </div>\r
          <div class="card-body">\r
            <div class="section-header mb-3">Location Information</div>\r
            <div class="row">\r
              <div class="col-md-6 mb-3">\r
                <label class="form-label">Location Name <span class="text-danger">*</span></label>\r
                <input type="text" class="form-control" formControlName="locationName"\r
                  placeholder="e.g., Head Office, Bangalore Branch"\r
                  [class.is-invalid]="loc.get('locationName')?.invalid && loc.get('locationName')?.touched"/>\r
              </div>\r
              <div class="col-md-6 mb-3">\r
                <label class="form-label">Location Type <span class="text-danger">*</span></label>\r
                <select class="form-control" formControlName="locationType"\r
                  [class.is-invalid]="loc.get('locationType')?.invalid && loc.get('locationType')?.touched"\r
                  (change)="onLocationTypeChange($event, i)">\r
                  <option value="">Select Type</option>\r
                  <option *ngFor="let type of locationTypes" [value]="type">{{ type }}</option>\r
                </select>\r
              </div>\r
              <div class="col-md-6 mb-3" *ngIf="loc.get('locationType')?.value === 'Others'">\r
                <label class="form-label">Specify Location Type <span class="text-danger">*</span></label>\r
                <input type="text" class="form-control" formControlName="otherLocationType"\r
                  placeholder="e.g., Distribution Center, Retail Shop"\r
                  [class.is-invalid]="loc.get('otherLocationType')?.invalid && loc.get('otherLocationType')?.touched"/>\r
              </div>\r
            </div>\r
\r
            <div class="section-header mb-3">Location Contact Person</div>\r
            <div class="row">\r
              <div class="col-md-6 mb-3">\r
                <label class="form-label">Contact Name <span class="text-danger">*</span></label>\r
                <input type="text" class="form-control" formControlName="locationContactName"\r
                  placeholder="Full name"\r
                  [class.is-invalid]="loc.get('locationContactName')?.invalid && loc.get('locationContactName')?.touched"/>\r
              </div>\r
              <div class="col-md-6 mb-3">\r
                <label class="form-label">Email <span class="text-danger">*</span></label>\r
                <input type="email" class="form-control" formControlName="locationContactEmail"\r
                  placeholder="email@company.com"\r
                  [class.is-invalid]="loc.get('locationContactEmail')?.invalid && loc.get('locationContactEmail')?.touched"/>\r
              </div>\r
              <div class="col-md-6 mb-3">\r
                <label class="form-label">Phone <span class="text-danger">*</span></label>\r
                <input type="tel" class="form-control" formControlName="locationContactPhone"\r
                  placeholder="10 digit number" maxlength="10"\r
                  [class.is-invalid]="loc.get('locationContactPhone')?.invalid && loc.get('locationContactPhone')?.touched"/>\r
              </div>\r
              <div class="col-md-6 mb-3">\r
                <label class="form-label">Landline Number</label>\r
                <input type="tel" class="form-control" formControlName="landlineNumber" placeholder="Optional"/>\r
              </div>\r
            </div>\r
\r
            <div class="section-header mb-3">Location Address</div>\r
            <div class="row">\r
              <div class="col-12 mb-3">\r
                <label class="form-label">Address Line 1 <span class="text-danger">*</span></label>\r
                <input type="text" class="form-control" formControlName="addressLine1"\r
                  placeholder="Street address"\r
                  [class.is-invalid]="loc.get('addressLine1')?.invalid && loc.get('addressLine1')?.touched"/>\r
              </div>\r
              <div class="col-12 mb-3">\r
                <label class="form-label">Address Line 2</label>\r
                <input type="text" class="form-control" formControlName="addressLine2"\r
                  placeholder="Building name, Floor, etc."/>\r
              </div>\r
\r
              \r
              <div class="col-md-6 mb-3">\r
                <label class="form-label">Country <span class="text-danger">*</span></label>\r
                <select class="form-control" formControlName="country"\r
                  [class.is-invalid]="loc.get('country')?.invalid && loc.get('country')?.touched"\r
                  (change)="onLocationCountryChange($event, i)">\r
                  <option value="">Select Country</option>\r
                  <option *ngFor="let c of allCountries" [value]="c">{{ c }}</option>\r
                </select>\r
              </div>\r
\r
              \r
              <div class="col-md-6 mb-3">\r
                <label class="form-label">State / Province <span class="text-danger">*</span></label>\r
                <select class="form-control" formControlName="state"\r
                  [class.is-invalid]="loc.get('state')?.invalid && loc.get('state')?.touched"\r
                  (change)="onLocationStateChange($event, i)">\r
                  <option value="">\r
                    {{ loc.get('country')?.value ? 'Select State / Province' : 'Select Country first' }}\r
                  </option>\r
                  <option *ngFor="let s of getStatesForLocation(i)" [value]="s">{{ s }}</option>\r
                </select>\r
              </div>\r
\r
              \r
              <div class="col-md-6 mb-3">\r
                <label class="form-label">City <span class="text-danger">*</span></label>\r
                <select class="form-control" formControlName="city"\r
                  [class.is-invalid]="loc.get('city')?.invalid && loc.get('city')?.touched"\r
                  (change)="onLocationCityChange($event, i)">\r
                  <option value="">\r
                    {{ loc.get('state')?.value ? 'Select City' : 'Select State first' }}\r
                  </option>\r
                  <option *ngFor="let c of getCitiesForLocation(i)" [value]="c">{{ c }}</option>\r
                </select>\r
              </div>\r
\r
             \r
              <div class="col-md-6 mb-3">\r
                <label class="form-label">\r
                  Postal Code <span class="text-danger">*</span>\r
                  <small class="text-muted ms-1">(auto-filled from city, editable)</small>\r
                </label>\r
                <input type="text" class="form-control" formControlName="postalCode"\r
                  placeholder="Postal / ZIP code" maxlength="10"\r
                  [class.is-invalid]="loc.get('postalCode')?.invalid && loc.get('postalCode')?.touched"/>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <button type="button" class="btn btn-primary btn-lg w-100 mt-3" (click)="addLocation()">\r
          <i class="bi bi-plus-circle"></i> Add Another Location\r
        </button>\r
      </div>\r
    </div>\r
\r
    \r
    <div *ngIf="currentStep === 3" class="step-content fade-in">\r
      <div class="step-title mb-4">\r
        <h4>Add Product Categories</h4>\r
        <p class="text-muted">Add categories/departments and assign them to locations</p>\r
      </div>\r
\r
      <div formArrayName="departments">\r
        <div *ngFor="let dept of departments.controls; let i = index" [formGroupName]="i" class="card mb-4">\r
          <div class="card-header bg-light d-flex justify-content-between align-items-center">\r
            <h6 class="mb-0">Category {{ i + 1 }}</h6>\r
            <button type="button" class="btn btn-sm btn-outline-danger"\r
              (click)="removeDepartment(i)" *ngIf="departments.length > 1">\r
              <i class="bi bi-trash"></i> Remove\r
            </button>\r
          </div>\r
          <div class="card-body">\r
            <div class="section-header mb-3">Location Assignment</div>\r
            <div class="row">\r
              <div class="col-12 mb-3">\r
                <label class="form-label">Select Location <span class="text-danger">*</span></label>\r
                <select class="form-control" formControlName="locationIndex"\r
                  [class.is-invalid]="dept.get('locationIndex')?.invalid && dept.get('locationIndex')?.touched">\r
                  <option value="">Choose a location</option>\r
                  <option *ngFor="let loc of locations.controls; let idx = index" [value]="idx">\r
                    {{ loc.get('locationName')?.value || 'Location ' + (idx + 1) }}\r
                  </option>\r
                </select>\r
              </div>\r
            </div>\r
\r
            <div class="section-header mb-3">Category Information</div>\r
            <div class="row">\r
              <div class="col-md-6 mb-3">\r
                <label class="form-label">Category Name <span class="text-danger">*</span></label>\r
                <input type="text" class="form-control" formControlName="departmentName"\r
                  placeholder="e.g., Hardware Supply, Software Services"\r
                  [class.is-invalid]="dept.get('departmentName')?.invalid && dept.get('departmentName')?.touched"/>\r
              </div>\r
              <div class="col-md-6 mb-3">\r
                <label class="form-label">Category Type</label>\r
                <select class="form-control" formControlName="categoryOfProducts"\r
                  (change)="onCategoryTypeChange($event, i)">\r
                  <option value="">Select Type</option>\r
                  <option *ngFor="let category of categoryOfProducts" [value]="category">{{ category }}</option>\r
                </select>\r
              </div>\r
              <div class="col-md-6 mb-3" *ngIf="dept.get('categoryOfProducts')?.value === 'Others'">\r
                <label class="form-label">Specify Category Type <span class="text-danger">*</span></label>\r
                <input type="text" class="form-control" formControlName="otherCategoryType"\r
                  placeholder="e.g., Specialized Machinery, Custom Software"\r
                  [class.is-invalid]="dept.get('otherCategoryType')?.invalid && dept.get('otherCategoryType')?.touched"/>\r
              </div>\r
              <div class="col-12 mb-3">\r
                <label class="form-label">Description</label>\r
                <textarea class="form-control" formControlName="departmentDescription"\r
                  placeholder="Brief description of the category" rows="2"></textarea>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <button type="button" class="btn btn-primary btn-lg w-100 mt-3" (click)="addDepartment()">\r
          <i class="bi bi-plus-circle"></i> Add Category\r
        </button>\r
      </div>\r
    </div>\r
\r
\r
    <div *ngIf="currentStep === 4" class="step-content fade-in">\r
      <div class="step-title mb-4">\r
        <h4>Add Supplier Contacts</h4>\r
        <p class="text-muted">Add contact persons and assign them to categories</p>\r
      </div>\r
\r
      <div formArrayName="users">\r
        <div *ngFor="let user of users.controls; let i = index" [formGroupName]="i" class="card mb-4">\r
          <div class="card-header bg-light d-flex justify-content-between align-items-center">\r
            <h6 class="mb-0">Contact {{ i + 1 }}</h6>\r
            <button type="button" class="btn btn-sm btn-outline-danger"\r
              (click)="removeUser(i)" *ngIf="users.length > 1">\r
              <i class="bi bi-trash"></i> Remove\r
            </button>\r
          </div>\r
          <div class="card-body">\r
            <div class="section-header mb-3">Department Assignment</div>\r
            <div class="row">\r
              <div class="col-12 mb-3">\r
                <label class="form-label">Select Category <span class="text-danger">*</span></label>\r
                <select class="form-control" formControlName="departmentIndex"\r
                  [class.is-invalid]="user.get('departmentIndex')?.invalid && user.get('departmentIndex')?.touched">\r
                  <option value="">Choose a category</option>\r
                  <option *ngFor="let dept of departments.controls; let idx = index" [value]="idx">\r
                    {{ dept.get('departmentName')?.value || 'Category ' + (idx + 1) }}\r
                    <ng-container *ngIf="getLocationNameForDepartment(idx)">\r
                      - {{ getLocationNameForDepartment(idx) }}\r
                    </ng-container>\r
                  </option>\r
                </select>\r
              </div>\r
            </div>\r
\r
            <div class="section-header mb-3">Personal Information</div>\r
            <div class="row">\r
              <div class="col-md-6 mb-3">\r
                <label class="form-label">First Name <span class="text-danger">*</span></label>\r
                <input type="text" class="form-control" formControlName="firstName" placeholder="First name"\r
                  [class.is-invalid]="user.get('firstName')?.invalid && user.get('firstName')?.touched"/>\r
              </div>\r
              <div class="col-md-6 mb-3">\r
                <label class="form-label">Last Name <span class="text-danger">*</span></label>\r
                <input type="text" class="form-control" formControlName="lastName" placeholder="Last name"\r
                  [class.is-invalid]="user.get('lastName')?.invalid && user.get('lastName')?.touched"/>\r
              </div>\r
              <div class="col-md-6 mb-3">\r
                <label class="form-label">Gender</label>\r
                <select class="form-control" formControlName="gender">\r
                  <option value="">Select</option>\r
                  <option value="M">Male</option>\r
                  <option value="F">Female</option>\r
                  <option value="Other">Other</option>\r
                </select>\r
              </div>\r
              <div class="col-md-6 mb-3">\r
                <label class="form-label">Date of Birth</label>\r
                <input type="date" class="form-control" formControlName="dateOfBirth"/>\r
              </div>\r
            </div>\r
\r
            <div class="section-header mb-3">Contact Information</div>\r
            <div class="row">\r
              <div class="col-md-6 mb-3">\r
                <label class="form-label">Email <span class="text-danger">*</span></label>\r
                <input type="email" class="form-control" formControlName="email"\r
                  placeholder="contact@supplier.com"\r
                  [class.is-invalid]="user.get('email')?.invalid && user.get('email')?.touched"/>\r
              </div>\r
              <div class="col-md-6 mb-3">\r
                <label class="form-label">Phone <span class="text-danger">*</span></label>\r
                <input type="tel" class="form-control" formControlName="phone"\r
                  placeholder="10 digit number" maxlength="10"\r
                  [class.is-invalid]="user.get('phone')?.invalid && user.get('phone')?.touched"/>\r
              </div>\r
            </div>\r
\r
            <div class="section-header mb-3">Employment Details</div>\r
            <div class="row">\r
              <div class="col-md-6 mb-3">\r
                <label class="form-label">Designation <span class="text-danger">*</span></label>\r
                <input type="text" class="form-control" formControlName="designation" placeholder="Job title"\r
                  [class.is-invalid]="user.get('designation')?.invalid && user.get('designation')?.touched"/>\r
              </div>\r
              <div class="col-md-6 mb-3">\r
                <label class="form-label">Employee ID <span class="text-danger">*</span></label>\r
                <input type="text" class="form-control" formControlName="employeeId" placeholder="e.g., SUP001"\r
                  [class.is-invalid]="user.get('employeeId')?.invalid && user.get('employeeId')?.touched"/>\r
              </div>\r
            </div>\r
\r
            \r
            <div class="section-header mb-3">Residential Address (Optional)</div>\r
            <div class="row">\r
              <div class="col-12 mb-3">\r
                <label class="form-label">Address Line 1</label>\r
                <input type="text" class="form-control" formControlName="addressLine1" placeholder="Street address"/>\r
              </div>\r
              <div class="col-12 mb-3">\r
                <label class="form-label">Address Line 2</label>\r
                <input type="text" class="form-control" formControlName="addressLine2" placeholder="Apt, Suite, etc."/>\r
              </div>\r
              <div class="col-md-6 mb-3">\r
                <label class="form-label">City</label>\r
                <input type="text" class="form-control" formControlName="city" placeholder="City"/>\r
              </div>\r
              <div class="col-md-6 mb-3">\r
                <label class="form-label">State</label>\r
                <input type="text" class="form-control" formControlName="state" placeholder="State / Province"/>\r
              </div>\r
              <div class="col-md-6 mb-3">\r
                <label class="form-label">Postal Code</label>\r
                <input type="text" class="form-control" formControlName="postalCode"\r
                  placeholder="Postal code" maxlength="10"/>\r
              </div>\r
            </div>\r
\r
            <div class="section-header mb-3">Security</div>\r
            <div class="row">\r
              <div class="col-12 mb-3">\r
                <label class="form-label">Password <span class="text-danger">*</span></label>\r
                <input type="password" class="form-control" formControlName="password"\r
                  placeholder="Strong password"\r
                  [class.is-invalid]="user.get('password')?.invalid && user.get('password')?.touched"/>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <button type="button" class="btn btn-success btn-lg w-100 mt-3" (click)="addUser()">\r
          <i class="bi bi-person-plus"></i> Add Contact\r
        </button>\r
      </div>\r
    </div>\r
\r
  \r
    <div class="step-navigation mt-5 pt-4 border-top">\r
      <div class="d-flex gap-3 justify-content-between align-items-center">\r
        <button type="button" class="btn btn-outline-secondary btn-lg"\r
          (click)="prevStep()" [disabled]="currentStep === 1">\r
          <i class="bi bi-chevron-left"></i> Previous\r
        </button>\r
        <span class="text-muted">Step {{ currentStep }} of {{ maxStep }}</span>\r
        <div class="d-flex gap-2">\r
          <button type="button" class="btn btn-success btn-lg"\r
            (click)="saveStep()" *ngIf="currentStep < maxStep">\r
            <i class="bi bi-floppy"></i> Save & Next\r
          </button>\r
          <button type="button" class="btn btn-success btn-lg px-5"\r
            (click)="onSubmit()"\r
            [disabled]="isSubmitting || supplierForm.invalid"\r
            *ngIf="currentStep === maxStep">\r
            <i class="bi bi-check-circle"></i>\r
            {{ mode === 'create' ? 'Create Supplier' : 'Update Supplier' }}\r
          </button>\r
        </div>\r
      </div>\r
    </div>\r
\r
  </form>\r
</div> -->\r
\r
<div class="wizard-container p-4">\r
\r
  <div class="form-header mb-4">\r
    <div class="form-header-title">\r
      <div class="form-header-icon"><i class="cil-sitemap"></i></div>\r
      <h2>{{ mode === 'create' ? 'Supplier Management' : 'Edit Supplier Details' }}</h2>\r
    </div>\r
    <p class="form-header-subtitle">\r
      <span><i class="cil-building"></i> Company: {{ companyName || '-' }}</span>\r
      <span><i class="cil-envelope-closed"></i> {{ email || '-' }}</span>\r
    </p>\r
  </div>\r
\r
  <div class="step-indicator mb-5">\r
    <div class="step-item" [class.active]="currentStep === 1" [class.completed]="currentStep > 1">\r
      <div class="step-number">1</div><div class="step-label">Supplier Details</div>\r
    </div>\r
    <div class="step-item" [class.active]="currentStep === 2" [class.completed]="currentStep > 2">\r
      <div class="step-number">2</div><div class="step-label">Locations</div>\r
    </div>\r
    <div class="step-item" [class.active]="currentStep === 3" [class.completed]="currentStep > 3">\r
      <div class="step-number">3</div><div class="step-label">Categories</div>\r
    </div>\r
    <div class="step-item" [class.active]="currentStep === 4" [class.completed]="currentStep > 4">\r
      <div class="step-number">4</div><div class="step-label">Contacts</div>\r
    </div>\r
  </div>\r
\r
  <form [formGroup]="supplierForm">\r
\r
    <!-- ========== STEP 1: SUPPLIER DETAILS ========== -->\r
    <div *ngIf="currentStep === 1" class="step-content fade-in">\r
      <div class="step-title mb-4">\r
        <h4>Supplier Company Details</h4>\r
        <p class="text-muted">Enter your company and contact information</p>\r
      </div>\r
\r
      <!-- LOGO -->\r
      <div class="section-header mb-3 mt-4">Company Logo</div>\r
      <div class="row">\r
        <div class="col-12 mb-3">\r
          <div class="logo-upload-container">\r
            <div class="logo-preview-section" *ngIf="logoPreview">\r
              <div class="logo-preview-wrapper">\r
                <img [src]="logoPreview" alt="Company Logo" class="logo-preview-image">\r
                <button type="button" class="btn btn-sm btn-danger logo-remove-btn"\r
                  (click)="removeLogo()" title="Remove logo">\r
                  <i class="bi bi-x-circle"></i>\r
                </button>\r
              </div>\r
              <p class="text-muted small mt-2 mb-0">\r
                <i class="bi bi-check-circle text-success"></i> Logo selected\r
              </p>\r
            </div>\r
            <div class="logo-upload-section" [class.has-logo]="logoPreview">\r
              <label class="form-label">\r
                Upload Company Logo\r
                <span class="text-muted small">(Optional - Max 5MB, JPG/PNG/GIF/SVG)</span>\r
              </label>\r
              <div class="custom-file-upload">\r
                <input type="file" id="logoFileInput" class="file-input"\r
                  accept="image/jpeg,image/jpg,image/png,image/gif,image/svg+xml"\r
                  (change)="onLogoSelected($event)" #logoInput>\r
                <label for="logoFileInput" class="file-upload-label">\r
                  <div class="upload-icon"><i class="bi bi-cloud-upload"></i></div>\r
                  <div class="upload-text"><strong>Click to upload</strong> or drag and drop</div>\r
                  <div class="upload-hint">JPG, PNG, GIF or SVG (Max 5MB)</div>\r
                </label>\r
              </div>\r
              <div class="selected-file-info" *ngIf="selectedLogoFile && !logoPreview">\r
                <span>{{ selectedLogoFile.name }}</span>\r
                <span class="file-size">({{ (selectedLogoFile.size / 1024).toFixed(2) }} KB)</span>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <div class="section-header mb-3">Company Information</div>\r
      <div class="row">\r
        <div class="col-md-6 mb-3">\r
          <label class="form-label">Company Name <span class="text-danger">*</span></label>\r
          <input type="text" class="form-control" formControlName="companyName" placeholder="Enter company name"\r
            [class.is-invalid]="supplierForm.get('companyName')?.invalid && supplierForm.get('companyName')?.touched"/>\r
        </div>\r
        <div class="col-md-6 mb-3">\r
          <label class="form-label">Company Type <span class="text-danger">*</span></label>\r
          <select class="form-control" formControlName="companyType"\r
            [class.is-invalid]="supplierForm.get('companyType')?.invalid && supplierForm.get('companyType')?.touched"\r
            (change)="onCompanyTypeChange($event)">\r
            <option value="">Select Company Type</option>\r
            <option *ngFor="let type of companyTypes" [value]="type">{{ type }}</option>\r
          </select>\r
        </div>\r
        <div class="col-md-6 mb-3" *ngIf="supplierForm.get('companyType')?.value === 'Others'">\r
          <label class="form-label">Specify Company Type <span class="text-danger">*</span></label>\r
          <input type="text" class="form-control" formControlName="otherCompanyType"\r
            placeholder="e.g., Joint Venture, Partnership"\r
            [class.is-invalid]="supplierForm.get('otherCompanyType')?.invalid && supplierForm.get('otherCompanyType')?.touched"/>\r
        </div>\r
        <div class="col-md-6 mb-3">\r
          <label class="form-label">Industry Sector <span class="text-danger">*</span></label>\r
          <select class="form-control" formControlName="industrySector"\r
            [class.is-invalid]="supplierForm.get('industrySector')?.invalid && supplierForm.get('industrySector')?.touched"\r
            (change)="onIndustrySectorChange($event)">\r
            <option value="">Select Industry Sector</option>\r
            <option *ngFor="let sector of industrySectors" [value]="sector">{{ sector }}</option>\r
          </select>\r
        </div>\r
        <div class="col-md-6 mb-3" *ngIf="supplierForm.get('industrySector')?.value === 'Others'">\r
          <label class="form-label">Specify Industry Sector <span class="text-danger">*</span></label>\r
          <input type="text" class="form-control" formControlName="otherIndustrySector"\r
            placeholder="e.g., Consulting, Manufacturing"\r
            [class.is-invalid]="supplierForm.get('otherIndustrySector')?.invalid && supplierForm.get('otherIndustrySector')?.touched"/>\r
        </div>\r
        <div class="col-md-6 mb-3">\r
          <label class="form-label">Website</label>\r
          <input type="url" class="form-control" formControlName="website" placeholder="https://example.com"/>\r
        </div>\r
      </div>\r
\r
      <div class="section-header mb-3">Primary Contact Person</div>\r
      <div class="row">\r
        <div class="col-md-6 mb-3">\r
          <label class="form-label">Contact Person Name <span class="text-danger">*</span></label>\r
          <input type="text" class="form-control" formControlName="contactPersonName" placeholder="Full name"\r
            [class.is-invalid]="supplierForm.get('contactPersonName')?.invalid && supplierForm.get('contactPersonName')?.touched"/>\r
        </div>\r
        <div class="col-md-6 mb-3">\r
          <label class="form-label">Designation <span class="text-danger">*</span></label>\r
          <input type="text" class="form-control" formControlName="contactPersonDesignation" placeholder="e.g., Supply Manager"\r
            [class.is-invalid]="supplierForm.get('contactPersonDesignation')?.invalid && supplierForm.get('contactPersonDesignation')?.touched"/>\r
        </div>\r
        <div class="col-md-6 mb-3">\r
          <label class="form-label">Email <span class="text-danger">*</span></label>\r
          <input type="email" class="form-control" formControlName="contactPersonEmail" placeholder="contact@company.com"\r
            [class.is-invalid]="supplierForm.get('contactPersonEmail')?.invalid && supplierForm.get('contactPersonEmail')?.touched"/>\r
        </div>\r
        <div class="col-md-6 mb-3">\r
          <label class="form-label">Phone <span class="text-danger">*</span></label>\r
          <input type="tel" class="form-control" formControlName="contactPersonPhone"\r
            placeholder="10 digit number" maxlength="10"\r
            [class.is-invalid]="supplierForm.get('contactPersonPhone')?.invalid && supplierForm.get('contactPersonPhone')?.touched"/>\r
        </div>\r
      </div>\r
\r
      <div class="section-header mb-3">Headquarters Address</div>\r
      <div class="row">\r
        <div class="col-12 mb-3">\r
          <label class="form-label">Address Line 1 <span class="text-danger">*</span></label>\r
          <input type="text" class="form-control" formControlName="addressLine1" placeholder="Street address"\r
            [class.is-invalid]="supplierForm.get('addressLine1')?.invalid && supplierForm.get('addressLine1')?.touched"/>\r
        </div>\r
        <div class="col-12 mb-3">\r
          <label class="form-label">Address Line 2</label>\r
          <input type="text" class="form-control" formControlName="addressLine2" placeholder="Building name, Floor, etc."/>\r
        </div>\r
\r
        <!-- COUNTRY -->\r
        <div class="col-md-6 mb-3">\r
          <label class="form-label">Country <span class="text-danger">*</span></label>\r
          <select class="form-control" formControlName="country"\r
            [class.is-invalid]="supplierForm.get('country')?.invalid && supplierForm.get('country')?.touched"\r
            (change)="onHQCountryChange($event)">\r
            <option value="">Select Country</option>\r
            <option *ngFor="let c of allCountries" [value]="c">{{ c }}</option>\r
          </select>\r
        </div>\r
\r
        <!-- STATE -->\r
        <div class="col-md-6 mb-3">\r
          <label class="form-label">State / Province <span class="text-danger">*</span></label>\r
          <select class="form-control" formControlName="state"\r
            [class.is-invalid]="supplierForm.get('state')?.invalid && supplierForm.get('state')?.touched"\r
            (change)="onHQStateChange($event)">\r
            <option value="">{{ supplierForm.get('country')?.value ? 'Select State' : 'Select Country first' }}</option>\r
            <option *ngFor="let s of hqStates" [value]="s">{{ s }}</option>\r
          </select>\r
        </div>\r
\r
        <!-- \u2705 CITY \u2014 dropdown with Others -->\r
        <div class="col-md-6 mb-3">\r
          <label class="form-label">City <span class="text-danger">*</span></label>\r
          <select class="form-control" formControlName="city"\r
            [class.is-invalid]="supplierForm.get('city')?.invalid && supplierForm.get('city')?.touched"\r
            (change)="onHQCityChange($event)">\r
            <option value="">{{ supplierForm.get('state')?.value ? 'Select City' : 'Select State first' }}</option>\r
            <option *ngFor="let c of hqCities" [value]="c">{{ c }}</option>\r
            <option value="__others__" *ngIf="hqCities.length > 0">\u2014 Others (type your city) \u2014</option>\r
          </select>\r
        </div>\r
\r
        <!-- \u2705 OTHERS CITY INPUT -->\r
        <div class="col-md-6 mb-3" *ngIf="hqCityIsOthers">\r
          <label class="form-label">\r
            Specify City <span class="text-danger">*</span>\r
            <small class="text-muted ms-1">\u2014 enter postal code manually</small>\r
          </label>\r
          <input type="text" class="form-control" formControlName="otherCity"\r
            placeholder="Enter your city name"\r
            [class.is-invalid]="supplierForm.get('otherCity')?.invalid && supplierForm.get('otherCity')?.touched"/>\r
        </div>\r
\r
        <!-- \u2705 POSTAL CODE -->\r
        <div class="col-md-6 mb-3">\r
          <label class="form-label">\r
            Postal Code <span class="text-danger">*</span>\r
            <small class="text-muted ms-1">\r
              {{ hqCityIsOthers ? '(enter manually)' : '(auto-filled, editable)' }}\r
            </small>\r
          </label>\r
          <input type="text" class="form-control" formControlName="postalCode"\r
            placeholder="Postal / ZIP code" maxlength="10"\r
            [class.is-invalid]="supplierForm.get('postalCode')?.invalid && supplierForm.get('postalCode')?.touched"/>\r
        </div>\r
      </div>\r
\r
      <div class="section-header mb-3">Company Registration Details</div>\r
      <div class="row">\r
        <div class="col-md-4 mb-3">\r
          <label class="form-label">GST Number <span class="text-danger">*</span></label>\r
          <input type="text" class="form-control" formControlName="gstNumber" placeholder="15 digit GST"\r
            [class.is-invalid]="supplierForm.get('gstNumber')?.invalid && supplierForm.get('gstNumber')?.touched"/>\r
        </div>\r
        <div class="col-md-8 mb-3">\r
          <label class="form-label">GST Certificate <span class="text-danger">*</span> <small class="text-muted fw-normal">(PDF/JPG/PNG, Max 5MB)</small></label>\r
          <div class="d-flex align-items-center gap-2">\r
            <input type="file" id="gstDocInput" class="form-control" accept=".pdf,image/jpeg,image/jpg,image/png"\r
              (change)="onDocSelected($event, 'gst')"/>\r
            <button *ngIf="gstDocFile" type="button" class="btn btn-sm btn-outline-danger" (click)="removeDoc('gst')">&#x2715;</button>\r
          </div>\r
          <small *ngIf="gstDocFile" class="text-success">&#10003; {{ gstDocFile.name }}</small>\r
          <small *ngIf="!gstDocFile && mode === 'create'" class="text-muted d-block">Required</small>\r
        </div>\r
\r
        <div class="col-md-4 mb-3">\r
          <label class="form-label">PAN Number <span class="text-danger">*</span></label>\r
          <input type="text" class="form-control" formControlName="panNumber" placeholder="10 digit PAN"\r
            [class.is-invalid]="supplierForm.get('panNumber')?.invalid && supplierForm.get('panNumber')?.touched"/>\r
        </div>\r
        <div class="col-md-8 mb-3">\r
          <label class="form-label">PAN Card <span class="text-danger">*</span> <small class="text-muted fw-normal">(PDF/JPG/PNG, Max 5MB)</small></label>\r
          <div class="d-flex align-items-center gap-2">\r
            <input type="file" id="panDocInput" class="form-control" accept=".pdf,image/jpeg,image/jpg,image/png"\r
              (change)="onDocSelected($event, 'pan')"/>\r
            <button *ngIf="panDocFile" type="button" class="btn btn-sm btn-outline-danger" (click)="removeDoc('pan')">&#x2715;</button>\r
          </div>\r
          <small *ngIf="panDocFile" class="text-success">&#10003; {{ panDocFile.name }}</small>\r
          <small *ngIf="!panDocFile && mode === 'create'" class="text-muted d-block">Required</small>\r
        </div>\r
\r
        <div class="col-md-4 mb-3">\r
          <label class="form-label">TAN Number</label>\r
          <input type="text" class="form-control" formControlName="tanNumber" placeholder="Tax Account Number"/>\r
        </div>\r
        <div class="col-md-8 mb-3">\r
          <label class="form-label">TAN Document <small class="text-muted fw-normal">(PDF/JPG/PNG, Max 5MB)</small></label>\r
          <div class="d-flex align-items-center gap-2">\r
            <input type="file" id="tanDocInput" class="form-control" accept=".pdf,image/jpeg,image/jpg,image/png"\r
              (change)="onDocSelected($event, 'tan')"/>\r
            <button *ngIf="tanDocFile" type="button" class="btn btn-sm btn-outline-danger" (click)="removeDoc('tan')">&#x2715;</button>\r
          </div>\r
          <small *ngIf="tanDocFile" class="text-success">&#10003; {{ tanDocFile.name }}</small>\r
        </div>\r
      </div>\r
\r
      <div class="section-header mb-3">Bank Details</div>\r
      <div class="row">\r
        <div class="col-md-6 mb-3">\r
          <label class="form-label">Account Holder Name <span class="text-danger">*</span></label>\r
          <input type="text" class="form-control" formControlName="bankAccountHolderName" placeholder="As per bank records"\r
            [class.is-invalid]="supplierForm.get('bankAccountHolderName')?.invalid && supplierForm.get('bankAccountHolderName')?.touched"/>\r
        </div>\r
        <div class="col-md-6 mb-3">\r
          <label class="form-label">Bank Account Number <span class="text-danger">*</span></label>\r
          <input type="text" class="form-control" formControlName="bankAccountNumber" placeholder="Account number"\r
            [class.is-invalid]="supplierForm.get('bankAccountNumber')?.invalid && supplierForm.get('bankAccountNumber')?.touched"/>\r
        </div>\r
        <div class="col-md-4 mb-3">\r
          <label class="form-label">Bank Name <span class="text-danger">*</span></label>\r
          <input type="text" class="form-control" formControlName="bankName" placeholder="e.g., State Bank of India"\r
            [class.is-invalid]="supplierForm.get('bankName')?.invalid && supplierForm.get('bankName')?.touched"/>\r
        </div>\r
        <div class="col-md-4 mb-3">\r
          <label class="form-label">Branch Name</label>\r
          <input type="text" class="form-control" formControlName="bankBranchName" placeholder="Branch name"/>\r
        </div>\r
        <div class="col-md-4 mb-3">\r
          <label class="form-label">IFSC Code <span class="text-danger">*</span></label>\r
          <input type="text" class="form-control" formControlName="bankIfscCode" placeholder="11-character IFSC" style="text-transform: uppercase"\r
            [class.is-invalid]="supplierForm.get('bankIfscCode')?.invalid && supplierForm.get('bankIfscCode')?.touched"/>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- ========== STEP 2: LOCATIONS ========== -->\r
    <div *ngIf="currentStep === 2" class="step-content fade-in">\r
      <div class="step-title mb-4">\r
        <h4>Add Supplier Locations</h4>\r
        <p class="text-muted">Add office and warehouse locations</p>\r
      </div>\r
\r
      <div formArrayName="locations">\r
        <div *ngFor="let loc of locations.controls; let i = index" [formGroupName]="i" class="card mb-4">\r
          <div class="card-header bg-light d-flex justify-content-between align-items-center">\r
            <h6 class="mb-0">Location {{ i + 1 }}</h6>\r
            <button type="button" class="btn btn-sm btn-outline-danger"\r
              (click)="removeLocation(i)" *ngIf="locations.length > 1">\r
              <i class="bi bi-trash"></i> Remove\r
            </button>\r
          </div>\r
          <div class="card-body">\r
            <div class="section-header mb-3">Location Information</div>\r
            <div class="row">\r
              <div class="col-md-6 mb-3">\r
                <label class="form-label">Location Name <span class="text-danger">*</span></label>\r
                <input type="text" class="form-control" formControlName="locationName"\r
                  placeholder="e.g., Head Office, Bangalore Branch"\r
                  [class.is-invalid]="loc.get('locationName')?.invalid && loc.get('locationName')?.touched"/>\r
              </div>\r
              <div class="col-md-6 mb-3">\r
                <label class="form-label">Location Type <span class="text-danger">*</span></label>\r
                <select class="form-control" formControlName="locationType"\r
                  [class.is-invalid]="loc.get('locationType')?.invalid && loc.get('locationType')?.touched"\r
                  (change)="onLocationTypeChange($event, i)">\r
                  <option value="">Select Type</option>\r
                  <option *ngFor="let type of locationTypes" [value]="type">{{ type }}</option>\r
                </select>\r
              </div>\r
              <div class="col-md-6 mb-3" *ngIf="loc.get('locationType')?.value === 'Others'">\r
                <label class="form-label">Specify Location Type <span class="text-danger">*</span></label>\r
                <input type="text" class="form-control" formControlName="otherLocationType"\r
                  placeholder="e.g., Distribution Center, Retail Shop"\r
                  [class.is-invalid]="loc.get('otherLocationType')?.invalid && loc.get('otherLocationType')?.touched"/>\r
              </div>\r
            </div>\r
\r
            <div class="section-header mb-3">Location Contact Person</div>\r
            <div class="row">\r
              <div class="col-md-6 mb-3">\r
                <label class="form-label">Contact Name <span class="text-danger">*</span></label>\r
                <input type="text" class="form-control" formControlName="locationContactName" placeholder="Full name"\r
                  [class.is-invalid]="loc.get('locationContactName')?.invalid && loc.get('locationContactName')?.touched"/>\r
              </div>\r
              <div class="col-md-6 mb-3">\r
                <label class="form-label">Email <span class="text-danger">*</span></label>\r
                <input type="email" class="form-control" formControlName="locationContactEmail" placeholder="email@company.com"\r
                  [class.is-invalid]="loc.get('locationContactEmail')?.invalid && loc.get('locationContactEmail')?.touched"/>\r
              </div>\r
              <div class="col-md-6 mb-3">\r
                <label class="form-label">Phone <span class="text-danger">*</span></label>\r
                <input type="tel" class="form-control" formControlName="locationContactPhone"\r
                  placeholder="10 digit number" maxlength="10"\r
                  [class.is-invalid]="loc.get('locationContactPhone')?.invalid && loc.get('locationContactPhone')?.touched"/>\r
              </div>\r
              <div class="col-md-6 mb-3">\r
                <label class="form-label">Landline Number</label>\r
                <input type="tel" class="form-control" formControlName="landlineNumber" placeholder="Optional"/>\r
              </div>\r
            </div>\r
\r
            <div class="section-header mb-3">Location Address</div>\r
            <div class="row">\r
              <div class="col-12 mb-3">\r
                <label class="form-label">Address Line 1 <span class="text-danger">*</span></label>\r
                <input type="text" class="form-control" formControlName="addressLine1" placeholder="Street address"\r
                  [class.is-invalid]="loc.get('addressLine1')?.invalid && loc.get('addressLine1')?.touched"/>\r
              </div>\r
              <div class="col-12 mb-3">\r
                <label class="form-label">Address Line 2</label>\r
                <input type="text" class="form-control" formControlName="addressLine2" placeholder="Building name, Floor, etc."/>\r
              </div>\r
\r
              <!-- COUNTRY -->\r
              <div class="col-md-6 mb-3">\r
                <label class="form-label">Country <span class="text-danger">*</span></label>\r
                <select class="form-control" formControlName="country"\r
                  [class.is-invalid]="loc.get('country')?.invalid && loc.get('country')?.touched"\r
                  (change)="onLocationCountryChange($event, i)">\r
                  <option value="">Select Country</option>\r
                  <option *ngFor="let c of allCountries" [value]="c">{{ c }}</option>\r
                </select>\r
              </div>\r
\r
              <!-- STATE -->\r
              <div class="col-md-6 mb-3">\r
                <label class="form-label">State / Province <span class="text-danger">*</span></label>\r
                <select class="form-control" formControlName="state"\r
                  [class.is-invalid]="loc.get('state')?.invalid && loc.get('state')?.touched"\r
                  (change)="onLocationStateChange($event, i)">\r
                  <option value="">{{ loc.get('country')?.value ? 'Select State' : 'Select Country first' }}</option>\r
                  <option *ngFor="let s of getStatesForLocation(i)" [value]="s">{{ s }}</option>\r
                </select>\r
              </div>\r
\r
              <!-- \u2705 CITY \u2014 dropdown with Others -->\r
              <div class="col-md-6 mb-3">\r
                <label class="form-label">City <span class="text-danger">*</span></label>\r
                <select class="form-control" formControlName="city"\r
                  [class.is-invalid]="loc.get('city')?.invalid && loc.get('city')?.touched"\r
                  (change)="onLocationCityChange($event, i)">\r
                  <option value="">{{ loc.get('state')?.value ? 'Select City' : 'Select State first' }}</option>\r
                  <option *ngFor="let c of getCitiesForLocation(i)" [value]="c">{{ c }}</option>\r
                  <option value="__others__" *ngIf="getCitiesForLocation(i).length > 0">\u2014 Others (type your city) \u2014</option>\r
                </select>\r
              </div>\r
\r
              <!-- \u2705 OTHERS CITY INPUT for location -->\r
              <div class="col-md-6 mb-3" *ngIf="isLocationCityOthers(i)">\r
                <label class="form-label">\r
                  Specify City <span class="text-danger">*</span>\r
                  <small class="text-muted ms-1">\u2014 enter postal code manually</small>\r
                </label>\r
                <input type="text" class="form-control" formControlName="otherCity"\r
                  placeholder="Enter your city name"\r
                  [class.is-invalid]="loc.get('otherCity')?.invalid && loc.get('otherCity')?.touched"/>\r
              </div>\r
\r
              <!-- \u2705 POSTAL CODE -->\r
              <div class="col-md-6 mb-3">\r
                <label class="form-label">\r
                  Postal Code <span class="text-danger">*</span>\r
                  <small class="text-muted ms-1">\r
                    {{ isLocationCityOthers(i) ? '(enter manually)' : '(auto-filled, editable)' }}\r
                  </small>\r
                </label>\r
                <input type="text" class="form-control" formControlName="postalCode"\r
                  placeholder="Postal / ZIP code" maxlength="10"\r
                  [class.is-invalid]="loc.get('postalCode')?.invalid && loc.get('postalCode')?.touched"/>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <button type="button" class="btn btn-primary btn-lg w-100 mt-3" (click)="addLocation()">\r
          <i class="bi bi-plus-circle"></i> Add Another Location\r
        </button>\r
      </div>\r
    </div>\r
\r
    <!-- ========== STEP 3: CATEGORIES ========== -->\r
    <div *ngIf="currentStep === 3" class="step-content fade-in">\r
      <div class="step-title mb-4">\r
        <h4>Add Product Categories</h4>\r
        <p class="text-muted">Add categories and assign them to locations</p>\r
      </div>\r
\r
      <div formArrayName="departments">\r
        <div *ngFor="let dept of departments.controls; let i = index" [formGroupName]="i" class="card mb-4">\r
          <div class="card-header bg-light d-flex justify-content-between align-items-center">\r
            <h6 class="mb-0">Category {{ i + 1 }}</h6>\r
            <button type="button" class="btn btn-sm btn-outline-danger"\r
              (click)="removeDepartment(i)" *ngIf="departments.length > 1">\r
              <i class="bi bi-trash"></i> Remove\r
            </button>\r
          </div>\r
          <div class="card-body">\r
            <div class="row">\r
              <div class="col-12 mb-3">\r
                <label class="form-label">Select Location <span class="text-danger">*</span></label>\r
                <select class="form-control" formControlName="locationIndex"\r
                  [class.is-invalid]="dept.get('locationIndex')?.invalid && dept.get('locationIndex')?.touched">\r
                  <option value="">Choose a location</option>\r
                  <option *ngFor="let loc of locations.controls; let idx = index" [value]="idx">\r
                    {{ loc.get('locationName')?.value || 'Location ' + (idx + 1) }}\r
                  </option>\r
                </select>\r
              </div>\r
              <div class="col-md-6 mb-3">\r
                <label class="form-label">Category Name <span class="text-danger">*</span></label>\r
                <input type="text" class="form-control" formControlName="departmentName"\r
                  placeholder="e.g., Hardware Supply, Software Services"\r
                  [class.is-invalid]="dept.get('departmentName')?.invalid && dept.get('departmentName')?.touched"/>\r
              </div>\r
              <div class="col-md-6 mb-3">\r
                <label class="form-label">Category Type</label>\r
                <select class="form-control" formControlName="categoryOfProducts"\r
                  (change)="onCategoryTypeChange($event, i)">\r
                  <option value="">Select Type</option>\r
                  <option *ngFor="let category of categoryOfProducts" [value]="category">{{ category }}</option>\r
                </select>\r
              </div>\r
              <div class="col-md-6 mb-3" *ngIf="dept.get('categoryOfProducts')?.value === 'Others'">\r
                <label class="form-label">Specify Category Type <span class="text-danger">*</span></label>\r
                <input type="text" class="form-control" formControlName="otherCategoryType"\r
                  placeholder="e.g., Specialized Machinery"\r
                  [class.is-invalid]="dept.get('otherCategoryType')?.invalid && dept.get('otherCategoryType')?.touched"/>\r
              </div>\r
              <div class="col-12 mb-3">\r
                <label class="form-label">Description</label>\r
                <textarea class="form-control" formControlName="departmentDescription"\r
                  placeholder="Brief description" rows="2"></textarea>\r
              </div>\r
\r
              <!-- Registration questionnaire \u2014 standards-compliance questions for this category -->\r
              <div class="col-12" *ngIf="departmentQuestionnaires[i]?.length > 0">\r
                <div class="p-3 border rounded" style="background:#f8f9fa;">\r
                  <label class="form-label fw-bold small mb-2">\r
                    <i class="bi bi-clipboard-check me-1"></i>\r
                    Standards Questionnaire for {{ dept.get('categoryOfProducts')?.value }}\r
                  </label>\r
                  <div *ngFor="let q of departmentQuestionnaires[i]" class="py-2 border-bottom">\r
                    <div class="d-flex align-items-center justify-content-between">\r
                      <span class="small">{{ q.questionText }}</span>\r
                      <div class="btn-group btn-group-sm" role="group">\r
                        <button type="button" class="btn"\r
                          [class.btn-success]="getQuestionnaireAnswer(i, q.id) === true"\r
                          [class.btn-outline-secondary]="getQuestionnaireAnswer(i, q.id) !== true"\r
                          (click)="setQuestionnaireAnswer(i, q.id, true)">Yes</button>\r
                        <button type="button" class="btn"\r
                          [class.btn-danger]="getQuestionnaireAnswer(i, q.id) === false"\r
                          [class.btn-outline-secondary]="getQuestionnaireAnswer(i, q.id) !== false"\r
                          (click)="setQuestionnaireAnswer(i, q.id, false)">No</button>\r
                      </div>\r
                    </div>\r
                    <input type="text" class="form-control form-control-sm mt-2"\r
                      placeholder="Remarks (optional) \u2014 explain your answer"\r
                      [ngModel]="getQuestionnaireRemarks(i, q.id)"\r
                      [ngModelOptions]="{standalone: true}"\r
                      (ngModelChange)="setQuestionnaireRemarks(i, q.id, $event)"/>\r
                  </div>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <button type="button" class="btn btn-primary btn-lg w-100 mt-3" (click)="addDepartment()">\r
          <i class="bi bi-plus-circle"></i> Add Category\r
        </button>\r
      </div>\r
    </div>\r
\r
    <!-- ========== STEP 4: CONTACTS ========== -->\r
    <div *ngIf="currentStep === 4" class="step-content fade-in">\r
      <div class="step-title mb-4">\r
        <h4>Add Supplier Contacts</h4>\r
        <p class="text-muted">Add contact persons and assign them to categories</p>\r
      </div>\r
\r
      <div formArrayName="users">\r
        <div *ngFor="let user of users.controls; let i = index" [formGroupName]="i" class="card mb-4">\r
          <div class="card-header bg-light d-flex justify-content-between align-items-center">\r
            <h6 class="mb-0">Contact {{ i + 1 }}</h6>\r
            <button type="button" class="btn btn-sm btn-outline-danger"\r
              (click)="removeUser(i)" *ngIf="users.length > 1">\r
              <i class="bi bi-trash"></i> Remove\r
            </button>\r
          </div>\r
          <div class="card-body">\r
            <div class="section-header mb-3">Category Assignment</div>\r
            <div class="row">\r
              <div class="col-12 mb-3">\r
                <label class="form-label">Select Category <span class="text-danger">*</span></label>\r
                <select class="form-control" formControlName="departmentIndex"\r
                  [class.is-invalid]="user.get('departmentIndex')?.invalid && user.get('departmentIndex')?.touched">\r
                  <option value="">Choose a category</option>\r
                  <option *ngFor="let dept of departments.controls; let idx = index" [value]="idx">\r
                    {{ dept.get('departmentName')?.value || 'Category ' + (idx + 1) }}\r
                    <ng-container *ngIf="getLocationNameForDepartment(idx)">\r
                      - {{ getLocationNameForDepartment(idx) }}\r
                    </ng-container>\r
                  </option>\r
                </select>\r
              </div>\r
            </div>\r
\r
            <div class="section-header mb-3">Personal Information</div>\r
            <div class="row">\r
              <div class="col-md-6 mb-3">\r
                <label class="form-label">First Name <span class="text-danger">*</span></label>\r
                <input type="text" class="form-control" formControlName="firstName" placeholder="First name"\r
                  [class.is-invalid]="user.get('firstName')?.invalid && user.get('firstName')?.touched"/>\r
              </div>\r
              <div class="col-md-6 mb-3">\r
                <label class="form-label">Last Name <span class="text-danger">*</span></label>\r
                <input type="text" class="form-control" formControlName="lastName" placeholder="Last name"\r
                  [class.is-invalid]="user.get('lastName')?.invalid && user.get('lastName')?.touched"/>\r
              </div>\r
              <div class="col-md-6 mb-3">\r
                <label class="form-label">Gender</label>\r
                <select class="form-control" formControlName="gender">\r
                  <option value="">Select</option>\r
                  <option value="M">Male</option>\r
                  <option value="F">Female</option>\r
                  <option value="Other">Other</option>\r
                </select>\r
              </div>\r
              <div class="col-md-6 mb-3">\r
                <label class="form-label">Date of Birth</label>\r
                <input type="date" class="form-control" formControlName="dateOfBirth"/>\r
              </div>\r
            </div>\r
\r
            <div class="section-header mb-3">Contact & Employment</div>\r
            <div class="row">\r
              <div class="col-md-6 mb-3">\r
                <label class="form-label">Email <span class="text-danger">*</span></label>\r
                <input type="email" class="form-control" formControlName="email" placeholder="contact@supplier.com"\r
                  [class.is-invalid]="user.get('email')?.invalid && user.get('email')?.touched"/>\r
              </div>\r
              <div class="col-md-6 mb-3">\r
                <label class="form-label">Phone <span class="text-danger">*</span></label>\r
                <input type="tel" class="form-control" formControlName="phone"\r
                  placeholder="10 digit number" maxlength="10"\r
                  [class.is-invalid]="user.get('phone')?.invalid && user.get('phone')?.touched"/>\r
              </div>\r
              <div class="col-md-6 mb-3">\r
                <label class="form-label">Designation <span class="text-danger">*</span></label>\r
                <input type="text" class="form-control" formControlName="designation" placeholder="Job title"\r
                  [class.is-invalid]="user.get('designation')?.invalid && user.get('designation')?.touched"/>\r
              </div>\r
              <div class="col-md-6 mb-3">\r
                <label class="form-label">Employee ID <span class="text-danger">*</span></label>\r
                <input type="text" class="form-control" formControlName="employeeId" placeholder="e.g., SUP001"\r
                  [class.is-invalid]="user.get('employeeId')?.invalid && user.get('employeeId')?.touched"/>\r
              </div>\r
            </div>\r
\r
            <!-- Residential address for supplier contacts stays as plain text (optional) -->\r
            <div class="section-header mb-3">Residential Address (Optional)</div>\r
            <div class="row">\r
              <div class="col-12 mb-3">\r
                <label class="form-label">Address Line 1</label>\r
                <input type="text" class="form-control" formControlName="addressLine1" placeholder="Street address"/>\r
              </div>\r
              <div class="col-12 mb-3">\r
                <label class="form-label">Address Line 2</label>\r
                <input type="text" class="form-control" formControlName="addressLine2" placeholder="Apt, Suite, etc."/>\r
              </div>\r
              <div class="col-md-6 mb-3">\r
                <label class="form-label">City</label>\r
                <input type="text" class="form-control" formControlName="city" placeholder="City"/>\r
              </div>\r
              <div class="col-md-6 mb-3">\r
                <label class="form-label">State</label>\r
                <input type="text" class="form-control" formControlName="state" placeholder="State / Province"/>\r
              </div>\r
              <div class="col-md-6 mb-3">\r
                <label class="form-label">Postal Code</label>\r
                <input type="text" class="form-control" formControlName="postalCode"\r
                  placeholder="Postal code" maxlength="10"/>\r
              </div>\r
            </div>\r
\r
            <div class="section-header mb-3">Security</div>\r
            <div class="row">\r
              <div class="col-12 mb-3">\r
                <label class="form-label">Password <span class="text-danger">*</span></label>\r
                <input type="password" class="form-control" formControlName="password" placeholder="Strong password"\r
                  [class.is-invalid]="user.get('password')?.invalid && user.get('password')?.touched"/>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <button type="button" class="btn btn-success btn-lg w-100 mt-3" (click)="addUser()">\r
          <i class="bi bi-person-plus"></i> Add Contact\r
        </button>\r
      </div>\r
    </div>\r
\r
    <!-- NAVIGATION -->\r
    <div class="step-navigation mt-5 pt-4 border-top">\r
      <div class="d-flex gap-3 justify-content-between align-items-center">\r
        <button type="button" class="btn btn-outline-secondary btn-lg"\r
          (click)="prevStep()" [disabled]="currentStep === 1">\r
          <i class="bi bi-chevron-left"></i> Previous\r
        </button>\r
        <span class="text-muted">Step {{ currentStep }} of {{ maxStep }}</span>\r
        <div class="d-flex gap-2">\r
          <button type="button" class="btn btn-success btn-lg"\r
            (click)="saveStep()" *ngIf="currentStep < maxStep">\r
            <i class="bi bi-floppy"></i> Save & Next\r
          </button>\r
          <button type="button" class="btn btn-success btn-lg px-5"\r
            (click)="onSubmit()"\r
            [disabled]="isSubmitting || supplierForm.invalid"\r
            *ngIf="currentStep === maxStep">\r
            <i class="bi bi-check-circle"></i>\r
            {{ mode === 'create' ? 'Create Supplier' : 'Update Supplier' }}\r
          </button>\r
        </div>\r
      </div>\r
    </div>\r
\r
  </form>\r
</div>`, styles: ['/* src/app/views/base/create-s/create-s.component.css */\n.logo-upload-container {\n  border: 2px dashed #dee2e6;\n  border-radius: 8px;\n  padding: 20px;\n  background-color: #f8f9fa;\n  transition: all 0.3s ease;\n}\n.logo-upload-container:hover {\n  border-color: #0d6efd;\n  background-color: #e7f1ff;\n}\n.logo-preview-section {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-bottom: 20px;\n}\n.logo-preview-wrapper {\n  position: relative;\n  display: inline-block;\n  max-width: 300px;\n  max-height: 200px;\n}\n.logo-preview-image {\n  width: 100%;\n  height: auto;\n  max-height: 200px;\n  border-radius: 8px;\n  border: 2px solid #dee2e6;\n  object-fit: contain;\n  background-color: white;\n  padding: 10px;\n}\n.logo-remove-btn {\n  position: absolute;\n  top: -10px;\n  right: -10px;\n  border-radius: 50%;\n  width: 32px;\n  height: 32px;\n  padding: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n}\n.logo-remove-btn:hover {\n  transform: scale(1.1);\n}\n.logo-upload-section {\n  width: 100%;\n}\n.logo-upload-section.has-logo {\n  margin-top: 10px;\n}\n.custom-file-upload {\n  position: relative;\n  width: 100%;\n}\n.file-input {\n  position: absolute;\n  width: 0.1px;\n  height: 0.1px;\n  opacity: 0;\n  overflow: hidden;\n  z-index: -1;\n}\n.file-upload-label {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 30px;\n  border: 2px dashed #0d6efd;\n  border-radius: 8px;\n  background-color: white;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  min-height: 150px;\n}\n.file-upload-label:hover {\n  border-color: #0b5ed7;\n  background-color: #f0f8ff;\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(13, 110, 253, 0.15);\n}\n.upload-icon {\n  font-size: 48px;\n  color: #0d6efd;\n  margin-bottom: 15px;\n}\n.upload-text {\n  font-size: 16px;\n  color: #212529;\n  margin-bottom: 8px;\n}\n.upload-text strong {\n  color: #0d6efd;\n}\n.upload-hint {\n  font-size: 14px;\n  color: #6c757d;\n}\n.selected-file-info {\n  margin-top: 15px;\n  padding: 12px;\n  background-color: white;\n  border: 1px solid #dee2e6;\n  border-radius: 6px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  color: #495057;\n}\n.selected-file-info i {\n  font-size: 24px;\n  color: #0d6efd;\n}\n.file-size {\n  color: #6c757d;\n  font-size: 0.9em;\n  margin-left: auto;\n}\n@media (max-width: 768px) {\n  .logo-preview-wrapper {\n    max-width: 100%;\n  }\n  .logo-preview-image {\n    max-height: 150px;\n  }\n  .file-upload-label {\n    padding: 20px;\n    min-height: 120px;\n  }\n  .upload-icon {\n    font-size: 36px;\n  }\n}\n@keyframes fadeInScale {\n  from {\n    opacity: 0;\n    transform: scale(0.9);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n.logo-preview-wrapper {\n  animation: fadeInScale 0.3s ease;\n}\n.professional-header {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  border-radius: 16px;\n  padding: 2rem;\n  margin-bottom: 2rem;\n  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);\n  color: white;\n}\n.header-content {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 2rem;\n  flex-wrap: wrap;\n}\n.header-left {\n  display: flex;\n  align-items: center;\n  gap: 1.5rem;\n}\n.header-avatar {\n  width: 80px;\n  height: 80px;\n  min-width: 80px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.25);\n  border: 3px solid rgba(255, 255, 255, 0.4);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 2rem;\n  font-weight: 700;\n  color: white;\n  text-transform: uppercase;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);\n}\n.header-user-info {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.header-user-name {\n  font-size: 1.75rem;\n  font-weight: 700;\n  color: white;\n  margin: 0;\n  line-height: 1.2;\n}\n.header-user-role {\n  font-size: 0.95rem;\n  color: rgba(255, 255, 255, 0.9);\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin: 0;\n}\n.header-user-role i {\n  font-size: 1rem;\n}\n.header-info-cards {\n  display: flex;\n  gap: 1rem;\n  flex-wrap: wrap;\n}\n.header-info-card {\n  background: rgba(255, 255, 255, 0.15);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  border-radius: 12px;\n  padding: 1rem 1.25rem;\n  min-width: 200px;\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  transition: all 0.3s ease;\n  border: 1px solid rgba(255, 255, 255, 0.2);\n}\n.header-info-card:hover {\n  background: rgba(255, 255, 255, 0.2);\n  transform: translateY(-2px);\n}\n.header-info-icon {\n  width: 48px;\n  height: 48px;\n  min-width: 48px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.25);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.5rem;\n  color: white;\n}\n.header-info-text {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.header-info-label {\n  font-size: 0.7rem;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  color: rgba(255, 255, 255, 0.85);\n  font-weight: 600;\n}\n.header-info-value {\n  font-size: 0.95rem;\n  font-weight: 600;\n  color: white;\n  word-break: break-word;\n}\n.form-header {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  border-radius: 16px;\n  padding: 2rem;\n  margin-bottom: 2rem;\n  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);\n  color: white;\n  text-align: center;\n}\n.form-header-title {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 1rem;\n  margin-bottom: 0.75rem;\n}\n.form-header-icon {\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.25);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.75rem;\n  color: white;\n}\n.form-header h2 {\n  font-size: 2rem;\n  font-weight: 700;\n  color: white;\n  margin: 0;\n}\n.form-header-subtitle {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 1.5rem;\n  font-size: 0.95rem;\n  color: rgba(255, 255, 255, 0.9);\n  margin: 0;\n  flex-wrap: wrap;\n}\n.form-header-subtitle i {\n  margin-right: 0.5rem;\n}\n@media (max-width: 992px) {\n  .header-content {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .header-info-cards {\n    width: 100%;\n  }\n  .header-info-card {\n    flex: 1;\n    min-width: 180px;\n  }\n}\n@media (max-width: 768px) {\n  .professional-header {\n    padding: 1.5rem;\n  }\n  .header-avatar {\n    width: 60px;\n    height: 60px;\n    min-width: 60px;\n    font-size: 1.5rem;\n  }\n  .header-user-name {\n    font-size: 1.5rem;\n  }\n  .header-info-cards {\n    flex-direction: column;\n  }\n  .header-info-card {\n    width: 100%;\n  }\n  .form-header {\n    padding: 1.5rem;\n  }\n  .form-header h2 {\n    font-size: 1.5rem;\n  }\n  .form-header-icon {\n    width: 50px;\n    height: 50px;\n    font-size: 1.5rem;\n  }\n  .form-header-subtitle {\n    flex-direction: column;\n    gap: 0.5rem;\n  }\n}\n.wizard-container {\n  max-width: 1120px;\n  margin: 0 auto;\n  padding: 10px 20px;\n  font-family:\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    "Helvetica Neue",\n    Arial,\n    sans-serif;\n}\n.step-indicator {\n  display: flex;\n  justify-content: space-between;\n  position: relative;\n  padding: 0 0 5px 0;\n}\n.step-indicator::before {\n  content: "";\n  position: absolute;\n  top: 20px;\n  left: 0;\n  right: 0;\n  height: 2px;\n  background: #e9ecef;\n  z-index: -1;\n}\n.step-item {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  position: relative;\n}\n.step-number {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background: #f8f9fa;\n  border: 2px solid #dee2e6;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 600;\n  color: #6c757d;\n  margin-bottom: 10px;\n  transition: all 0.3s ease;\n}\n.step-label {\n  font-size: 14px;\n  color: #6c757d;\n  text-align: center;\n  font-weight: 500;\n  transition: all 0.3s ease;\n}\n.step-item.active .step-number {\n  background: #0d6efd;\n  border-color: #0d6efd;\n  color: white;\n  box-shadow: 0 0 0 3px rgba(13, 110, 253, 0.15);\n}\n.step-item.active .step-label {\n  color: #0d6efd;\n  font-weight: 600;\n}\n.step-item.completed .step-number {\n  background: #198754;\n  border-color: #198754;\n  color: white;\n}\n.step-item.completed .step-number::after {\n  content: "\\2713";\n  font-weight: bold;\n}\n.step-item.completed .step-label {\n  color: #198754;\n}\n.step-content {\n  animation: fadeIn 0.3s ease-in;\n  padding: 0;\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.fade-in {\n  animation: fadeIn 0.3s ease-in;\n}\n.step-title h4 {\n  font-size: 24px;\n  font-weight: 600;\n  color: #212529;\n  margin-bottom: 5px;\n}\n.step-title p {\n  font-size: 14px;\n  margin: 0;\n}\n.form-label {\n  font-weight: 500;\n  color: #212529;\n  margin-bottom: 8px;\n  display: block;\n}\n.required {\n  color: #dc3545;\n  margin-left: 2px;\n}\n.form-control,\n.form-control-lg {\n  border: 1px solid #dee2e6;\n  border-radius: 6px;\n  padding: 10px 12px;\n  font-size: 14px;\n  transition: all 0.2s ease;\n}\n.form-control-lg {\n  padding: 12px 16px;\n  font-size: 16px;\n}\n.form-control:focus,\n.form-control-lg:focus {\n  border-color: #0d6efd;\n  box-shadow: 0 0 0 3px rgba(13, 110, 253, 0.1);\n  outline: none;\n}\n.form-control.is-invalid {\n  border-color: #dc3545;\n}\n.form-control.is-invalid:focus {\n  box-shadow: 0 0 0 3px rgba(220, 53, 69, 0.1);\n}\n.invalid-feedback {\n  display: block;\n  color: #dc3545;\n  font-size: 12px;\n  margin-top: 5px;\n}\n.locations-container {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.card {\n  border: 1px solid #dee2e6;\n  border-radius: 8px;\n  overflow: hidden;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);\n  transition: all 0.2s ease;\n}\n.card:hover {\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.card-header {\n  padding: 12px 16px;\n  background-color: #f8f9fa;\n  border-bottom: 1px solid #dee2e6;\n}\n.card-header h6 {\n  font-size: 14px;\n  font-weight: 600;\n  color: #212529;\n  margin: 0;\n}\n.card-body {\n  padding: 16px;\n}\n.btn {\n  border-radius: 6px;\n  font-weight: 500;\n  transition: all 0.2s ease;\n  cursor: pointer;\n  border: none;\n}\n.btn-primary {\n  background-color: #0d6efd;\n  color: white;\n}\n.btn-primary:hover:not(:disabled) {\n  background-color: #0b5ed7;\n  transform: translateY(-1px);\n  box-shadow: 0 4px 8px rgba(13, 110, 253, 0.3);\n}\n.btn-primary:disabled {\n  background-color: #b8c6db;\n  cursor: not-allowed;\n}\n.btn-outline-primary {\n  color: #0d6efd;\n  border: 1px solid #0d6efd;\n  background-color: white;\n}\n.btn-outline-primary:hover:not(:disabled) {\n  background-color: #0d6efd;\n  color: white;\n}\n.btn-outline-success {\n  color: #198754;\n  border: 1px solid #198754;\n  background-color: white;\n}\n.btn-outline-success:hover:not(:disabled) {\n  background-color: #198754;\n  color: white;\n}\n.btn-outline-danger {\n  color: #dc3545;\n  border: 1px solid #dc3545;\n  background-color: white;\n}\n.btn-outline-danger:hover:not(:disabled) {\n  background-color: #dc3545;\n  color: white;\n}\n.btn-outline-secondary {\n  color: #6c757d;\n  border: 1px solid #6c757d;\n  background-color: white;\n}\n.btn-outline-secondary:hover:not(:disabled) {\n  background-color: #6c757d;\n  color: white;\n}\n.btn-success {\n  background-color: #198754;\n  color: white;\n}\n.btn-success:hover:not(:disabled) {\n  background-color: #157347;\n  transform: translateY(-1px);\n  box-shadow: 0 4px 8px rgba(25, 135, 84, 0.3);\n}\n.btn-success:disabled {\n  background-color: #b8d8be;\n  cursor: not-allowed;\n}\n.btn-lg {\n  padding: 12px 24px;\n  font-size: 16px;\n}\n.btn-sm {\n  padding: 6px 12px;\n  font-size: 12px;\n}\n.btn:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.w-100 {\n  width: 100%;\n}\n.px-5 {\n  padding-left: 48px;\n  padding-right: 48px;\n}\n.location-section,\n.dept-section {\n  margin-bottom: 24px;\n}\n.location-header h5,\n.dept-section h6 {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin: 0;\n  font-size: 16px;\n}\n.dept-section h6 {\n  color: #0d6efd;\n}\n.users-container,\n.departments-container {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  margin-bottom: 12px;\n}\n.alert {\n  padding: 12px 16px;\n  border-radius: 6px;\n  margin: 0;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 14px;\n}\n.alert-info {\n  background-color: #cfe2ff;\n  color: #084298;\n  border: 1px solid #b6d4fe;\n}\n.step-navigation {\n  margin-top: 40px;\n  padding-top: 24px;\n}\n.d-flex {\n  display: flex;\n}\n.gap-3 {\n  gap: 24px;\n}\n.justify-content-between {\n  justify-content: space-between;\n}\n.justify-content-center {\n  justify-content: center;\n}\n.align-items-center {\n  align-items: center;\n}\n.step-indicator-text {\n  display: flex;\n  align-items: center;\n  font-size: 14px;\n}\n.text-muted {\n  color: #6c757d;\n}\n.text-primary {\n  color: #0d6efd;\n}\n.mb-0 {\n  margin-bottom: 0;\n}\n.mb-2 {\n  margin-bottom: 8px;\n}\n.mb-3 {\n  margin-bottom: 16px;\n}\n.mb-4 {\n  margin-bottom: 24px;\n}\n.mb-5 {\n  margin-bottom: 32px;\n}\n.mt-3 {\n  margin-top: 16px;\n}\n.mt-4 {\n  margin-top: 24px;\n}\n.mt-5 {\n  margin-top: 32px;\n}\n.ms-3 {\n  margin-left: 16px;\n}\n.pt-4 {\n  padding-top: 24px;\n}\n.bg-light {\n  background-color: #f8f9fa;\n}\n.border-top {\n  border-top: 1px solid #dee2e6;\n}\n@media (max-width: 768px) {\n  .wizard-container {\n    padding: 20px 10px;\n  }\n  .step-indicator {\n    padding-bottom: 20px;\n  }\n  .step-indicator::before {\n    top: 15px;\n  }\n  .step-number {\n    width: 36px;\n    height: 36px;\n    font-size: 14px;\n  }\n  .step-label {\n    font-size: 12px;\n  }\n  .step-title h4 {\n    font-size: 20px;\n  }\n  .d-flex {\n    flex-direction: column;\n  }\n  .gap-3 {\n    gap: 12px;\n  }\n  .row {\n    margin: 0;\n  }\n  .col-md-6 {\n    flex: 0 0 100%;\n    padding: 0;\n  }\n  .step-navigation {\n    margin-top: 24px;\n  }\n  .btn-lg {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=create-s.component.css.map */\n'] }]
  }], () => [{ type: FormBuilder }, { type: SupplierService }, { type: MessageService }, { type: Router }, { type: ActivatedRoute }, { type: HttpClient }, { type: DataService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CreateSComponent, { className: "CreateSComponent", filePath: "src/app/views/base/create-s/create-s.component.ts", lineNumber: 772 });
})();
export {
  CreateSComponent
};
//# sourceMappingURL=chunk-BDOTOLXW.js.map
