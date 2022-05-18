import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import './Task.css'

const Tasks = ({ task, handleDelete }) => {
    const [confirm, setConfirm] = useState(true)
    const confirmButton = (state) => {
        // setConfirm(state)
        setConfirm(prevCheck => !prevCheck);
        console.log(confirm);
        alert('Confirmed')

    }
    return (
        <div className='p-2 border-2 rounded mb-1'>
            <div className={confirm ? "" : "lineThrough"}>
                <h1>Task:{task.task}</h1>
                <p>Description:{task.description}</p>
            </div>

            <button className={confirm ? "btn btn-xs" : "btn btn-xs btn-accent"} onClick={() => confirmButton(true)} >Complete</button>
            <button onClick={() => handleDelete(task._id)} class="btn btn-xs ml-3">Delete</button>
            
        </div>
    );
};

export default Tasks;