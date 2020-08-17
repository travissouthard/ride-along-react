import React from 'react'

export default function Videos(props) {
    return (
        <main>
            <h2>Video Page</h2>
                {props.videos.length < 1 ? (
                    <p>No videos yet, sorry.</p>
                ) : (
                    <ul>
                        {props.videos.map((video, index) => {
                            return <li key={index}>{video.title}</li>
                        })}
                    </ul>
                )}
        </main>
    )
}

