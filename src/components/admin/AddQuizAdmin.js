import React, { useState } from "react";
import axiosBase from "../../api";
import { useNavigate } from "react-router-dom";
import Burger from "../Burger";


function AddQuizAdmin() {
  const navigate = useNavigate()
  const [name, setName] = useState();
  const [number, setNumber] = useState();
  const [err, setErr] = useState("");
    
  const createQuiz = async (data) => {
    
    try {
      const res = await axiosBase.post("/quiz", data,{ headers: { authorization: "Bearer " + localStorage.getItem("token") },
   
      });
      console.log(res)
    } catch (error) {
      console.error(error);
      setErr(error?.response?.data?.errors || error.message);
    }
  };

 
  const onSubmit = async(e) => {
    e.preventDefault();
    setName(e.target.name.value);
    setNumber(e.target.number.value);
  

    const postData = {
      name: e.target.name.value,
      number: e.target.number.value,
    };
    await createQuiz(postData);
    setName("");
    setNumber("");
    navigate("/add-qn-admin")
 
  };

  return (
    <div className="add-quiz-div">
    <Burger />
    <div className="signup-parent">
      
    <div className="add-par">
    <div className="glad">
      <h3>INSTRUCTIONS</h3>
      <p><li>Creating a quiz you need to specify quiz name which is web dev technology (e.g react)</li> </p>
      <p><li>After you need to specify the number of questions you need in your quize</li> </p>
      <p><li>Finally send</li></p>
    </div>

    <div className="add-quiz-">
    <h3>Add quiz</h3>
    <form action="" onSubmit={(e) => onSubmit(e)}>

      <p>{err}</p>
      <textarea name="name" placeholder="Quiz here ..." id="" cols="30" rows="10"></textarea>
      <input type="number" name="number" placeholder="number of questions"/>
        <button>Create quiz</button>
      </form>

    </div>

    </div>
    </div>

  
   
{/* 
<div className="addQuiz-">
<h1 className="quiz_h1">Add Quiz</h1>
  
      
      <div>

        
      </div>

    
    </div> */}
 
    
    </div>
    
  );
}

export default AddQuizAdmin;
