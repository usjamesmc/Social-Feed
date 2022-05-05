import './DisplayPosts.css'
const DisplayPosts = (props) => {
    
    return(
        <table className='table'>   
            <tbody>
            {props.parentEntries.map((entry, index) => {
                return (
                <tr key={index}>
                    <td>{entry.name}</td>
                    <td>{entry.post}</td>
                    <td> 
                        <button id='Like'>Like</button>
                        <button id='Dislike'>Dislike</button>
                    </td>
                </tr>
                );
                })}
            </tbody>
        </table>
    );  
}
export default DisplayPosts;