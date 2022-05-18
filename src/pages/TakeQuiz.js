import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import axiosBase from "../api";
import next from "../assets/icons/next.png";
import prev from "../assets/icons/prev.png";
import Burger from "../components/Burger";
import QuizPage from "./QuizPage";

function TakeQuiz() {
  const [qns, setQns] = useState();
  const [active, setactive] = useState(0);
  const [answers, setanswers] = useState({});
  const [score, setScore] = useState();
  const [correction, setCorrection] = useState();
  const proRef = useRef();

  const setActive = (action = "next") => {
    console.log(active == qns.length - 1);
    if (action == "next" && active == qns.length - 1) {
      console.log("All question done");
      return;
    }
    if (action === "prev") {
      let v;
      active > 0 ? (v = active - 1) : (v = 0);
      setactive(v);
    } else {
      let v;
      v = active + 1;
      console.log(v);
      setactive(v);
    }
  };
  const { id } = useParams();
  useEffect(() => {
    if (proRef.current) {
      proRef.current.style.width = `${Math.floor(+1 / qns.length) * 100}%`;
    }
  }, [active]);
  const handleComple = async () => {
    console.log(answers);
    try {
      const res = await axiosBase.post("/quiz-check/" + id, { answers });
      console.log(res.data.score);
      setScore(res.data.text);
      setCorrection(res.data.answers);
      console.log(res.data)
    } catch (error) {
      console.log(error);
    }
  };
  const recordAnswer = (e, an) => {
    const question = qns[active]._id;
    // e.target.classList += "selectedAns";

    answers[question] = an;
    console.log(answers);
    setanswers(answers);
    console.log(answers);
  };
  useEffect(() => {
    const getQns = async () => {
      try {
        const res = await axiosBase.get("/quiz/" + id, {
          headers: { authorization: "Bearer " + localStorage.getItem("token") },
        });
        setQns(res.data.quiz.questions);
        console.log("test", res.data.quiz);
      } catch (error) {
        console.error(error);
      }
    };
    getQns();
  }, []);
  return (
    <>
     <Burger />
     <div className="takeQuiz">
     
     
      <div className="quiz-allquestions">
        {score && (
          <div>
            {" "}
            <h1 className="score">{score}</h1>{" "}
          </div>
        )}

        {correction && (
          <div className="res">
            {correction.map((item, index) => {
              return (
                <div
                  className={`result ${item.correct === true ? "correct" : "wrong"}`}
                >
                  <span>{item.qn}:</span>
                  <p className="true">True answer: <span>{item.answer}</span> </p>
                  <p>your answer: <span>{item.yourAnswer}</span> </p>
                </div>
              );
            })}
          </div>
        )}
        {qns ? (
          //   {qns.length===0?(
          //       <div><h1>no question</h1></div>
          //   ):

          <div className="question-map">
            <div className="p-div">
              <div className="progres" ref={proRef}>{`${active + 1}/ ${
                qns.length
              }`}</div>
            </div>

            <p className="question">
              Q<span>{active + 1}.</span> <span> {qns[active].question}</span>
            </p>
            <div className="answers">
              {qns[active].answers.map((an) => {
                return (
               
                  // <input type="radio" value="" onClick={(e) => recordAnswer(e, an)}>
                  //   {an}
                  // </input>
                  <button
                    onClick={(e) => recordAnswer(e, an)}
                    className="btn btn-primary"
                  >
                    {an}
                  </button>
                );
              })}
            </div>
            <div className="controll">
              <button
                onClick={(e) => {
                  setActive("prev");
                }}
              >
                <img src={prev} alt="" />
              </button>
              <button onClick={(e) => setActive("next")}>
                {" "}
                <img src={next} alt="" />{" "}
              </button>
            </div>
            {active == qns.length - 1 && (
              <button className="submit" onClick={(e) => handleComple()}>
                Submit
              </button>
            )}
          </div>
        ) : (
          <div class="load">
            <div class="loading"></div>
            <h3 class="load-text">Loading ...</h3>
          </div>
        )}
      </div>
    </div></>
    
  );
}

export default TakeQuiz;
