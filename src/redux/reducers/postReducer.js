import {CREATE_POST, FETCH_POSTS} from '../actions/types'

const initialState = {
    posts: [],  // representing all posts
    post: {}    // represting the new post from the form
}

export default function(state=initialState, action) {
    switch (action.type) {
        case CREATE_POST:
            return {
                ...state,
                post: action.payload
            };
        case FETCH_POSTS:
            return {
                ...state,
                posts: action.payload
            };
        default:
            return state;
    }
}