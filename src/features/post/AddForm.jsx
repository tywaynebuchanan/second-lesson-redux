import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { postAdded } from './postsSlice'
import { nanoid } from '@reduxjs/toolkit'


const AddForm = () => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const onTitleChange = e => setTitle(e.target.value);
    const onContentChange = e => setContent(e.target.value);
    const formHandler = (e)=>{
        e.preventDefault();
        if(title && content)
    {
        // eslint-disable-next-line no-undef
        dispatch(
            postAdded({
                id: nanoid(),
                title,
                content
            })
        )
        setTitle('')
        setContent('')
    }
}
  return (
    <div>
        <h1>Add a post</h1>
        <form>
            <input 
            value = {title}
            type="text" name="title" 
            placeholder="Title" 
            onChange = {onTitleChange}/>
            <input 
            type="text"
            value = {content}
             name="content"
            placeholder="Content" 
            onChange = {onContentChange}/>
            <button type="submit" onClick = {formHandler}>Add Post</button>
        </form>

    </div>
  )
}

export default AddForm;