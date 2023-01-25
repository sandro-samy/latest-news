type Category =
  | "general"
  | "technology"
  | "science"
  | "business"
  | "health"
  | "sports"
  | "entertainment";

interface NewsResponse {
  pagination: Pagination;
  data: Article[];
}
interface Article {
  title: string;
  author: string | null;
  category: string;
  country: string;
  description: string;
  image: string | null;
  language: string;
  published_at: string;
  source: string;
  url: string;
}

interface Pagination {
  count: Int;
  limit: Int;
  offset: Int;
  total: Int;
}
