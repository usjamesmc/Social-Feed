import React, { useState } from 'react';

const PostForm = (props) => {

    const [name, setName] = useState('bob');
    const [post, setPost] = useState('');

    function handleSubmit(formEvent){
        formEvent.preventDefault();
        alert(`Name: ${name} Post: ${post}`);
    }
    return(
        <div className='border-box'>
            <form onSubmit={handleSubmit}>
            <div>
                <label>Name</label>
                <input type='text' onChange={(event) => setName(event.target.value)} value={name}/>
            </div>
                <label>Post</label>
                <input type='text' onChange={(event) => setPost(event.target.value)} value={post}/>
                <button type='submit'>Create</button>
            </form>
        </div>
    );
}
export default PostForm;