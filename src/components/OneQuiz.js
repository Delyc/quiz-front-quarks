import React, { useRef } from "react";
import { Link } from "react-router-dom";


const OneQn = ({ quiz }) => {
  const qnRef = useRef();

  return (
      <div className="allQuiz">
      
           <div className="subQuiz" ref={qnRef}>
      <p className="quiz-name">{quiz.name}</p>
      <div className="Link-buttons">
        <button className="action">
          {" "}
          <Link className="take-quiz" to={`/take-quiz/${quiz._id}`}>
            take Quiz
          </Link>
        </button>
       
      </div>
    </div>
      </div>
   
  );
};

export default OneQn;
