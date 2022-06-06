import React from 'react'
import { useSelector } from 'react-redux'

const PoststList = () => {
    const posts = useSelector(state => state.posts)

    const renderPosts = posts.map(post =>(
        <article key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content.substring(0,100)}</p>
            </article>
    ))

    
    return (
        <div>
         {renderPosts}   
        </div>
    )
}

export default PoststList
