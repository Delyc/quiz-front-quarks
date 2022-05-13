import { setSelectionRange } from "@testing-library/user-event/dist/utils";
import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import axiosBase from "../../api";
import { Link } from "react-router-dom";


import prev from "../../assets/icons/prev.png"
import next from "../../assets/icons/next.png"


function TakeQuizAdmin() {
  const [qns, setQns] = useState();
  const [active, setactive] = useState(0);
  const [answers, setanswers] = useState({});
  const [score, setScore] = useState()
  const proRef = useRef();
  const postRef =useRef()

  const deleteQn = async() => {
    
    console.log("delete");
    const del = window.confirm("Are you sure? This will be deleted.");
    console.log(del);
    if (del) {
      // Perform query
      try {
        const res = await axiosBase.delete("/api/quiz/" +id, {
            headers: { authorization: "Bearer " + localStorage.getItem("token") },
        });
        
      } catch (error) {
        console.error(error);
      }
      if (postRef.current) {
        console.log(postRef.current);
        postRef.current.className = "d-none";
      }
    } else {
      console.log("Cancelled");
    }
  };



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
      setScore(res.data.text)


    } catch (error) {
        console.log(error)
    }
  };
  const recordAnswer = (e, an) => {
    const question = qns[active]._id;

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
    <div>
      <div className="quiz-allquestions">
          {score && <h1>{score}</h1>}
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
              Q<span>{active + 1}.</span> <span> { qns[active].question}</span>
            </p>
            <div className="answers">
              {qns[active].answers.map((an) => {
                return (
                  <button
                    onClick={(e) => recordAnswer(e, an)}
                    className="btn btn-primary"
                  >
                    {an}
                  </button>
                );
              })}
            </div>
            <button>
            <Link className="" to={`/edit-qn/${questions._id}`}> edit </Link></button>

            <button onClick={(e) => deleteQn()}>
            delete </button>
           
            <div className="controll">
              <button
                onClick={(e) => {
                  setActive("prev");
                }}
              >
                <img src={prev} alt="" />
              </button>
              <button onClick={(e) => setActive("next")}> <img src={next} alt="" /> </button>
            </div>
            {active == qns.length - 1 && (
              <button className="submit" onClick={(e) => handleComple()}>Submit</button>
            )}
          </div>
        ) : (
          <h1>Loading ......</h1>
        )}
      </div>
    </div>
  );
}

export default TakeQuizAdmin;
