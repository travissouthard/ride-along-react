import React from 'react'

export default function Blog(props) {
    return (
        <main>
            <h2>Our blogs</h2>
            {props.blogs.length < 1 ? (
                <p>No blogs yet, sorry.</p>
            ) : (
                <div>
                    {props.blogs.map((blog, index) => {
                        return <article key={index}>
                            <h3>{blog.title}</h3>
                            <img src={blog.image} alt={blog.title}/>
                            <p><em>{blog.date.slice(0, 16)}</em></p>
                            <p>{blog.text.slice(0, 120) + "..."} <span>Read more</span></p>
                        </article>
                    })}
                </div>
            )}
        </main>
    )
}
