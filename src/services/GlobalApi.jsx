import axios from "axios";

const Base_URL = '/api/introPost.json'

const getPost = axios.get(Base_URL)
const getPostById = (id) => axios.get(Base_URL)

export default {
    getPost,
    getPostById
}