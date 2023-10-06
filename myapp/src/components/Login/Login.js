import "./Login.css";
import { useState } from "react";

function Login(props) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const userDetails = { userName, password };

  function onClickHandler(e) {
    console.log("Login button is clicked");
    e.preventDefault();
    console.log("calling backend API with details", userDetails);
    setTimeout(() => {
      const isValidCredential = true;
      if (isValidCredential) {
        props.onLogin();
      } 
    }, 2000);
  }

  const onUserNameChange = (e) => {
    console.log(e.target.value);
    setUserName(e.target.value);
  };

  const onPasswordChange = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
  };

  return (
    <div className="loginPage">
      <h1>Login Page</h1>
      <div className="loginFormBox">
        <form className="loginForm">
          <div>
            <label id="username">Username</label>
            <input
              onChange={onUserNameChange}
              value={userName}
              type="text"
              placeholder="username"
            ></input>
          </div>
          <div>
            <label id="password">Password</label>
            <input
              onChange={onPasswordChange}
              value={password}
              type="password"
              placeholder="password"
            ></input>
          </div>
          <div>
            <button onClick={onClickHandler} type="submit">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
