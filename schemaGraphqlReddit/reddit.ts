import { getUser, getSubreddit, getSubredditListings, getComments } from "./api/reddit";
import {
  InterfaceUserType,
  InterfaceArgsType,
  InterfacecommentType,
  InterfacelinkType,
  InterfaceResGetcomment,
} from "../models/reddit";
import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLEnumType,
  GraphQLList,
  GraphQLFloat,
} from "graphql";

let itemTypeEnum = new GraphQLEnumType({
  name: "ItemType",
  description: "The type of object",
  values: {
    comment: {
      value: "t1",
    },
    account: {
      value: "t2",
    },
    link: {
      value: "t3",
    },
    message: {
      value: "t4",
    },
    subreddit: {
      value: "t5",
    },
    award: {
      value: "t6",
    },
    promoCampaign: {
      value: "t8",
    },
  },
});

let timeIntervalType = new GraphQLEnumType({
  name: "TimeInterval",
  description: "Time interval by which listings are queried",
  values: {
    hour: {
      value: "hour",
    },
    day: {
      value: "day",
    },
    week: {
      value: "week",
    },
    month: {
      value: "month",
    },
    year: {
      value: "year",
    },
    all: {
      value: "All",
    },
  },
});

let userType = new GraphQLObjectType({
  name: "RedditUser",
  description: "Information about a Reddit user",
  fields: {
    fullnameId: {
      type: new GraphQLNonNull(GraphQLString),
      description: "The Reddit API fullname of the user",
      resolve: function resolve(user: InterfaceUserType) {
        return user.kind + "_" + user.data.id;
      },
    },
    username: {
      type: new GraphQLNonNull(GraphQLString),
      description: "The user's unique username.",
      resolve: function resolve(user: InterfaceUserType) {
        return user.data.name;
      },
    },
    created: {
      type: new GraphQLNonNull(GraphQLFloat),
      description: "Creation date of the user, in Unix Time (UTC)",
      resolve: (user: InterfaceUserType) => user.data.created_utc,
    },
    createdISO: {
      type: new GraphQLNonNull(GraphQLString),
      description: "Creation date of the user, in ISO8601",
      resolve: function resolve(user: InterfaceUserType) {
        let date = new Date(user.data.created_utc * 1000);
        return date.toISOString();
      },
    },
    linkKarma: {
      type: new GraphQLNonNull(GraphQLInt),
      description: "Karma by links of the user",
      resolve: function resolve(user: InterfaceUserType) {
        return user.data.link_karma;
      },
    },
    commentKarma: {
      type: new GraphQLNonNull(GraphQLInt),
      description: "Karma by comments of the user",
      resolve: function resolve(user: InterfaceUserType) {
        return user.data.comment_karma;
      },
    },
  },
});

let createListingField = function createListingField(
  description: string,
  listingType: string,
  { hasTimeInterval = false } = {}
) {
  let args: InterfaceArgsType = {
    after: {
      description: "FullnameId of an item in the listing to use as the anchor point of the slice.",
      type: GraphQLString,
    },
    before: {
      description: "FullnameId of an item in the listing to use as the anchor point of the slice.",
      type: GraphQLString,
    },
    count: {
      description: "The number of items already seen in this listing",
      type: GraphQLInt,
    },
    limit: {
      description: "The maximum number of items to return in this slice of the listing.",
      type: GraphQLInt,
    },
  };
  if (hasTimeInterval) {
    args.timeInterval = {
      description: "Time interval to retrieve listings",
      type: timeIntervalType,
    };
  }
  return {
    description: description,
    args: args,
    type: new GraphQLNonNull(new GraphQLList(paginationType)),
    resolve: function resolve(subreddit: InterfacelinkType, args: InterfaceArgsType) {
      let requestOptions = args;
      requestOptions.t = args.timeInterval;
      delete requestOptions.timeInterval;
      return getSubredditListings(subreddit.data.display_name, listingType, requestOptions).then(
        (data) => {
          return [data.data];
        }
      );
    },
  };
};

