export interface InterfaceListArticle {
  after?: string;
  before?: string;
  links?: {
    title: string;
    selftext: string;
    score: number;
    numComments: number;
    createdISO: string;
    permalink: string;
    author: {
      username: string;
    };
  };
}
