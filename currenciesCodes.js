  const countryList = {
  AED: "AE",
  AFN: "AF",
  XCD: "AG",
  ALL: "AL",
  AMD: "AM",
  ANG: "AN",
  AOA: "AO",
  AQD: "AQ",
  ARS: "AR",
  AUD: "AU",
  AZN: "AZ",
  BAM: "BA",
  BBD: "BB",
  BDT: "BD",
  XOF: "BE",
  BGN: "BG",
  BHD: "BH",
  BIF: "BI",
  BMD: "BM",
  BND: "BN",
  BOB: "BO",
  BRL: "BR",
  BSD: "BS",
  NOK: "BV",
  BWP: "BW",
  BYR: "BY",
  BZD: "BZ",
  CAD: "CA",
  CDF: "CD",
  XAF: "CF",
  CHF: "CH",
  CLP: "CL",
  CNY: "CN",
  COP: "CO",
  CRC: "CR",
  CUP: "CU",
  CVE: "CV",
  CYP: "CY",
  CZK: "CZ",
  DJF: "DJ",
  DKK: "DK",
  DOP: "DO",
  DZD: "DZ",
  ECS: "EC",
  EEK: "EE",
  EGP: "EG",
  ETB: "ET",
  EUR: "FR",
  FJD: "FJ",
  FKP: "FK",
  GBP: "GB",
  GEL: "GE",
  GGP: "GG",
  GHS: "GH",
  GIP: "GI",
  GMD: "GM",
  GNF: "GN",
  GTQ: "GT",
  GYD: "GY",
  HKD: "HK",
  HNL: "HN",
  HRK: "HR",
  HTG: "HT",
  HUF: "HU",
  IDR: "ID",
  ILS: "IL",
  INR: "IN",
  IQD: "IQ",
  IRR: "IR",
  ISK: "IS",
  JMD: "JM",
  JOD: "JO",
  JPY: "JP",
  KES: "KE",
  KGS: "KG",
  KHR: "KH",
  KMF: "KM",
  KPW: "KP",
  KRW: "KR",
  KWD: "KW",
  KYD: "KY",
  KZT: "KZ",
  LAK: "LA",
  LBP: "LB",
  LKR: "LK",
  LRD: "LR",
  LSL: "LS",
  LTL: "LT",
  LVL: "LV",
  LYD: "LY",
  MAD: "MA",
  MDL: "MD",
  MGA: "MG",
  MKD: "MK",
  MMK: "MM",
  MNT: "MN",
  MOP: "MO",
  MRO: "MR",
  MTL: "MT",
  MUR: "MU",
  MVR: "MV",
  MWK: "MW",
  MXN: "MX",
  MYR: "MY",
  MZN: "MZ",
  NAD: "NA",
  XPF: "NC",
  NGN: "NG",
  NIO: "NI",
  NPR: "NP",
  NZD: "NZ",
  OMR: "OM",
  PAB: "PA",
  PEN: "PE",
  PGK: "PG",
  PHP: "PH",
  PKR: "PK",
  PLN: "PL",
  PYG: "PY",
  QAR: "QA",
  RON: "RO",
  RSD: "RS",
  RUB: "RU",
  RWF: "RW",
  SAR: "SA",
  SBD: "SB",
  SCR: "SC",
  SDG: "SD",
  SEK: "SE",
  SGD: "SG",
  SKK: "SK",
  SLL: "SL",
  SOS: "SO",
  SRD: "SR",
  STD: "ST",
  SVC: "SV",
  SYP: "SY",
  SZL: "SZ",
  THB: "TH",
  TJS: "TJ",
  TMT: "TM",
  TND: "TN",
  TOP: "TO",
  TRY: "TR",
  TTD: "TT",
  TWD: "TW",
  TZS: "TZ",
  UAH: "UA",
  UGX: "UG",
  USD: "US",
  UYU: "UY",
  UZS: "UZ",
  VEF: "VE",
  VND: "VN",
  VUV: "VU",
  YER: "YE",
  ZAR: "ZA",
  ZMK: "ZM",
  ZWD: "ZW",
};

