import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigation=useNavigate()
    const navigate=()=>{
        navigation('/todo')
    }
    return (
        <div className='text-center'>
            <h1 className='text-center my-10'>Go to toDo</h1>
            <button onClick={navigate} class="btn btn-active btn-primary">To Do</button>
        </div>
    );
};

export default Home;