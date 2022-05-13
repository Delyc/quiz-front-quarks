import React, { useEffect, useState } from "react";
import axiosBase from "../api";
import OneQuiz from "../components/OneQuiz.js";

function QuizPage() {
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
          

          <div className="blogs-map">
            {qns.map((question, index) => {
              return <OneQuiz key={index} quiz={question}></OneQuiz>;
            })}
          </div>
        ) : (
          <h1>Loading ......</h1>
        )}
      </div>
    </div>
  );
}

export default QuizPage;
