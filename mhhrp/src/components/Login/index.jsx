import React, { useState } from "react";
import OutlinedButton from "../common/Button";
import { useNavigate } from "react-router-dom";
import { RoutePaths } from "../../utils/routes";

const LoginCredentials = {
  username: "admin@mhhr.com",
  password: "admin",
};

const Login = () => {
  const navigate = useNavigate();

  const [loginDetails, setLoginDetails] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleInputChange = (key, value) => {
    setLoginDetails({ ...loginDetails, [key]: value });
  };

  const handleButtonClick = () => {
    if (
      loginDetails.username === LoginCredentials.username &&
      loginDetails.password === LoginCredentials.password
    ) {
      localStorage.setItem("isValidated", true);
      navigate(RoutePaths.home)
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="login-component">
      <div className="login-header">
        <p className="header">MHHR Properties</p>
      </div>
      <div className="login-info-container">
        <p className="sub-header">Login</p>

        <input
          placeholder="Username"
          className="input-container"
          value={loginDetails.username}
          onChange={(e) => {
            handleInputChange("username", e.target.value);
          }}
        />

        <input
          placeholder="Password"
          className="input-container"
          value={loginDetails.password}
          type="password"
          onChange={(e) => {
            handleInputChange("password", e.target.value);
          }}
        />
        <OutlinedButton
          btnTitle="Login"
          className="button"
          onClick={handleButtonClick}
        />

        {error ? <div className="error-message">{error}</div> : null}
      </div>
    </div>
  );
};

export default Login;
