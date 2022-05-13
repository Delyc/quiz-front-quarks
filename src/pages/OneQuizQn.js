
import axiosBase from "../api";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";

function OneQuizQn() {
    const [qn, setQn] = useState();
   const { id } = useParams();
   useEffect(() => {
    const oneQuestion = async () => {
      try {
        const res = await axiosBase.get("/api/quiz/" + id, {
            headers: { authorization: "Bearer " + localStorage.getItem("token") },
        });
        console.log(res.data);
        setQn(res.data.data);
      } catch (error) {
        console.error(error);
      }
    };
    oneQuestion();
  }, []);

  return (
    <div>
         {qn ? (
        <div className="blog-one">
          <h2>{qn.question}</h2>
         
          
        </div>
      ) : (
        <h1>loading ....</h1>
      )}



    </div>
  )
}

export default OneQuizQn