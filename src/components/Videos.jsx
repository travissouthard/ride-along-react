import React from 'react'

export default function Videos(props) {
    return (
        <div>
            <div>
            <h2>Blog Page</h2>
            {props.videos[0].length < 1 ? (
                <p>No videos yet, sorry.</p>
            ) : (
                <ul>
                    {props.videos.map((video, index) => {
                        return <li key={index}>{video.title}</li>
                    })}
                </ul>
            )}
        </div>
        </div>
    )
}

