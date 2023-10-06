import UserList from "./components/userList/userList";
import "./App.css";
import Login from "./components/Login/Login";
import { useState } from "react";

function App() {
  const [isLoggedIn, changeIsLoggedIn] = useState(false);
  
  function onLogin() {
    changeIsLoggedIn(true);
  }

  function onLogOut() {
    changeIsLoggedIn(false);
  }

  return <div>{isLoggedIn ? <UserList onLogOut={onLogOut} /> : <Login onLogin={onLogin} />}</div>;
}

export default App;
