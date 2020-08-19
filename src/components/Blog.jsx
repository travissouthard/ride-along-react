import React, {useState} from 'react'

export default function Blog(props) {
    //State
    const [currentIndex, setCurrentIndex] = useState(0)
    const [readBlogOn, setReadBlogOn] = useState(false)
    // Functions
    let showBlog = (index) => {
        setCurrentIndex(index)
        setReadBlogOn(true)
    }
    let closeBlog = () => {
        setReadBlogOn(false)
    }
    // Return 
    return (
        <main>
            <h2 id="top">Our blogs</h2>
            {readBlogOn ? (
                <article className="spread">
                    <p className="blog-controls">
                        {currentIndex > 0 ? (
                            <span onClick={() => showBlog(currentIndex - 1)}>&lt;=</span> 
                        ) : ""}
                        &nbsp;| <span onClick={() => {closeBlog()}}>close</span> |&nbsp;
                        {currentIndex < props.blogs.length - 1 ? (
                            <span onClick={() => showBlog(currentIndex + 1)}>=&gt;</span> 
                        ) : ""}
                    </p>
                    <h3>{props.blogs[currentIndex].title}</h3>
                    <p><em>{props.blogs[currentIndex].date.slice(0, 16) + " | " + props.blogs[currentIndex].author}</em></p>
                    <p>{props.blogs[currentIndex].text}</p>
                    <p className="blog-controls">
                        {currentIndex > 0 ? (
                            <span onClick={() => showBlog(currentIndex - 1)}>&lt;=</span> 
                        ) : ""}
                        &nbsp;| <span onClick={() => {closeBlog()}}>close</span> |&nbsp;
                        {currentIndex < props.blogs.length - 1 ? (
                            <span onClick={() => showBlog(currentIndex + 1)}>=&gt;</span> 
                        ) : ""}
                    </p>
                </article>
            ) : ""}
            {props.blogs.length < 1 ? (
                <p>No blogs yet, sorry.</p>
            ) : (
                <div className="blogs">
                    {props.blogs.map((blog, index) => {
                        return <article key={index}>
                            <h3>{blog.title}</h3>
                            {blog.image === "" ? "" : (
                                <img src={blog.image} alt={blog.title}/>
                            )}
                            <p><em>{blog.date.slice(0, 16)}</em></p>
                            <p>{blog.text.slice(0, 120) + "..."} <span onClick={() => showBlog(index)}>Read more</span></p>
                        </article>
                    })}
                </div>
            )}
        </main>
    )
}
