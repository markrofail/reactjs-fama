import React, { useEffect } from 'react'
import { connect } from 'react-redux';

import { fetchPosts } from '../redux/actions/postActions'

function Posts({ posts, newPost, fetchPosts }) {
    useEffect(fetchPosts, []);

    useEffect(() => {
        if(newPost){
            posts.unshift(newPost);
        }
    }, [posts, newPost]);

    return (
        <div>
            <h1>Posts</h1>
            {
                posts.map(post => (
                    <div key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </div>
                ))
            }
        </div>
    )
}

const mapStateToProps = state => ({
    posts: state.posts.posts,
    newPost: state.posts.post
})

export default connect(mapStateToProps, { fetchPosts })(Posts);
