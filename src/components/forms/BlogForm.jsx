import React from 'react'

export default function BlogForm(props) {
    return (
        <fieldset>
            <legend>Add a blog</legend>
            <label htmlFor="title">Title: 
                <input type="text" id="title" name="title" value={props.title} onChange={(event) => props.handleChange(event, props.setTitle)}/>
            </label>
            <label htmlFor="text">Text: 
                <input type="text" id="text" name="text" value={props.text} onChange={(event) => props.handleChange(event, props.setText)}/>
            </label>
            <label htmlFor="image">Image URL: 
                <input type="text" id="image" name="image" value={props.image} onChange={(event) => props.handleChange(event, props.setImage)}/>
            </label>
            <label htmlFor="date">Date: 
                <input type="date" id="date" name="date" value={props.date} onChange={(event) => props.handleChange(event, props.setDate)}/>
            </label>
            <label htmlFor="author">Author: 
                <input type="text" id="author" name="author" value={props.author} onChange={(event) => props.handleChange(event, props.setAuthor)}/>
            </label>
            <label htmlFor="trip">Trip: 
                <input type="text" id="trip" name="trip" value={props.trip} onChange={(event) => props.handleChange(event, props.setTrip)}/>
            </label>
        </fieldset>
    )
}
