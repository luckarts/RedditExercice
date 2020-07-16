import { GraphQLSchema, graphql } from 'graphql';
import { QueryObjectType } from '../../schemaGraphqlReddit/reddit';
import ListArticle from '../../components/ListArticle';
import Navbar from '../../components/Navbar';
function Search({ posts, slug, defaultFilter }) {
  console.log(posts);
  const filter = slug.length === 2 ? slug[1] : defaultFilter;
  return (
    <div className="flex flex-col">
      {posts.data.subreddit[filter].map((post, index) => (
        <ListArticle key={index} post={post} />
      ))}
    </div>
  );
}

export async function getServerSideProps(context) {
  const { slug } = context.params;
  const defaultFilter = 'topListings';
  let schema = new GraphQLSchema({
    query: QueryObjectType
  });

  let query = `{ subreddit(name: "${slug[0]}"){
        ${slug[1] ? slug[1] : defaultFilter}(limit: 2) {
            title
            text
            score
            numComments
            createdISO
            permalink
            author {
              username
            }
        }}}`;

  const res = await graphql(schema, query);
  const posts = JSON.parse(JSON.stringify(res));

  return {
    props: { posts, slug, defaultFilter }
  };
}
export default Search;
