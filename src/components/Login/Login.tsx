import React, { useState } from "react";
import { userLogin } from "../../services/login.service";
import "./Login.scss";

const Login: React.FC<ILoginProps> = ({ loggedIn, setLoggedIn }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const login = userLogin({ email: email, password: password });
    login
      .then((response: any) => {
        console.log(response.result);
        setLoggedIn(true);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="login-page">
      <div className="login-img">
        <img
          src="https://t3.ftcdn.net/jpg/03/39/70/90/360_F_339709048_ZITR4wrVsOXCKdjHncdtabSNWpIhiaR7.jpg"
          alt=""
        />
      </div>
      <div className="login-card-container">
        <h1 className="login-title"> Welcome to APTCODER</h1>
        <form className="login-card" onSubmit={handleSubmit}>
          <div className="form-details">
            <label htmlFor="email" className="input-label">
              Enter Your E-mail:
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="input-box"
              // autoComplete="off"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-details">
            <label htmlFor="password" className="input-label">
              Enter Your Password:
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="input-box"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-login">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
