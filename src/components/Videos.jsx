import React from 'react'

export default function Videos(props) {
    return (
        <main>
            <h2>Our videos</h2>
                {props.videos.length < 1 ? (
                    <p>No videos yet, sorry.</p>
                ) : (
                    <div>
                        {props.videos.map((video, index) => {
                            return <article key={index}>
                            <h3>{video.title}</h3>
                            <img src={video.thumbnail} alt={video.title}/>
                            <p><em>{video.date.slice(0, 16)}</em></p>
                            <p>{video.text.slice(0, 120) + "..."} <span>Read more</span></p>
                        </article>
                        })}
                    </div>
                )}
        </main>
    )
}

