import fetch from 'node-fetch';

import Qs from 'qs';

let get = (path, query) => {
  if (query) {
    query = `?${Qs.stringify(query)}`;
  } else {
    query = '';
  }
  return fetch(`https://reddit.com/${path}.json${query}`).then((res) => {
    return res.json();
  });
};

export const getUser = (username) => {
  return get(`user/${username}/about`);
};

export const getSubreddit = (name) => {
  return get(`r/${name}/about`);
};

export const getSubredditListings = (subredditName, listingType, options = {}) => {
  return get(`r/${subredditName}/${listingType}`, options);
};

export const getComments = (subredditName, linkId, options = {}) => {
  return get(`r/${subredditName}/comments/${linkId}`, options);
};
