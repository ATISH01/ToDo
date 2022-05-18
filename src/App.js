import logo from './logo.svg';
import './App.css';
import Navbar from './Pages/Navbar';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import ToDo from './Pages/ToDo';

function App() {
  return (
    <div>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/signup' element={<SignUp></SignUp>}></Route>
          <Route path='/todo' element={<ToDo></ToDo>}></Route>
        </Routes>
        {/* <Login></Login>
        <SignUp></SignUp> */}
    </div>
  );
}

export default App;
