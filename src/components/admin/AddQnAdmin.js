import React, {useState} from 'react'
import axiosBase from '../../api';

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
        <h1>Add question</h1>
        <p> {!valid && error}</p>
        <form action="" onSubmit={(e) => handleSubmit(e)}>
            
        <input type="text" name='question'/>
        <p>separate answers by comma (,)</p>
        <textarea name="answers" id="" colsf ="30" rows="10"></textarea>
        <input type="text" name='trueAnswer' />
        <button>submit</button>
        </form>


    </div>
  )
}

export default AddQnAdmin