function Todo(props){
    const btnText = "Delete";

    function handleDelete(){
        console.log("clicked: " + props.text);
    }

    return (
        <div className="card">
            <h2>{props.text}</h2>
            <div className="actions">
                <button className="btn" onClick={handleDelete}>{btnText}</button>
            </div>
        </div>
    );
}

/*
Make exportable: https://stackoverflow.com/questions/21117160/what-is-export-default-in-javascript
 */
export default Todo;