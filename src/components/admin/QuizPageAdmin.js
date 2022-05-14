import React, { useEffect, useState } from "react";
import axiosBase from "../../api";
import Burger from "../Burger";
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
    <div className="choosequiz">
      <Burger />
      <div className="quiz-allquiz-admin">
        <h3>All AVAILABLE QUIZ</h3>
        {qns ? (
          //   {qns.length===0?(
          //       <div><h1>no question</h1></div>
          //   ):

          <div className="quizadmin-map">
            {qns.map((question, index) => {
              return <GetQuiz key={index} quiz={question}></GetQuiz>;
            })}
          </div>
        ) : (
          <div class="load load2">
            <div class="loading"></div>
            <p class="load-text">loading ...</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default QuizPageAdmin;
