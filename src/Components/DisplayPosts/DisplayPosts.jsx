
const DisplayPosts = (props) => {
    return(
        <table className="table">   
            <tbody>
            {props.parentEntries.map((entry, index) => {
                return (
                <tr key={index}>
                    <td>{entry.name}</td>
                    <td>{entry.post}</td>
                </tr>
                );
                })}
            </tbody>
        </table>
    );
}
// const green = "#00FF00";
// const red = "FF0000";
export default DisplayPosts;