const currencySymbols = {
  AED: "د.إ", // United Arab Emirates Dirham
  AFN: "؋", // Afghan Afghani
  XCD: "$", // East Caribbean Dollar
  ALL: "L", // Albanian Lek
  AMD: "֏", // Armenian Dram
  ANG: "ƒ", // Netherlands Antillean Guilder
  AOA: "Kz", // Angolan Kwanza
  ARS: "$", // Argentine Peso
  AUD: "$", // Australian Dollar
  AZN: "₼", // Azerbaijani Manat
  BAM: "KM", // Bosnia-Herzegovina Convertible Mark
  BBD: "$", // Barbadian Dollar
  BDT: "৳", // Bangladeshi Taka
  XOF: "CFA", // West African CFA Franc
  BGN: "лв", // Bulgarian Lev
  BHD: ".د.ب", // Bahraini Dinar
  BIF: "FBu", // Burundian Franc
  BMD: "$", // Bermudian Dollar
  BND: "$", // Brunei Dollar
  BOB: "Bs.", // Bolivian Boliviano
  BRL: "R$", // Brazilian Real
  BSD: "$", // Bahamian Dollar
  CAD: "$", // Canadian Dollar
  CHF: "CHF", // Swiss Franc
  CLP: "$", // Chilean Peso
  CNY: "¥", // Chinese Yuan
  COP: "$", // Colombian Peso
  CRC: "₡", // Costa Rican Colón
  CUP: "₱", // Cuban Peso
  CZK: "Kč", // Czech Koruna
  DKK: "kr", // Danish Krone
  DOP: "RD$", // Dominican Peso
  DZD: "د.ج", // Algerian Dinar
  EGP: "£", // Egyptian Pound
  EUR: "€", // Euro
  FJD: "$", // Fijian Dollar
  GBP: "£", // British Pound Sterling
  GHS: "₵", // Ghanaian Cedi
  GIP: "£", // Gibraltar Pound
  HKD: "$", // Hong Kong Dollar
  HUF: "Ft", // Hungarian Forint
  IDR: "Rp", // Indonesian Rupiah
  ILS: "₪", // Israeli New Shekel
  INR: "₹", // Indian Rupee
  JPY: "¥", // Japanese Yen
  KES: "KSh", // Kenyan Shilling
  KRW: "₩", // South Korean Won
  KWD: "د.ك", // Kuwaiti Dinar
  LKR: "Rs", // Sri Lankan Rupee
  MAD: "د.م.", // Moroccan Dirham
  MXN: "$", // Mexican Peso
  MYR: "RM", // Malaysian Ringgit
  NGN: "₦", // Nigerian Naira
  NOK: "kr", // Norwegian Krone
  NZD: "$", // New Zealand Dollar
  PHP: "₱", // Philippine Peso
  PLN: "zł", // Polish Zloty
  QAR: "﷼", // Qatari Riyal
  RUB: "₽", // Russian Ruble
  SAR: "﷼", // Saudi Riyal
  SEK: "kr", // Swedish Krona
  SGD: "$", // Singapore Dollar
  THB: "฿", // Thai Baht
  TRY: "₺", // Turkish Lira
  USD: "$", // US Dollar
  ZAR: "R", // South African Rand
  VND: "₫", // Vietnamese Dong
};

const currencyNames = {
  AED: "United Arab Emirates Dirham",
  AFN: "Afghan Afghani",
  XCD: "East Caribbean Dollar",
  ALL: "Albanian Lek",
  AMD: "Armenian Dram",
  ANG: "Netherlands Antillean Guilder",
  AOA: "Angolan Kwanza",
  ARS: "Argentine Peso",
  AUD: "Australian Dollar",
  AZN: "Azerbaijani Manat",
  BAM: "Bosnia-Herzegovina Convertible Mark",
  BBD: "Barbadian Dollar",
  BDT: "Bangladeshi Taka",
  XOF: "West African CFA Franc",
  BGN: "Bulgarian Lev",
  BHD: "Bahraini Dinar",
  BIF: "Burundian Franc",
  BMD: "Bermudian Dollar",
  BND: "Brunei Dollar",
  BOB: "Bolivian Boliviano",
  BRL: "Brazilian Real",
  BSD: "Bahamian Dollar",
  CAD: "Canadian Dollar",
  CHF: "Swiss Franc",
  CLP: "Chilean Peso",
  CNY: "Chinese Yuan",
  COP: "Colombian Peso",
  CRC: "Costa Rican Colón",
  CUP: "Cuban Peso",
  CZK: "Czech Koruna",
  DKK: "Danish Krone",
  DOP: "Dominican Peso",
  DZD: "Algerian Dinar",
  EGP: "Egyptian Pound",
  EUR: "Euro",
  FJD: "Fijian Dollar",
  GBP: "British Pound Sterling",
  GHS: "Ghanaian Cedi",
  GIP: "Gibraltar Pound",
  HKD: "Hong Kong Dollar",
  HUF: "Hungarian Forint",
  IDR: "Indonesian Rupiah",
  ILS: "Israeli New Shekel",
  INR: "Indian Rupee",
  JPY: "Japanese Yen",
  KES: "Kenyan Shilling",
  KRW: "South Korean Won",
  KWD: "Kuwaiti Dinar",
  LKR: "Sri Lankan Rupee",
  MAD: "Moroccan Dirham",
  MXN: "Mexican Peso",
  MYR: "Malaysian Ringgit",
  NGN: "Nigerian Naira",
  NOK: "Norwegian Krone",
  NZD: "New Zealand Dollar",
  PHP: "Philippine Peso",
  PLN: "Polish Zloty",
  QAR: "Qatari Riyal",
  RUB: "Russian Ruble",
  SAR: "Saudi Riyal",
  SEK: "Swedish Krona",
  SGD: "Singapore Dollar",
  THB: "Thai Baht",
  TRY: "Turkish Lira",
  USD: "United States Dollar",
  ZAR: "South African Rand",
  VND: "Vietnamese Dong",
};
