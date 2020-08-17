import React from 'react'

export default function Blog(props) {
    return (
        <main>
            <h2>Blog Page</h2>
            {props.blogs.length < 1 ? (
                <p>No blogs yet, sorry.</p>
            ) : (
                <ul>
                    {props.blogs.map((blog, index) => {
                        return <li key={index}>{blog.title}</li>
                    })}
                </ul>
            )}
        </main>
    )
}
