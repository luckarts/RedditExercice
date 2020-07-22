import { GraphQLSchema, graphql } from 'graphql';
import React, { useState, useEffect } from 'react';
import { QueryObjectType } from '../../schemaGraphqlReddit/reddit';
import ListArticle from '../../components/ListArticle';
import { useRouter } from 'next/router';
import Error from 'next/error';
import App, { Container, NextAppContext, DefaultAppIProps } from 'next/app';
import { GetServerSideProps } from 'next';
import { InterfaceListArticle } from '../../models/ListArticles';
import { NextContext } from 'next';
export interface InterfaceListArticleProps {
  posts: { data: { subreddit: { bestListings?: [InterfaceListArticle] } } };
  defaultFilter: string;
}

export default function Search({ posts, defaultFilter }: InterfaceListArticleProps) {
  const router = useRouter();
  let queryFilter = router.query.filter as string;
  const [filter, setFilter] = useState<string>(defaultFilter);
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    if (queryFilter) {
      setFilter(queryFilter);
    }
  }, [queryFilter, setFilter]);

  function nextPage(pagination: string) {
    let after = posts.data.subreddit[filter][0][pagination] as undefined;
    setPageCount(pageCount + 1);
    router.push({
      pathname: '/search',
      query: {
        name: router.query.name,
        filter: filter,
        after: posts.data.subreddit.bestListings[0][pagination]
      }
    });
    window.scrollTo(0, 0);
  }
  const styleButton = 'relative bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded';
  if (posts.data && posts.data.subreddit && posts.data.subreddit[filter]) {
    return (
      <div className="flex flex-col mt-20 sm:pt-6 mb-8">
        {posts.data.subreddit[filter][0].links.map((post, index) => post && <ListArticle key={index} post={post} />)}
        <div className="w-2/3 m-auto relative sm:w-90">
          {pageCount !== 0 && posts.data.subreddit[filter][0].before && (
            <button onClick={() => nextPage('before')} className={`${styleButton} float-left`}>
              Previous Page
            </button>
          )}
          {posts.data.subreddit[filter][0].after && (
            <button onClick={() => nextPage('after')} className={`${styleButton} float-right`}>
              Next Page
            </button>
          )}
        </div>
      </div>
    );
  } else {
    return <Error statusCode={404}></Error>;
  }
}

export const getServerSideProps: GetServerSideProps<InterfaceListArticleProps> = async ({ query }: NextAppContext) => {
  const defaultFilter = 'bestListings';
  let schema = new GraphQLSchema({
    query: QueryObjectType
  });

  let queryGraphQL = `{
    subreddit(name:  "${query.name}"){
      ${query.filter ? query.filter : defaultFilter}(limit: 100 ,count: 100 ,after : "${query.after}" ,before : "${
    query.before
  }") {
        after
        before
        links {
          title
          selftext
          score
          numComments
          createdISO
          permalink
          author {
            username
          }
        }

        }}}`;

  const res = await graphql(schema, queryGraphQL);
  const posts = JSON.parse(JSON.stringify(res));

  return {
    props: { posts, defaultFilter }
  };
};
