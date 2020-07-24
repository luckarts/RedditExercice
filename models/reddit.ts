export interface InterfaceUserType {
  data: {
    id: number;
    name: string;
    created_utc: number;
    link_karma: string;
    display_name: string;
    comment_karma: string;
  };
  kind: string;
}
export interface InterfacelinkType {
  data: {
    id: string;
    score: number;
    num_comments: number;
    title: string;
    selftext_html: string;
    public_description: string;
    created_utc: number;
    url_overridden_by_dest: string;
    subscribers: string;
    accounts_active: boolean;
    display_name: string;
    permalink: string;
    author: string;
    url: string;
    subreddit: string;
    selftext: string;
    comment_karma: string;
  };
  kind: string;
}

export interface InterfacecommentType {
  data: {
    author: string;
    body_html: string;
    subreddit: string;
    link_id: string;
    id: number;
    replies: {
      data: {
        children: [];
      };
    };
  };
}

export interface InterfaceResGetcomment {
  [index: number]: { data: { children: [InterfacecommentType] } };
}

export interface InterfaceArgsType {
  after?: Object;
  before?: Object;
  count?: Object;
  limit?: Object;
  name?: Object;
  username?: Object;
  id?: Object;
  [key: string]: any;
}
export interface InterfaceArgsTpe {
  after?: Object;
  before?: Object;
  count?: Object;
  limit?: Object;
  [key: string]: any;
}
