import axios from "axios";
import axiosBase from "../api";
import React, { useState } from "react";
import {useNavigate} from "react-router-dom"



export default function Signup() {
  const navigate = useNavigate();
  const [firstName, setfirstName] = useState("");
  const onChangefirstName = (e) => {
    setfirstName(e.target.value);
  };
  const [secondName, setsecondName] = useState("");
  const onChangesecondName = (e) => {
    setsecondName(e.target.value);
  };

  const [email, setEmail] = useState("");
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const [password, setPassword] = useState("");
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const createUser = async (data) => {
    try {
      const res = axiosBase.post("/api/users", data);
    } catch (error) {
      console.error(error);
    }
  };

  const onSubmit = (e) => {
    setfirstName("");
    setsecondName("");
    setEmail("");
    setPassword("");
    e.preventDefault();
    const regData = {
      firstName: firstName,
      email: email,
      password: password,
      secondName: secondName,
    };
    createUser(regData);
    console.log(regData)
    navigate('/login')

  };
  return (
    <>
    
    <div className="signup-parent">
      
    <div className="sign-par">
    <div className="glad">
      <h3>Glad to see you!</h3>
      <p>Simple things should be simple, complex things should be possible, test your knowledge</p>
    </div>

    <div className="login-">
      <form>
      <h1 className="title">Signup</h1>
      <input
        type="text"
        value={firstName}
        onChange={onChangefirstName}
        name="firstName"
        placeholder="firstName"
      />
      <input
        type="text"
        value={secondName}
        onChange={onChangesecondName}
        name="secondName"
        placeholder="secondName"
      />
      <input
        type="email"
        value={email}
        onChange={onChangeEmail}
        name="email"
        placeholder="Email"
      />

      <input
        type="password"
        value={password}
        onChange={onChangePassword}
        name="password"
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