let commentType: any = new GraphQLObjectType({
  name: "RedditComment",
  description: "A comment on a link",
  fields: function fields() {
    return {
      author: {
        description: "Author of the comment",
        type: new GraphQLNonNull(userType),
        resolve: function resolve(comment: InterfacecommentType) {
          return getUser(comment.data.author);
        },
      },
      body_html: {
        description: "Body of the comment",
        type: new GraphQLNonNull(GraphQLString),
        resolve: function resolve(comment: InterfacecommentType) {
          return comment.data.body_html;
        },
      },
      replies: {
        description: "Replies to the comment",
        type: new GraphQLNonNull(new GraphQLList(commentType)),
        args: {
          depth: {
            type: GraphQLInt,
            description: "Maximum depth of subtrees in the thread",
          },
          limit: {
            type: GraphQLInt,
            description: "Maximum number of comments to return",
          },
        },
        resolve: (comment: InterfacecommentType, args) => {
          let linkId = comment.data.link_id.split("_")[1];
          args.comment = comment.data.id;
          return getComments(comment.data.subreddit, linkId, args).then(
            (data: InterfaceResGetcomment): Object => {
              if (data[1].data.children[0].data.replies.data) {
                return data[1].data.children[0].data.replies.data.children;
              } else return [{}];
            }
          );
        },
      },
    };
  },
});
let linkType = new GraphQLObjectType({
  name: "RedditLink",
  description: "A link posted to a subreddit",
  fields: {
    createdISO: {
      type: new GraphQLNonNull(GraphQLString),
      description: "Creation date of the subreddit, in ISO8601",
      resolve: function resolve(link: InterfacelinkType) {
        let date = new Date(link.data.created_utc * 1000);
        return date.toISOString();
      },
    },
    title: {
      description: "Title of the link",
      type: new GraphQLNonNull(GraphQLString),
      resolve: function resolve(link: InterfacelinkType) {
        return link.data.title;
      },
    },
    selftext_html: {
      description: "text detail of post",
      type: new GraphQLNonNull(GraphQLString),
      resolve: function resolve(link: InterfacelinkType) {
        if (link.data.selftext_html) {
          return link.data.selftext_html;
        } else return "";
      },
    },
    selftext: {
      description: "text detail of post",
      type: new GraphQLNonNull(GraphQLString),
      resolve: function resolve(link: InterfacelinkType) {
        if (link.data.selftext_html) {
          return link.data.selftext;
        } else return "";
      },
    },
    url_overridden_by_dest: {
      description: "text detail of post",
      type: new GraphQLNonNull(GraphQLString),
      resolve: function resolve(link: InterfacelinkType): string {
        if (link.data.url_overridden_by_dest) {
          return link.data.url_overridden_by_dest;
        } else return "";
      },
    },

    fullnameId: {
      type: new GraphQLNonNull(GraphQLString),
      description: "The Reddit API fullname of the link",
      resolve: function resolve(link: InterfacelinkType) {
        return link.kind + "_" + link.data.id;
      },
    },

    score: {
      type: new GraphQLNonNull(GraphQLInt),
      description: "Score of the link",
      resolve: function resolve(link: InterfacelinkType) {
        return link.data.score;
      },
    },
    numComments: {
      type: new GraphQLNonNull(GraphQLInt),
      description: "Number of comments",
      resolve: function resolve(link: InterfacelinkType) {
        return link.data.num_comments;
      },
    },
    permalink: {
      type: new GraphQLNonNull(GraphQLString),
      description: "URL of the link",
      resolve: function resolve(link: InterfacelinkType) {
        return link.data.permalink;
      },
    },
    url: {
      type: new GraphQLNonNull(GraphQLString),
      description: "URL of the link",
      resolve: function resolve(link: InterfacelinkType) {
        return link.data.url;
      },
    },
    author: {
      type: new GraphQLNonNull(userType),
      description: "Author of the link",
      resolve: function resolve(link: InterfacelinkType) {
        return getUser(link.data.author);
      },
    },

    comments: {
      type: new GraphQLNonNull(new GraphQLList(commentType)),
      description: "Comments on the link",
      args: {
        depth: {
          type: GraphQLInt,
          description: "Maximum depth of subtrees in the thread",
        },
        limit: {
          type: GraphQLInt,
          description: "Maximum number of comments to return",
        },
      },
      resolve: function resolve(link, args) {
        return getComments(link.data.subreddit, link.data.id, args).then(
          (data: InterfaceResGetcomment): InterfacecommentType[] => {
            return data[1].data.children;
          }
        );
      },
    },
  },
});
export interface InterfacePaginationType {
  before?: string;
  after?: string;
  children?: InterfacelinkType;
}
let paginationType = new GraphQLObjectType({
  name: "RedditSearch",
  description: "A link posted to a subreddit",
  fields: {
    after: {
      description: "Title of the link",
      type: GraphQLNonNull(GraphQLString),
      resolve: function resolve(link: InterfacePaginationType) {
        return link.after;
      },
    },
    before: {
      description: "Title of the link",
      type: GraphQLNonNull(GraphQLString),
      resolve: function resolve(link: InterfacePaginationType) {
        return link.before;
      },
    },
    links: {
      description: "Author of the comment",
      type: new GraphQLNonNull(new GraphQLList(linkType)),
      resolve: function resolve(link: InterfacePaginationType) {
        return link.children;
      },
    },
  },
});

