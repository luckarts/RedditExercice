import { GraphQLSchema, graphql } from 'graphql';
import { QueryObjectType } from '../../schemaGraphqlReddit/reddit';
import Article from '../../components/Article';
function Topic({ topic }) {
  return (
    <div className="flex flex-col mt-12">
      <Article topic={topic.data.link} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const { slug } = context.params;

  let schema = new GraphQLSchema({
    query: QueryObjectType
  });

  let query = `{ link(name:  "${slug[0]}", id: "${slug[2]}")
	{
			title
			text
			comments(limit :3) {
			body
			author {
				username
				}
			replies(depth: 5)  {
				body
				author {
					username
				}
			}
		}
	}
}`;

  const res = await graphql(schema, query);

  const topic = JSON.parse(JSON.stringify(res));
  return {
    props: { topic }
  };
}
export default Topic;
