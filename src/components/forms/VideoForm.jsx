import React from 'react'

export default function VideoForm(props) {
    return (
        <fieldset>
            <legend>Add a video</legend>
            <label htmlFor="title">Title: 
                <input type="text" id="title" name="title" value={props.title} onChange={(event) => props.handleChange(event, props.setTitle)}/>
            </label>
            <textarea htmlFor="text">Text: 
                <input type="text" id="text" name="text" onChange={(event) => props.handleChange(event, props.setText)}/>{props.text}</textarea>
            <label htmlFor="url">Video URL: 
                <input type="text" id="url" name="url" value={props.url} onChange={(event) => props.handleChange(event, props.setUrl)}/>
            </label>
            <label htmlFor="date">Date: 
                <input type="date" id="date" name="date" value={props.date} onChange={(event) => props.handleChange(event, props.setDate)}/>
            </label>
            <label htmlFor="thumbnail">Thumbnail: 
                <input type="text" id="thumbnail" name="thumbnail" value={props.thumbnail} onChange={(event) => props.handleChange(event, props.setThumbnail)}/>
            </label>
            <label htmlFor="trip">Trip: 
                <input type="text" id="trip" name="trip" value={props.trip} onChange={(event) => props.handleChange(event, props.setTrip)}/>
            </label>
        </fieldset>
    )
}
