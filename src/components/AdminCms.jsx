import React, { useState } from 'react'
import BlogForm from "./forms/BlogForm"

export default function AdminCms() {
    const [form, setForm] = useState("BlogForm")
    let changeForm = (event) => {
        setForm(event.target.value)
    }
    return (
        <form>
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
            <BlogForm />
            <input type="submit" value="Add New Content"/>
        </form>
    )
}
