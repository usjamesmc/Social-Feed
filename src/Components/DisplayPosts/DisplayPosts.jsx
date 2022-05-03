const DisplayPosts = (props) => {


    return(
        <table className="table">   
            <tbody>
            {props.parentEntries.map((entry, index) => {
                return (
                <tr key={index}>
                    <td>{entry.name}</td>
                    <td>{entry.post}</td>
                    <button className="like-button" onClick={onclick}>
                        Like
                    </button>
                    <button className="dislike-button" onClick={onclick}>
                        Dislike
                    </button>
                </tr>
                );
                })}
            </tbody>
        </table>
    );
}

export default DisplayPosts;