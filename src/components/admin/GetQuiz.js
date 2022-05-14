import React, { useRef } from "react";
import { Link } from "react-router-dom";

const GetQuiz = ({ quiz }) => {
  const qnRef = useRef();

  return (
    <div className="allQuiz">
      <div className="subQuiz" ref={qnRef}>
        <details>
          <summary>{quiz.name}</summary>
          <div className="Link-buttons">
          <button className="action">
            {" "}
            
            <Link className="take-quiz" to={`/pick-qn/${quiz._id}`}>
              Set question
            </Link>
          </button>
        </div>
        </details>
        
       
      </div>
    </div>
  );
};

export default GetQuiz;
