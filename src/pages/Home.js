import React from "react";
import { Navbar } from "../components/navbar/Navbar";
import QuizPage from "./QuizPage";
import { Link } from "react-router-dom";
import Burger from "../components/Burger";

function Home() {
  return (
    <div>
        <div className="b-nav">
        <Burger />
        <Navbar />
        </div>
        
      {/*  */}
      <div className="intro">
    
        <div className="quiz-nav">
    
        
          <div className="nav-inst">
            

            <div className="instr">
              <div className="test">
                <h2>Welcome to the Quiz app</h2>
                <p className="test-know">
                  Test your knowledge in different web dev technologies
                </p>

                <h3 className="dir">How To get started</h3>
                <details>
                  <summary>Want to take quiz</summary>
                  <div className="steps">
                    <div className="step">
                      <h3>Step 1: </h3>
                      <span>
                        You first need to be authorized by creating a user
                        account
                      </span>
                    </div>
                    <div className="step">
                      <h3>Step 2: </h3>
                      <span>
                        On the menu on the left side, select <strong className="create-">take quiz</strong> , you will be taken to a page.
                      </span>
                    </div>

                    
                    <div className="step">
                      <h3>Step 3:</h3>
                      <span>
                        After getting to a page with a list of all quiz. select one of your choice
                      </span>
                    </div>
                  </div>
                </details>
                <details>
                  <summary>Want to create quiz</summary>
                  <div className="steps">
                    <div className="step">
                      <h3>Step 1: </h3>
                      <span>
                        You first need to be authorized by creating a user
                        account
                      </span>
                    </div>
                    <div className="step">
                      <h3>Step 2: </h3>
                      <span>
                        {" "}
                        On the menu on the left side, select <strong className="create-">create quiz</strong>, provide a question and answers following instructions
                        
                        <p className="nb">
                          {" "}
                          N:B:{" "}
                          <span>
                            make sure you provide right naswers for your
                            question
                          </span>{" "}
                        </p>
                      </span>
                    </div>

                    <div className="step">
                      <h3>Step 3:</h3>{" "}
                      <span>
                          After creating quiz, you'll be directed to create questions, you can create questions to be in quiz or skip it and be taken to all quiz page and click on assign questions and pick questions to be in your quiz
                       
                        
                      </span>
                    </div>
                    
                  </div>
                </details>
                <details>
                  <summary>App quick test without creating account</summary>
                  <div className="steps">
                    <div className="step">
                      <h3>Step 1: </h3>
                      <span>
                        Don't want to create an account, worry less
                      </span>
                    </div>
                    <div className="step">
                      <h3>Step 2: </h3>
                      <span>
                        Head to  <Link className="create-" to="/login">
                          Login 
                        </Link>page  and use the following credentials
                      </span>
                    </div>

                    <div className="step">
                      <h3>Step 4:</h3>{" "}
                      <span>
                        Password: 12345678
                        Email: delyce@gmail.com
                      </span>
                    </div>
                   
                  </div>
                </details>

                {/* <h3 className="sub">
                  Once submitted, wait for your grades and check them
                </h3> */}
                <h2 className="enjoy">Enjoy !!!</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
