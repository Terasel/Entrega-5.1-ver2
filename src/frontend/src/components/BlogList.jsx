import { useEffect, useState } from "react"
import Blog from "./Blog"
import { Outlet, Link } from "react-router-dom"

function BlogList() {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        async function fetchData() {
            const options = { method: 'GET' }
            const blogsResponse = await fetch('http://localhost:3000/api/blog', options)
            const blogsData = await blogsResponse.json()
            setBlogs(blogsData)
        }
        fetchData()
    }, [])
    return (
        <div>
            <h1>The blog app</h1>
            <button type="button"><Link to={`/userlist`}>User list</Link></button>
            <button type="button"><Link to={`/userpage/:id`}>User page</Link></button>
            <button type="button"><Link to={`/myblogs/:id`}>My blogs</Link></button>
            {
                blogs.map(blog => {
                    return (
                        <Blog key={blog.id} blog={blog} />
                    )
                })
            }
        </div>
    )
}

export default BlogList