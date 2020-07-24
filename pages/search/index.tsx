import { GraphQLSchema, graphql } from "graphql";
import React, { useState, useEffect } from "react";
import { QueryObjectType } from "../../schemaGraphqlReddit/reddit";
import ListArticle from "../../components/ListArticle";
import { useRouter } from "next/router";
import Error from "next/error";
import NextContext from "next/app";
import { GetServerSideProps } from "next";
import { InterfaceListArticle } from "../../models/ListArticles";

export interface InterfaceListArticleProps {
  posts: {
    data: {
      subreddit: {
        [index: string]: [{ [index: string]: any; links: [InterfaceListArticle] }];
      };
    };
  };
  defaultFilter: string;
}

const Search: React.FC<InterfaceListArticleProps> = ({ posts, defaultFilter }) => {
  const router = useRouter();

  const [filter, setFilter] = useState<string>(defaultFilter);
  const [pageCount, setPageCount] = useState<number>(0);

  useEffect(() => {
    if (router.query.filter) {
      setFilter(router.query.filter as string);
    }
  }, [router, setFilter]);

  const nextPage = (pagination: string): void => {
    setPageCount(pageCount + 1);
    router.push({
      pathname: "/search",
      query: {
        name: router.query.name,
        filter: filter,
        after: posts.data.subreddit[filter][0][pagination],
      },
    });
    window.scrollTo(0, 0);
  };

  const styleButton =
    "relative bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded";
  if (posts.data && posts.data.subreddit && posts.data.subreddit[filter]) {
    return (
      <div className="flex flex-col mt-20 sm:pt-6 mb-8">
        {posts.data.subreddit[filter][0].links.map(
          (post: InterfaceListArticle, index) => post && <ListArticle key={index} post={post} />
        )}
        <div className="w-2/3 m-auto relative sm:w-90">
          {pageCount !== 0 && posts.data.subreddit[filter][0].before && (
            <button onClick={() => nextPage("before")} className={`${styleButton} float-left`}>
              Previous Page
            </button>
          )}
          {posts.data.subreddit[filter][0].after && (
            <button onClick={() => nextPage("after")} className={`${styleButton} float-right`}>
              Next Page
            </button>
          )}
        </div>
      </div>
    );
  } else {
    return <Error statusCode={404}></Error>;
  }
};

export const getServerSideProps: GetServerSideProps<InterfaceListArticleProps> = async ({
  query,
}) => {
  const defaultFilter = "bestListings";
  let schema = new GraphQLSchema({
    query: QueryObjectType,
  });

  let queryGraphQL = `{
    subreddit(name:  "${query.name}"){
      ${query.filter ? query.filter : defaultFilter}(limit: 100 ,count: 100,
        after : "${query.after}" ,before : "${query.before}") {
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
    props: { posts, defaultFilter },
  };
};
export default Search;
