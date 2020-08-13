import React from 'react'

export default function ProductForm() {
    return (
        <fieldset>
            <legend>Add a product</legend>
            <label htmlFor="name">Name: 
                <input type="text" id="name" name="name"/>
            </label>
            <label htmlFor="description">Text: 
                <input type="text" id="description" name="description"/>
            </label>
            <label htmlFor="image">Image URL: 
                <input type="text" id="image" name="image"/>
            </label>
            <label htmlFor="price">Date: 
                <input type="number" id="price" name="price"/>
            </label>
            <label htmlFor="quantity">Author: 
                <input type="text" id="quantity" name="quantity"/>
            </label>
            <label htmlFor="discount">Author: 
                <input type="text" id="discount" name="discount"/>
            </label>
            <label htmlFor="trip">Trip: 
                <input type="text" id="trip" name="trip"/>
            </label>
        </fieldset>
    )
}
