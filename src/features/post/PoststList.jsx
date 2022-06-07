import React from 'react'
import { useSelector } from 'react-redux'
import { selectallPosts } from './postsSlice'

const PoststList = () => {
    const posts = useSelector(selectallPosts)

    const renderPosts = posts.map(post =>(
        <article key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content.substring(0,100)}</p>
            </article>
    ))

    
    return (
        <div>
            <h1>Posts</h1>
         {renderPosts}   
        </div>
    )
}

export default PoststList
