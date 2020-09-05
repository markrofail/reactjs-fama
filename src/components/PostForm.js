import React, { useState } from 'react'

import { connect } from 'react-redux'

import { createPost } from '../redux/actions/postActions'

function PostForm({ createPost }) {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();

        const post = {
            'title': title,
            'body': body
        };

        createPost(post);

        setBody('');
        setTitle('');
    }

    return (
        <div>
            <h1>Add any post</h1>
            <form onSubmit={e => handleSubmit(e)}>
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

export default connect(null, { createPost })(PostForm)
