import React, { useState } from 'react'
import BlogForm from "./forms/BlogForm"
import VideoForm from "./forms/VideoForm"
import ProductForm from "./forms/ProductForm"

export default function AdminCms(props) {
    const [form, setForm] = useState("")
    let changeForm = (event) => {
        setForm(event.target.value)
    }
    return (
        <form onSubmit={(event) => props.handleSubmit(event, form)}>
            <fieldset onChange={(event) => changeForm(event)}>
                <legend>What do you want to add?</legend>
                <label htmlFor="blog">
                    <input type="radio" id="blog" name="form" value="blog"/> Blog
                </label>
                <label htmlFor="video">
                    <input type="radio" id="video" name="form" value="video"/> Video
                </label>
                <label htmlFor="product">
                    <input type="radio" id="product" name="form" value="product"/> Product
                </label>
            </fieldset>
            {form === "blog" ? (
                <BlogForm 
                    handleChange={props.handleChange}
                    title={props.title}
                    text={props.text}
                    image={props.image}
                    date={props.date}
                    author={props.author}
                    trip={props.trip}
                    setTitle={props.setTitle}
                    setText={props.setText}
                    setImage={props.setImage}
                    setDate={props.setDate}
                    setAuthor={props.setAuthor}
                    setTrip={props.setTrip}
                />
            ) : ""}
            {form === "video" ? (
                <VideoForm
                    handleChange={props.handleChange}
                    title={props.title}
                    text={props.text}
                    url={props.url}
                    thumbnail={props.thumbnail}
                    date={props.date}
                    trip={props.trip}
                    setTitle={props.setTitle}
                    setText={props.setText}
                    setUrl={props.setUrl}
                    setThumbnail={props.setThumbnail}
                    setDate={props.setDate}
                    setTrip={props.setTrip}
                />
            ) : ""}
            {form === "product" ? (
                <ProductForm
                    handleChange={props.handleChange}
                    name={props.name}
                    description={props.description}
                    price={props.price}
                    quantity={props.quantity}
                    image={props.image}
                    discount={props.discount}
                    trip={props.trip}
                    setName={props.setName}
                    setDescription={props.setDescription}
                    setPrice={props.setPrice}
                    setQuantity={props.setQuantity}
                    setImage={props.setImage}
                    setDiscount={props.setDiscount}
                    setTrip={props.setTrip}
                />
            ) : ""}
            <input type="submit" value={"Add new " + form}/>
        </form>
    )
}
