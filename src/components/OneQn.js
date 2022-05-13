import React, { useRef } from "react";
import axiosBase from "../api";
import { Link }  from "react-router-dom";
const OneQn = ({ question }) => {
    const qnRef = useRef();
    const deleteQn = async() => {
      
      console.log("delete");
      const del = window.confirm("Are you sure? This will be deleted.");
      console.log(del);
      if (del) {
        // Perform query
        try {
          const res = await axiosBase.delete("/api/quiz/" + question._id, {
            headers: { authorization: "Bearer " + localStorage.getItem("token") },
        });
          
        } catch (error) {
          console.error(error);
        }
        if (qnRef.current) {
          console.log(qnRef.current);
          qnRef.current.className = "d-none";
        }
      } else {
        console.log("Cancelled");
      }
    };
    return (
      <div className="single-blog" ref={qnRef}>
        <p>
          {question.question}
        </p>
        <div className="Link-buttons">
          <button className="action">
            {" "}
            <Link className="" to={`/oneqn/${question._id}`}> 
            more
         
            </Link>
          </button>
          <button className="action">
            {" "}
            <Link className="" to={`/editqn/${question._id}`}>
            edit
            </Link>
          </button>
          <button onClick={(e) => deleteQn()} className="action">
            {" "}
            delete
          </button>
        </div>
      </div>
    );
  };
  
export default OneQn