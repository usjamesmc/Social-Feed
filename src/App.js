import React, { useState } from 'react';
import CreatePostForm from './Components/CreatePost/CreatePostForm'
import DisplayPosts from './Components/DisplayPosts/DisplayPosts'

function App() {

  const [entries, setEntries] = useState([{name: 'Jerry Milburn', post: 'Today was the best day to go to the beach!'}])

  function addNewEntry(entry){
    let tempEntries = [...entries, entry];
    setEntries(tempEntries);
  }
  return(
    <div classnName='contained-fluid'>
      <div className='row'>
        <h3 style={{margin: '1em'}}>Social
        <small className='text-muted'></small>Feed</h3>
        
          <div className='border-box'>
            <CreatePostForm parentEntries={addNewEntry} />
          </div>
          <div className='border-box'>
            <DisplayPosts parentEntries={entries} />
          </div>
        
      </div>
    </div>
  )
}
export default App;

// 7 commits, display all posts, like and dislike buttons that toggle, form, 3 components, pleasing interface