let subredditType = new GraphQLObjectType({
  name: "RedditSubreddit",
  description: "Information about and listings in a subreddit",
  fields: {
    name: {
      type: new GraphQLNonNull(GraphQLString),
      description: "Name of the subreddit",
      resolve: function resolve(subreddit: InterfacelinkType) {
        return subreddit.data.display_name;
      },
    },

    fullnameId: {
      type: new GraphQLNonNull(GraphQLString),
      description: "The Reddit API fullname of the subreddit",
      resolve: function resolve(subreddit: InterfacelinkType) {
        return subreddit.kind + "_" + subreddit.data.id;
      },
    },
    title: {
      type: new GraphQLNonNull(GraphQLString),
      description: "Title of the subreddit",
      resolve: function resolve(subreddit: InterfacelinkType) {
        return subreddit.data.title;
      },
    },
    publicDescription: {
      type: new GraphQLNonNull(GraphQLString),
      description: "Description of the subreddit",
      resolve: function resolve(subreddit: InterfacelinkType) {
        return subreddit.data.public_description;
      },
    },
    accountsActive: {
      type: new GraphQLNonNull(GraphQLInt),
      description: "Accounts active right now on the subreddit",
      resolve: function resolve(subreddit: InterfacelinkType) {
        return subreddit.data.accounts_active;
      },
    },
    subscribers: {
      type: new GraphQLNonNull(GraphQLInt),
      description: "Number of subscribers to the subreddit",
      resolve: function resolve(subreddit): string {
        return subreddit.data.subscribers;
      },
    },
    created: {
      type: new GraphQLNonNull(GraphQLFloat),
      description: "Creation date of the subreddit, in Unix Time (UTC)",
      resolve: function resolve(subreddit: InterfacelinkType): number {
        return subreddit.data.created_utc;
      },
    },

    createdISO: {
      type: new GraphQLNonNull(GraphQLString),
      description: "Creation date of the subreddit, in ISO8601",
      resolve: function resolve(subreddit: InterfacelinkType) {
        let date = new Date(subreddit.data.created_utc * 1000);
        return date.toISOString();
      },
    },

    hotListings: createListingField('Hot/"Front Page" listings of the subreddit', "hot"),
    newListings: createListingField("Newest listings of the subreddit", "new"),
    bestListings: createListingField("best listings of the subreddit", "best"),
    risingListings: createListingField("Rising listings of the subreddit", "rising"),
    controversialListings: createListingField(
      "Controversial listings of the subreddit",
      "controversial",
      {
        hasTimeInterval: true,
      }
    ),
    topListings: createListingField("Top listings of the subreddit", "controversial", {
      hasTimeInterval: true,
    }),
  },
});

let redditType = new GraphQLObjectType({
  name: "RedditAPI",
  description: "The Reddit API",
  fields: {
    subreddit: {
      type: subredditType,
      args: {
        name: {
          description: "Name of the subreddit",
          type: new GraphQLNonNull(GraphQLString),
        },
      },
      resolve: function resolve(root, args) {
        let name = args.name;
        return getSubreddit(name);
      },
    },

    link: {
      type: linkType,
      args: {
        name: {
          description: "name of the subreddit",
          type: new GraphQLNonNull(GraphQLString),
        },
        id: {
          description: "name of the subreddit",
          type: new GraphQLNonNull(GraphQLString),
        },
      },
      resolve: function resolve(root, _args) {
        let subredditName = _args.name;
        let linkId = _args.id;
        return getComments(subredditName, linkId).then((data: InterfaceResGetcomment) => {
          return data[0].data.children[0];
        });
      },
    },
    user: {
      type: userType,
      args: {
        username: {
          description: "Username of the user",
          type: new GraphQLNonNull(GraphQLString),
        },
      },
      resolve: function resolve(root, args) {
        let username = args.username;
        return getUser(username);
      },
    },
  },
});

export const QueryObjectType = redditType;
