import React from 'react'

export default function VideoForm() {
    return (
        <fieldset>
            <legend>Add a video</legend>
            <label htmlFor="title">Title: 
                <input type="text" id="title" name="title"/>
            </label>
            <label htmlFor="text">Text: 
                <input type="text" id="text" name="text"/>
            </label>
            <label htmlFor="image">Image URL: 
                <input type="text" id="image" name="image"/>
            </label>
            <label htmlFor="date">Date: 
                <input type="date" id="date" name="date"/>
            </label>
            <label htmlFor="author">Author: 
                <input type="text" id="author" name="author"/>
            </label>
            <label htmlFor="trip">Trip: 
                <input type="text" id="trip" name="trip"/>
            </label>
        </fieldset>
    )
}
