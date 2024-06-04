import { useState } from "react";
import "./Todo.css";  
function Todo() {
    let [arr, setArr] = useState([]);

    const [work, setWork] = useState("");
    const handleChange = (el) => {
        setWork(el.target.value);
    };

    const handleClick = () => {
        let obj = {
            task: work,
            iscomp: false
        };
        setArr([...arr, obj]);
        setWork(""); 
    };

    

    return (
        <div className="todo-container">
            <h1>Todo List</h1>
            <input type="text" value={work} onChange={handleChange} placeholder="Enter Student Name" className="todo-input"/>
            <button onClick={handleClick} className="todo-button">Submit</button>
            <br /><br />

            <h3>Student Placement List</h3>

            {
            arr.map((el) => {
                return (
                    <div className="todo-item">
                        <table border={1} align="center" className="todo-table">
                            <tbody>
                                <tr>
                                    <td>{el.task} - {el.iscomp ? "Completed" : "Incomplete"}</td>
                                    <td>
                                        <button   className="todo-delete-button">
                                            Delete
                                        </button>
                                    </td>
                                    <td>
                                        <button   className="todo-edit-button">
                                            {el.iscomp ? "Undo" : "Complete"}
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                );
            })}
        </div>
    );
}

export default Todo;
