import React, { useState } from 'react';
import CreatePostForm from './Components/CreatePost/CreatePostForm'
import DisplayPosts from './Components/DisplayPosts/DisplayPosts'



function App() {

  const [entries, setEntries] = useState([{name: 'Jerry Milburn', post: 'Today was the best day to go to the beach!'}, {name: 'Tom Matthews', post: 'Heading to the track to burn some rubber!'}])

  function addNewEntry(entry){
    let tempEntries = [...entries, entry];
    setEntries(tempEntries);
  }
  return(
    <div className='contained-fluid'>
      <div className='row'>
        <h3 style={{margin: '1em'}}>Social
        <small className='text-muted'></small>Feed</h3>
        
          <div className='border-box'>
            <CreatePostForm addNewEntry={addNewEntry} />
          </div>
          <div className='border-box'>
            <DisplayPosts parentEntries={entries} />
          </div>
        
      </div>
    </div>
  )
}
export default App;

// 7 commits, like and dislike buttons that toggle, 3 components, pleasing interface