import { CREATE_POST, FETCH_POSTS } from './types'
import axios from 'axios'

import { baseUrl } from '../../config'

export const fetchPosts = () => dispatch => {
    axios.get(`${baseUrl}/posts?_limit=10`)
        .then((res) => {
            dispatch({
                type: FETCH_POSTS,
                payload: res.data
            })
        })
}

export const createPost = (postData) => dispatch => {
    axios.post(`${baseUrl}/posts/`, postData)
    .then(res => {
        dispatch({
            type: CREATE_POST,
            payload: res.data
        })
    })
}

