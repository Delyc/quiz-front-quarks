import React, { useState, useEffect } from "react";
import axiosBase from "../api";
import OneQn from "../components/OneQn";

function AllQuiz() {
    const [qns, setQns] = useState();
    useEffect(() => {
        const getQns = async () => {
          try {
            const res = await axiosBase.get("/api/quiz",{
                headers: { authorization: "Bearer " + localStorage.getItem("token") },
              });
            setQns(res.data.data);
            console.log("test", res.data.data);
          } catch (error) {
            console.error(error);
          }
        };
        getQns();
      }, []);
  return (
    <div>
        <div className="blog-allblogs">
      {qns? ( 
        //   {qns.length===0?(
        //       <div><h1>no question</h1></div>
        //   ):

          
        
          <div className="blogs-map">
            {qns.map((question, index) => {
              return <OneQn key={index} question={question}></OneQn>;
            })}
          </div>
      
      ) : (
        <h1>Loading ......</h1>
      )}
    </div>
    </div>
  )
}

export default AllQuiz