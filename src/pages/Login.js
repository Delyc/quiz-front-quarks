import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "../api";


export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [err, setErr] = useState("");
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const [password, setPassword] = useState("");
  const onChangePass = (e) => {
    setPassword(e.target.value);
  };
  const loginUser = async (data) => {
    const res = await axios.post("api/users/login", data);
    console.log(res.data.data);
    localStorage.setItem("user", JSON.stringify(data));
    localStorage.setItem("token", res.data.authtoken);
  };
  const { search } = useLocation();
  const to = new URLSearchParams(search).get("next");

  const onSubmit = async (e) => {
    e.preventDefault();
    const loginData = {
      email: email,
      password: password,
    };
    setEmail("");
    setPassword("");
    try {
      await loginUser(loginData);
      navigate(to || "/sign");
    } catch (error) {
      setErr(error?.response?.data?.errors || error.message);
    }
  };

  return (
    <>
    
    <div className="signup-parent">
      
    <div className="sign-par">
    <div className="glad">
      <h3>Glad to have you back!</h3>
      <p>Simple things should be simple, complex things should be possible, test your knowledge</p>
    </div>

    <div className="login-">
      <form>
      <h1 className="title">Login</h1>
      <div  className="err">
      <p className="login-req">{!to ? "" : "Login is required"}</p>
          <p>{err}</p>
      </div>
     
      <input
            type="email"
            name="email"
            value={email}
            onChange={onChangeEmail}
            placeholder="Email"
          />
          <input
            type="password"
            name="password"
            value={password}
            onChange={onChangePass}
            placeholder="Password"
          />
      <button className="signup-btn" onClick={(e) => onSubmit(e)} type="submit">
        Submit
      </button>
      <p>Already have an account? <span>Login</span> </p>
    </form>

    </div>

    </div>
    </div>
   
    
 
    </>
    
    
  );
}
