import React from 'react'

export default function Blog(props) {
    return (
        <div>
            <h2>Blog Page</h2>
            {props.blogs[0].length < 1 ? (
                <p>No blogs yet, sorry.</p>
            ) : (
                <ul>
                    {props.blogs[0].map((blog, index) => {
                        return <li key={index}>{blog.title}</li>
                    })}
                </ul>
            )}
        </div>
    )
}
