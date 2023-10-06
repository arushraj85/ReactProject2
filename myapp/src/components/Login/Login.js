import "./Login.css";

function Login(props) {
  function onClickHandler(e) {
    console.log("onClickhanlder clicked");
    e.preventDefault();
    props.onLogin();
  }
  return (
    <div className="loginPage">
      <h1>Login Page</h1>
      <div className="loginFormBox">
        <form className="loginForm">
          <div>
            <label id="username">Username</label>
            <input type="text" placeholder="username"></input>
          </div>
          <div>
            <label id="password">Password</label>
            <input type="password" placeholder="password"></input>
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
