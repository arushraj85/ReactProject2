import UserList from './components/userList/userList';
import './App.css';
import Login from './components/Login/Login';
import {useState} from 'react';



function App() {

  const[isLoggedIn,changeIsLoggedIn]=useState(false);
  function changeHandler(){
    if(isLoggedIn){
      changeIsLoggedIn(false) 
    }
    else{
      changeIsLoggedIn(true)
    }
    }

  return <div>
  <button onClick={changeHandler}>Change</button>
   {
    (isLoggedIn)? <UserList/> :<Login/>
   }
   </div>
}

export default App;
