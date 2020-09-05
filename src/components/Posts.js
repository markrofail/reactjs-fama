import React, { useEffect, useState } from 'react'
import axios from 'axios'

import {baseUrl} from '../config'

export default function Posts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get(`${baseUrl}/posts?_limit=10`)
            .then((res) => {
                setPosts(res.data);
            })
    }, [])

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
