import { getAllUsers, getAllPosts, getAllComments } from './data'

const users = getAllUsers()
const posts = getAllPosts()
const comments = getAllComments()

export const getUser = (userId) => users.find(u => u.id == userId)
export const getUsers = () => users
export const getPosts = (userId) => posts.filter(p => p.userId === Number(userId))
export const getComments = (postId) => comments.filter(c => c.postId === Number(postId))
