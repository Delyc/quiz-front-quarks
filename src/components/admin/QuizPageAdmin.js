import React, { useEffect, useState } from "react";
import axiosBase from "../../api";
import GetQuiz from "./GetQuiz";

function QuizPageAdmin() {
  const [qns, setQns] = useState();
  useEffect(() => {
    const getQns = async () => {
      try {
        const res = await axiosBase.get("/quiz", {
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
        {qns ? (
          //   {qns.length===0?(
          //       <div><h1>no question</h1></div>
          //   ):

          <div className="blogs-map">
            {qns.map((question, index) => {
              return <GetQuiz key={index} quiz={question}></GetQuiz>;
            })}
          </div>
        ) : (
          <h1>Loading ......</h1>
        )}
      </div>
    </div>
  );
}

export default QuizPageAdmin;
