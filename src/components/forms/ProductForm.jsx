import React from 'react'

export default function ProductForm(props) {
    return (
        <fieldset>
            <legend>Add a product</legend>
            <label htmlFor="name">Name: 
                <input type="text" id="name" name="name" value={props.name} onChange={(event) => props.handleChange(event, props.setName)}/>
            </label>
            <label htmlFor="description">Text: 
                <textarea type="text" id="description" name="description" onChange={(event) => props.handleChange(event, props.setDescription)}>{props.description}</textarea>
            </label>
            <label htmlFor="image">Image URL: 
                <input type="text" id="image" name="image" value={props.image} onChange={(event) => props.handleChange(event, props.setImage)}/>
            </label>
            <label htmlFor="price">Price: 
                <input type="number" id="price" name="price" value={props.price} onChange={(event) => props.handleChange(event, props.setPrice)}/>
            </label>
            <label htmlFor="quantity">Quantity: 
                <input type="number" id="quantity" name="quantity" value={props.quantity} onChange={(event) => props.handleChange(event, props.setQuantity)}/>
            </label>
            <label htmlFor="discount">Discount: 
                <input type="number" id="discount" name="discount" value={props.discount} onChange={(event) => props.handleChange(event, props.setDiscount)}/>
            </label>
            <label htmlFor="trip">Trip: 
                <input type="text" id="trip" name="trip" value={props.trip} onChange={(event) => props.handleChange(event, props.setTrip)}/>
            </label>
        </fieldset>
    )
}
