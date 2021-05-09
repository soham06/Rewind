import axios from 'axios'

const url = 'https://rewind-app.herokuapp.com/posts';

export const fetchPosts = () => axios.get(url)
export const createPost = (newPost) => axios.post(url, newPost)
export const updatePost = (id, updatedPostData) => axios.patch(`${url}/${id}`, updatedPostData)
export const deletePost = (id) => axios.delete(`${url}/${id}`)
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`)
export const dislikePost = (id) => axios.patch(`${url}/${id}/dislikePost`)
export const lovePost = (id) => axios.patch(`${url}/${id}/lovePost`)