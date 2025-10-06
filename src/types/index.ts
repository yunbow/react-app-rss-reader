export interface Article {
  title: string;
  link: string;
  description: string;
  pubDate: string;
  guid: string;
  feedTitle?: string;
}

export interface Feed {
  url: string;
  title: string;
  description: string;
  id: string;
}

export interface ParsedFeed {
  title: string;
  description: string;
  articles: Article[];
}