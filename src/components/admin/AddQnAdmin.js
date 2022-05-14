import React, {useState} from 'react'
import axiosBase from '../../api';
import Burger from '../Burger';

function AddQnAdmin() {
    const [answers, setAnswers] = useState();
    const [valid, setValid] = useState(true)
    const [error, setError] = useState()
    const parseAnswers=(answers, rightAnswer)=>{
        let list = answers.split(",")
        if(list.lenght <2){
            setValid(false)
            setError("atleast two answers must be provided")
            return null

        }
        if(!list.includes(rightAnswer)){
            setValid(false)
            setError("right answer should be provided")
            return null
        }
        setValid(true)
        return list


    }
    const handleSubmit= async(e) =>{
        e.preventDefault();
        const data = {
            answers: e.target.answers.value,
            trueAnswer: e.target.trueAnswer.value,
            question: e.target.question.value,
        }
        
        const list = parseAnswers(data.answers, data.trueAnswer)
        if(!list){
            return
        }

        data.answers = list
        try {
            const res = await axiosBase.post("/api/quiz", data, {
              headers: { authorization: "Bearer " + localStorage.getItem("token") },
            });
            console.log(res);
          } catch (error) {
            console.error(error);
            setError(error?.response?.data?.errors || error.message);
          }
    }
  return (
    <div>
      <Burger />
      <div className="signup-parent">
      
      <div className="add-par">
      <div className="glad">
        <h3>INSTRUCTIONS</h3>
        <p><li>Create questions one by one and provide their answers</li> </p>
        <p><li>AEnsure answers provided are separated by comma</li> </p>
        <p><li>Ensure a tru answer provided is correct</li></p>
      </div>
  
      <div className="add-quiz- add-question-">
 
      <h1>Add question</h1>
        <p> {!valid && error}</p>
        <form action="" onSubmit={(e) => handleSubmit(e)}>
            
        <input type="text" name='question' placeholder='question'/>
        <p className='note'>N.B: Separate answers by comma (,)</p>
        <textarea name="answers" id="" colsf ="30" rows="10" placeholder='answers separated by comma(,)'></textarea>
        <input type="text" name='trueAnswer' placeholder='correct answer here'/>
        <button>Add question</button>
        </form>
     
  
      </div>
  
      </div>
      </div>
        


    </div>
  )
}

export default AddQnAdmin