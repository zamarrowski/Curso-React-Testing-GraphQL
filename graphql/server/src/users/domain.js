import { getAllUsers, getAllPosts, getAllComments } from './data'

let users = getAllUsers()
const posts = getAllPosts()
const comments = getAllComments()

export const getUser = (userId) => users.find(u => u.id == Number(userId))
export const getUsers = () => users
export const getPosts = (userId) => posts.filter(p => p.userId === Number(userId))
export const getComments = (postId) => comments.filter(c => c.postId === Number(postId))
export const changeUsername = (userId, newUsername) => {
  let userModified = null
  users = users.map(c => {
    if (c.id === Number(userId)) {
      c.username = newUsername
      userModified = c
    }
    return c
  })
  return userModified
}
