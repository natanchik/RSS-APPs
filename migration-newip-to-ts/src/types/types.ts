export interface Source {
  id: string;
  name: string;
  description: string;
  url: string;
  category: Category;
  language: Language;
  country: Country;
}

export interface ResponseObject {
  status: string;
  sources: Source[];
}

const categories = ['business', 'entertainment', 
    'general', 'health', 'science', 'sports', 'technology'] as const

export type Category = typeof categories[number]

const languages = ['ar', 'de', 'en', 'es', 'fr', 
    'he', 'it', 'nl', 'no', 'pt', 'ru', 'sv', 'ud', 'zh'] as const

export type Language = typeof languages[number]

const countries = [
  'ae', 'ar', 'at', 'au', 'be', 'bg', 'br',
  'ca', 'ch', 'cn', 'co', 'cu', 'cz', 'de',
  'eg', 'fr', 'gb', 'gr', 'hk', 'hu', 'id',
  'ie', 'il', 'in', 'it', 'jp', 'kr', 'lt',
  'lv', 'ma', 'mx', 'my', 'ng', 'nl', 'no',
  'nz', 'ph', 'pl', 'pt', 'ro', 'rs', 'ru',
  'sa', 'se', 'sg', 'si', 'sk', 'th', 'tr',
  'tw', 'ua', 'us', 've', 'za'
] as const

export type Country = typeof countries[number]
