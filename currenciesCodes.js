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

  // New Currencies Added
  AOA: "Kz", // Angolan Kwanza
  BOB: "Bs.", // Bolivian Boliviano
  BYN: "Br", // Belarusian Ruble
  DJF: "Fdj", // Djiboutian Franc
  ERN: "Nfk", // Eritrean Nakfa
  ETB: "Br", // Ethiopian Birr
  GMD: "D", // Gambian Dalasi
  GNF: "FG", // Guinean Franc
  GTQ: "Q", // Guatemalan Quetzal
  HNL: "L", // Honduran Lempira
  HRK: "kn", // Croatian Kuna
  ISK: "kr", // Icelandic Króna
  KZT: "₸", // Kazakhstani Tenge
  LAK: "₭", // Lao Kip
  LBP: "ل.ل", // Lebanese Pound
  LSL: "L", // Lesotho Loti
  MOP: "P", // Macanese Pataca
  MUR: "₨", // Mauritian Rupee
  MMK: "K", // Myanmar Kyat
  MNT: "₮", // Mongolian Tögrög
  MVR: "Rf", // Maldivian Rufiyaa
  MWK: "MK", // Malawian Kwacha
  NAD: "$", // Namibian Dollar
  PYG: "₲", // Paraguayan Guarani
  RSD: "din", // Serbian Dinar
  SLL: "Le", // Sierra Leonean Leone
  SRD: "$", // Surinamese Dollar
  SZL: "L", // Eswatini Lilangeni
  TZS: "Sh", // Tanzanian Shilling
  UGX: "Sh", // Ugandan Shilling
  UYU: "$U", // Uruguayan Peso
  UZS: "so'm", // Uzbekistani Som
  ZMW: "ZK", // Zambian Kwacha
};

