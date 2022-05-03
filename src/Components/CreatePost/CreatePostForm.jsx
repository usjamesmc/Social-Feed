import React, { useState } from 'react';


const PostForm = (props) => {

    const [name, setName] = useState('');
    const [post, setPost] = useState('');
    

    function handleSubmit(event){
        event.preventDefault();
        let newEntry = {
            name: name,
            post: post
        };
        console.log(newEntry);
        props.addNewEntry(newEntry)
    }
    return(
        <div className='border-box'>
            <form onSubmit={handleSubmit}>
            <div>
                <label>Name</label>
                <input type='text' onChange={(event) => setName(event.target.value)}/>
            </div>
                <label>Post</label>
                <input type='text' onChange={(event) => setPost(event.target.value)}/>
                <button type='submit'>Create</button>
            </form>
        </div>
    );
}
export default PostForm;