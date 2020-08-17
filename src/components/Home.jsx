import React from 'react'

export default function Home(props) {
    return (
        <main>
            <h2>Our Most Recent Work!</h2>
            <article>
                <h3>{props.video ? props.video["title"] : "Video Title"}</h3>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/bTzOvUjHQe8" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <p><em>{props.video ? props.video.date.slice(0, 16) : "Video date"}</em></p>
                <p>{props.video ? props.video["text"] : "Video Description"}</p>
            </article>
            <hr />
            <article>
                <h3>{props.blog ? props.blog["title"] : "Blog Title"}</h3>
                {props.video ? (
                    <img src={props.blog.image} alt={props.blog.title}/>
                ) : ""}
                <p><em>{props.blog ? (
                    props.blog.date.slice(0, 16)
                ) : "blog date"}</em></p>
                <p>{props.blog ? props.blog["text"] : "blog Description"}</p>
            </article>
        </main>
    )
}