const currencyNames = {
  AED: "United Arab Emirates Dirham",
  AFN: "Afghan Afghani",
  ALL: "Albanian Lek",
  AMD: "Armenian Dram",
  ANG: "Netherlands Antillean Guilder",
  AOA: "Angolan Kwanza",
  ARS: "Argentine Peso",
  AUD: "Australian Dollar",
  AWG: "Aruban Florin",
  AZN: "Azerbaijani Manat",
  BAM: "Bosnia-Herzegovina Convertible Mark",
  BBD: "Barbadian Dollar",
  BDT: "Bangladeshi Taka",
  BGN: "Bulgarian Lev",
  BHD: "Bahraini Dinar",
  BIF: "Burundian Franc",
  BMD: "Bermudian Dollar",
  BND: "Brunei Dollar",
  BOB: "Bolivian Boliviano",
  BRL: "Brazilian Real",
  BSD: "Bahamian Dollar",
  BTN: "Bhutanese Ngultrum",
  BWP: "Botswana Pula",
  BYN: "Belarusian Ruble",
  BZD: "Belize Dollar",
  CAD: "Canadian Dollar",
  CDF: "Congolese Franc",
  CHF: "Swiss Franc",
  CLP: "Chilean Peso",
  CNY: "Chinese Yuan",
  COP: "Colombian Peso",
  CRC: "Costa Rican Colón",
  CUP: "Cuban Peso",
  CVE: "Cape Verdean Escudo",
  CZK: "Czech Koruna",
  DJF: "Djiboutian Franc",
  DKK: "Danish Krone",
  DOP: "Dominican Peso",
  DZD: "Algerian Dinar",
  EGP: "Egyptian Pound",
  ERN: "Eritrean Nakfa",
  ETB: "Ethiopian Birr",
  EUR: "Euro",
  FJD: "Fijian Dollar",
  FKP: "Falkland Islands Pound",
  FOK: "Faroese Króna",
  GBP: "British Pound Sterling",
  GEL: "Georgian Lari",
  GGP: "Guernsey Pound",
  GHS: "Ghanaian Cedi",
  GIP: "Gibraltar Pound",
  GMD: "Gambian Dalasi",
  GNF: "Guinean Franc",
  GTQ: "Guatemalan Quetzal",
  GYD: "Guyanese Dollar",
  HKD: "Hong Kong Dollar",
  HNL: "Honduran Lempira",
  HRK: "Croatian Kuna",
  HTG: "Haitian Gourde",
  HUF: "Hungarian Forint",
  IDR: "Indonesian Rupiah",
  ILS: "Israeli New Shekel",
  IMP: "Isle of Man Pound",
  INR: "Indian Rupee",
  IQD: "Iraqi Dinar",
  IRR: "Iranian Rial",
  ISK: "Icelandic Króna",
  JEP: "Jersey Pound",
  JMD: "Jamaican Dollar",
  JOD: "Jordanian Dinar",
  JPY: "Japanese Yen",
  KES: "Kenyan Shilling",
  KGS: "Kyrgyzstani Som",
  KHR: "Cambodian Riel",
  KID: "Kiribati Dollar",
  KMF: "Comorian Franc",
  KRW: "South Korean Won",
  KWD: "Kuwaiti Dinar",
  KYD: "Cayman Islands Dollar",
  KZT: "Kazakhstani Tenge",
  LAK: "Lao Kip",
  LBP: "Lebanese Pound",
  LKR: "Sri Lankan Rupee",
  LRD: "Liberian Dollar",
  LSL: "Lesotho Loti",
  LYD: "Libyan Dinar",
  MAD: "Moroccan Dirham",
  MDL: "Moldovan Leu",
  MGA: "Malagasy Ariary",
  MKD: "Macedonian Denar",
  MMK: "Myanmar Kyat",
  MNT: "Mongolian Tögrög",
  MOP: "Macanese Pataca",
  MRU: "Mauritanian Ouguiya",
  MUR: "Mauritian Rupee",
  MVR: "Maldivian Rufiyaa",
  MWK: "Malawian Kwacha",
  MXN: "Mexican Peso",
  MYR: "Malaysian Ringgit",
  MZN: "Mozambican Metical",
  NAD: "Namibian Dollar",
  NGN: "Nigerian Naira",
  NIO: "Nicaraguan Córdoba",
  NOK: "Norwegian Krone",
  NPR: "Nepalese Rupee",
  NZD: "New Zealand Dollar",
  OMR: "Omani Rial",
  PAB: "Panamanian Balboa",
  PEN: "Peruvian Sol",
  PGK: "Papua New Guinean Kina",
  PHP: "Philippine Peso",
  PKR: "Pakistani Rupee",
  PLN: "Polish Zloty",
  PYG: "Paraguayan Guaraní",
  QAR: "Qatari Riyal",
  RON: "Romanian Leu",
  RSD: "Serbian Dinar",
  RUB: "Russian Ruble",
  RWF: "Rwandan Franc",
  SAR: "Saudi Riyal",
  SBD: "Solomon Islands Dollar",
  SCR: "Seychellois Rupee",
  SDG: "Sudanese Pound",
  SEK: "Swedish Krona",
  SGD: "Singapore Dollar",
  SHP: "Saint Helena Pound",
  SLL: "Sierra Leonean Leone",
  SOS: "Somali Shilling",
  SRD: "Surinamese Dollar",
  SSP: "South Sudanese Pound",
  STN: "São Tomé and Príncipe Dobra",
  SYP: "Syrian Pound",
  SZL: "Eswatini Lilangeni",
  THB: "Thai Baht",
  TJS: "Tajikistani Somoni",
  TMT: "Turkmenistani Manat",
  TND: "Tunisian Dinar",
  TOP: "Tongan Paʻanga",
  TRY: "Turkish Lira",
  TTD: "Trinidad and Tobago Dollar",
  TVD: "Tuvaluan Dollar",
  TWD: "New Taiwan Dollar",
  TZS: "Tanzanian Shilling",
  UAH: "Ukrainian Hryvnia",
  UGX: "Ugandan Shilling",
  USD: "United States Dollar",
  UYU: "Uruguayan Peso",
  UZS: "Uzbekistani Som",
  VES: "Venezuelan Bolívar Soberano",
  VND: "Vietnamese Dong",
  VUV: "Vanuatu Vatu",
  WST: "Samoan Tālā",
  XAF: "Central African CFA Franc",
  XCD: "East Caribbean Dollar",
  XOF: "West African CFA Franc",
  XPF: "CFP Franc",
  YER: "Yemeni Rial",
  ZAR: "South African Rand",
  ZMW: "Zambian Kwacha",
  ZWL: "Zimbabwean Dollar",
};
