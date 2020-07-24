import fetch from "node-fetch";

import Qs from "qs";

let get = (path: string, query?: Object) => {
  if (query) {
    query = `?${Qs.stringify(query)}`;
  } else {
    query = "";
  }
  return fetch(`https://reddit.com/${path}.json${query}`).then((res) => {
    return res.json();
  });
};

export const getUser = (username: string) => {
  return get(`user/${username}/about`);
};

export const getSubreddit = (name: string) => {
  return get(`r/${name}/about`);
};

export const getSubredditListings = (
  subredditName: string,
  listingType: string,
  options: Object = {}
) => {
  return get(`r/${subredditName}/${listingType}`, options);
};

export const getComments = (subredditName: string, linkId: string, options = {}) => {
  return get(`r/${subredditName}/comments/${linkId}`, options);
};
