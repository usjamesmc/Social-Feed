
const DisplayPosts = (props) => {
    return(
        <table className="table">   
            <tbody>
            {props.parentEntries.map((entry) => {
                return (
                <div>
                    <div>
                        <div>{entry.name}</div>
                    </div>
                    <div> <div>{entry.post}</div>
                    </div>
                </div>
                );
                })}
            </tbody>
        </table>
    );
}
export default DisplayPosts;