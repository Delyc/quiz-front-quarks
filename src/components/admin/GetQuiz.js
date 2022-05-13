import React, { useRef } from "react";
import { Link } from "react-router-dom";

const GetQuiz = ({ quiz }) => {
  const qnRef = useRef();

  return (
    <div className="allQuiz">
      <div className="subQuiz" ref={qnRef}>
        <p>{quiz.name}</p>
        <div className="Link-buttons">
          <button className="action">
            {" "}
            <Link className="take-quiz" to={`/qn-inquiz-admin/${quiz._id}`}>
              take Quiz
            </Link>
            <Link className="take-quiz" to={`/pick-qn/${quiz._id}`}>
              assign question
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetQuiz;
