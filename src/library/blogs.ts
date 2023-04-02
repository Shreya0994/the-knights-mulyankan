import { ParsedUrlQuery } from "querystring";

export interface IBlog {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  user_id: string;
  created_at: string;
  updated_at: string;
}

export class Blog implements IBlog {
  constructor(
    public id: number,
    public title: string,
    public excerpt: string,
    public content: string,
    public image: string,
    public user_id: string,
    public created_at: string,
    public updated_at: string
  ) {}
}

export interface IBlogData {
  current_page: number;
  data: IBlog[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: [
    {
      url: string;
      label: string;
      active: boolean;
    }
  ];
  next_page_url: string;
  path: string;
  per_page: number;
  prev_page_url: string;
  to: number;
  total: number;
}

export interface Params extends ParsedUrlQuery {
  blogid: string;
}
