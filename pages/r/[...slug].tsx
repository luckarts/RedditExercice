import { GraphQLSchema, graphql } from 'graphql'
import { QueryObjectType } from '../../schemaGraphqlReddit/reddit'
import Article from '../../components/Article'
import { InterfaceArticle } from '../../models/Article'
import { GetServerSideProps } from 'next'
import React from 'react'

export interface InterfaceArticleProps {
  topic: {
    data: {
      link: InterfaceArticle
    }
  }
}

const Topic: React.FC<InterfaceArticleProps> = ({ topic }) => {
  return (
    <div className="flex flex-col mt-20 sm:pt-6">
      <Article topic={topic.data.link} />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps<InterfaceArticleProps> = async (context) => {
  const { slug } = context.query

  let schema = new GraphQLSchema({
    query: QueryObjectType,
  })

  let query = `{link(name:  "${slug ? slug[0] : ''}", id: "${slug ? slug[2] : ''}")
	{
      title
      url_overridden_by_dest
      selftext_html

			comments(limit :3) {
        body_html
			author {
				username
				}
			replies(depth: 2,limit :6)  {
				body_html
				author {
					username
				}
			}
		}
	}
}`

  const res = await graphql(schema, query)

  const topic = JSON.parse(JSON.stringify(res))
  return {
    props: { topic },
  }
}
export default Topic
