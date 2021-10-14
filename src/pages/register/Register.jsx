import "./register.css";
export default function Register() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Societal Beings</h3>
          <span className="loginDesc">
            Connect with all fellows beings around the globe on Societal Beings.
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Username" className="loginInput" />
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <input placeholder="Password Again" className="loginInput" />
            <button className="loginButton">Sign Up</button>

            <button className="loginRegisterButton">LogIn</button>
          </div>
        </div>
      </div>
    </div>
  );
}
