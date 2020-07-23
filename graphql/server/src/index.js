import express from 'express'
import { ApolloServer } from 'apollo-server-express'

import { typeDefs } from './users/schema.graphql'
import { resolvers } from './users/resolvers'

const app = express()

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

server.applyMiddleware({ app })

app.listen(8000, () => console.log('running in 8000'))
