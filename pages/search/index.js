import { GraphQLSchema, graphql } from 'graphql';
import React, { useState, useEffect } from 'react';
import { QueryObjectType } from '../../schemaGraphqlReddit/reddit';
import ListArticle from '../../components/ListArticle';
import Navbar from '../../components/Navbar';
import { useRouter } from 'next/router';
import Error from 'next/error';
function Search({ posts, defaultFilter }) {
  const router = useRouter();
  const [filter, setFilter] = useState(defaultFilter);
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    if (router.query.filter) {
      setFilter(router.query.filter);
    }
  }, [router, setFilter]);
  console.log(posts);

  function nextPage(pagination) {
    setPageCount(pageCount + 1);
    router.push({
      pathname: '/search',
      query: {
        name: router.query.name,
        filter: router.query.filter,
        after: posts.data.subreddit[filter][0][pagination]
      }
    });
  }
  if (posts.data && posts.data.subreddit[filter]) {
    return (
      <div className="flex flex-col mt-12 ">
        {posts.data.subreddit[filter][0].links.map((post, index) => (
          <ListArticle key={index} post={post} />
        ))}
        {pageCount !== 0 && posts.data.subreddit[filter][0].before && (
          <button onClick={() => nextPage('before')}>Previous Page</button>
        )}
        {posts.data.subreddit[filter][0].after && <button onClick={() => nextPage('after')}>Next Page</button>}
      </div>
    );
  } else {
    return <Error statusCode={404}></Error>;
  }
}

export async function getServerSideProps(context) {
  const { query } = context;

  const defaultFilter = 'topListings';
  let schema = new GraphQLSchema({
    query: QueryObjectType
  });

  let queryGraphQL = `{

    subreddit(name:  "${query.name}"){
      ${query.filter ? query.filter : defaultFilter}(limit: 5 ,count: 5 ,after : "${query.after}" ,before : "${
    query.before
  }") {
        after
        before
        links {
          title
          text
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
}
export default Search;