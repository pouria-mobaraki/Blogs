import axios from "axios";

const Base_URL = 'http://localhost:3000/api/introPost.json'

const getPost = axios.get(Base_URL)

export default {
    getPost
}