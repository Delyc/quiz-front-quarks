import React, { useState } from "react";
import axiosBase from "../../api";
import { useNavigate } from "react-router-dom";


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
    navigate("/sign")
 
  };

  return (
    <>

    <h1 className="blogs_h1">Add Quiz</h1>
   

<div className="addBlog">
  
      <form action="" onSubmit={(e) => onSubmit(e)}>
      <p>{err}</p>
      <textarea name="name" placeholder="Post here...." id="" cols="30" rows="10"></textarea>
      <input type="number" name="number" />
        <button>add</button>
      </form>
      <div>

        
      </div>

    
    </div>
 
    
    </>
    
  );
}

export default AddQuizAdmin;
