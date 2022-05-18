import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Tasks from './Tasks';

const ToDo = () => {
    const [tasks, setTasks]=useState([])
    const { register, formState: { errors }, handleSubmit,reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = 'https://safe-escarpment-62914.herokuapp.com/tasks';
        fetch(url,{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(result=>{
           console.log(result);
           fetch('https://safe-escarpment-62914.herokuapp.com/tasks')
           .then(res=>res.json())
           .then(data=>setTasks(data))
           reset()
        })
  
    }

    const handleDelete = id =>{
            const url = `https://safe-escarpment-62914.herokuapp.com/tasks/${id}`;
                fetch(url,{
                    method:"DELETE"
                })
                .then(res=>res.json())
                .then(data=>{
                    console.log(data);
                    const remaining = tasks.filter(service => service._id !== id);
                setTasks(remaining);
                })
        
    }
    return (
        <div className='flex h-screen justify-center items-center'>
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="text-center text-2xl font-bold">ToDo</h2>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Task</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Your task"
                            className="input input-bordered w-full max-w-xs"
                            {...register("task", {
                                required: {
                                    value: true,
                                    message: 'Task is Required'
                                }
                            })}
                        />
                        <div className='my-6'>
                            <label className="label">
                            <span className="label-text">Task Description</span>
                        </label>
                        <textarea
                            type="text"
                            placeholder="Your task"
                            className="input input-bordered w-full max-w-xs "
                            {...register("description", {
                                required: {
                                    value: true,
                                    message: 'Description is Required'
                                }
                            })}
                        />
                        </div>
                        
                    </div>
                    
                    <input className='btn w-full max-w-xs text-white' type="submit" value="add" />
                    
                </form>  
                <div className='my-2'>
                        {tasks.map(task=><Tasks task={task} handleDelete={handleDelete} key={task._id}></Tasks>
                        )}
                    </div> 
            </div>
        </div>
    </div> 
    );
};

export default ToDo;