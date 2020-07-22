export interface InterfaceArticle {
  title: string;
  url_overridden_by_dest?: string;
  comments?: {
    body_html?: string;
    author: { username: string };
    replies?: {
      body_html: string;
      author: {
        username: string;
      };
    };
  };
}
