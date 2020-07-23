import { getUsers, getPosts, getComments, getUser, changeUsername } from './domain'

export const resolvers = {
  Query: {
    getUser: (_, { userId }) => getUser(userId),
    getUsers: () => getUsers(),
    getPosts: (_, { userId }) => getPosts(userId),
    getComments: (_, { postId }) => getComments(postId),
    changeUsername: (_, { userId, newUsername }) => changeUsername(userId, newUsername)
  },
}
