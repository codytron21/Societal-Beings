import "./register.css";
import { useRef } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const history = useHistory();
  const handleClick = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("passwords dont match!");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
        passwordAgain: passwordAgain.current.value,
      };
      try {
        await axios.post("/auth/register", user);
        history.push("/login");
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <div className="login">
      <form className="loginWrapper" onSubmit={handleClick}>
        <div className="loginLeft">
          <h3 className="loginLogo">Societal Beings</h3>
          <span className="loginDesc">
            Connect with all fellows beings around the globe on Societal Beings.
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input
              placeholder="Username"
              type="text"
              required
              ref={username}
              className="loginInput"
            />
            <input
              placeholder="Email"
              type="email"
              required
              ref={email}
              className="loginInput"
            />
            <input
              placeholder="Password"
              type="password"
              required
              minLength="6"
              ref={password}
              className="loginInput"
            />
            <input
              placeholder="Password Again"
              type="password"
              required
              minLength="6"
              ref={passwordAgain}
              className="loginInput"
            />
            <button className="loginButton">Sign Up</button>

            <button className="loginRegisterButton">LogIn</button>
          </div>
        </div>
      </form>
    </div>
  );
}
