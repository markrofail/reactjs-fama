import React, { useState } from 'react'
import axios from 'axios'

import {baseUrl} from '../config'

export default function PostForm() {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const createPost = () => {
        const post = {
            'title': title,
            'body': body
        }

        axios.post(`${baseUrl}/posts/`, post)
            .then(res => {
                console.log(res.data);
            })
    }

    return (
        <div>
            <h1>Add any post</h1>
            <form onSubmit={createPost}>
                <div>
                    <label>Title: </label><br />
                    <input type="text" name="title" value={title} onChange={e => setTitle(e.target.value)} />
                </div>
                <br />
                <div>
                    <label>Body: </label><br />
                    <textarea name="body" value={body} onChange={e => setBody(e.target.value)} />
                </div>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
