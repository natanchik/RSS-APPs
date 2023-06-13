export interface EvethingReqParams {
  apiKey: string;
  q?: string;
  searchIn?: 'title' | 'description' | 'content';
  sources?: string;
  domains?: string;
  excludeDomains?: string;
  from?: string;
  to?: string;
  language?: Language;
  sortBy?: 'relevancy' | 'popularity' | 'publishedAt';
  pageSize?: number;
  page?: number;
}

export interface SourcesReqParams {
  apiKey?: string;
  category?: Category;
  language?: Language;
  country?: Country;
}

export interface Source {
  id: string;
  name: string;
  description: string;
  url: string;
  category: Category;
  language: Language;
  country: Country;
}

export interface Article {
  source: {
    id: string | null;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

export interface SourcesResObj extends Response {
  sources: Source[];
}

export interface ArticlesResObj extends Response {
  totalResults: number;
  articles: Article[];
}

enum Categories {
  'business',
  'entertainment',
  'general',
  'health',
  'science',
  'sports',
  'technology',
}

export type Category = (typeof Categories)[number];

enum Languages {
  'ar',
  'de',
  'en',
  'es',
  'fr',
  'he',
  'it',
  'nl',
  'no',
  'pt',
  'ru',
  'sv',
  'ud',
  'zh',
}

export type Language = (typeof Languages)[number];

enum Countries {
  'ae',
  'ar',
  'at',
  'au',
  'be',
  'bg',
  'br',
  'ca',
  'ch',
  'cn',
  'co',
  'cu',
  'cz',
  'de',
  'eg',
  'fr',
  'gb',
  'gr',
  'hk',
  'hu',
  'id',
  'ie',
  'il',
  'in',
  'it',
  'jp',
  'kr',
  'lt',
  'lv',
  'ma',
  'mx',
  'my',
  'ng',
  'nl',
  'no',
  'nz',
  'ph',
  'pl',
  'pt',
  'ro',
  'rs',
  'ru',
  'sa',
  'se',
  'sg',
  'si',
  'sk',
  'th',
  'tr',
  'tw',
  'ua',
  'us',
  've',
  'za',
}

export type Country = (typeof Countries)[number];
