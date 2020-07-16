import { Reddit } from 'graphqlhub-schemas';
import { GraphQLSchema, graphql } from 'graphql';

import ListArticle from '../components/ListArticle';
function Home({ posts }) {
  console.log(posts);
  return (
    <div className="flex flex-col">
      {posts.data.subreddit.topListings.map((post, index) => (
        <ListArticle key={index} post={post} />
      ))}
    </div>
  );
}
export async function getStaticProps() {
  let schema = new GraphQLSchema({
    query: Reddit.QueryObjectType
  });

  let query = `{ subreddit(name: "home"){
    topListings(limit: 5) {
      title

    }}}`;

  const res = await graphql(schema, query);
  const posts = JSON.parse(JSON.stringify(res));
  return {
    props: { posts }
  };
}
export default Home;
