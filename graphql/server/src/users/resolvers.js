import { getUsers, getPosts, getComments, getUser } from './domain'

export const resolvers = {
  Query: {
    getUser: (_, { userId }) => getUser(userId),
    getUsers: () => getUsers(),
    getPosts: (_, { userId }) => getPosts(userId),
    getComments: (_, { postId }) => getComments(postId),
  },
}
