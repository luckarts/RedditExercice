export interface InterfaceListArticle {
  title: string;
  selftext: string;
  score: number;
  numComments: number;
  createdISO: string;
  permalink: string;
  author: {
    username: string;
  };
}
