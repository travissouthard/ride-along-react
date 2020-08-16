import React from 'react'

export default function Home(props) {
    return (
        <main>
            <h2>Our Most Recent Work!</h2>
            <article>
                <h3>Latest video</h3>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/bTzOvUjHQe8" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <p>Text will go here.</p>
            </article>
            <article>
                <h3>Latest blog</h3>
            </article>
        </main>
    )
}

