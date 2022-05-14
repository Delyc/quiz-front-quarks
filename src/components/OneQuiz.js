import React, { useRef } from "react";
import { Link } from "react-router-dom";


const OneQn = ({ quiz }) => {
  const qnRef = useRef();

  return (
      <div className="allQuiz">
      
           <div className="subQuiz" ref={qnRef}>
             <details>
               <summary>{quiz.name}</summary>
               <div className="Link-buttons">
        <button className="action">
          {" "}
          <Link className="take-quiz" to={`/take-quiz/${quiz._id}`}>
            take Quiz
          </Link>
        </button>
       
      </div>

             </details>
      <p className="quiz-name"></p>
      
    </div>
      </div>
   
  );
};

export default OneQn;
