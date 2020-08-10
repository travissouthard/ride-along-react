import React from 'react'

export default function AdminCms() {
    return (
        <form>
            <label htmlFor="title">Title
                <input type="text" id="title" name="title"/>
            </label>
            <input type="submit" value="Add New Content"/>
        </form>
    )
}
