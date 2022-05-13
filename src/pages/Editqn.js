import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosBase from "../api";

function Editqn() {
    const [qust, setQust] = useState();
  const [question, setquestion] = useState();
  const { id } = useParams();

  useEffect(() => {
    const oneQn = async () => {
      try {
        const res = await axiosBase.get("/api/quiz/" + id, {
            headers: { authorization: "Bearer " + localStorage.getItem("token") },
        });
        console.log(res.data);
        setQust(res.data.data.question);
        setquestion(res.data.data.question);
      } catch (error) {
        console.error(error);
      }
    };
    oneQn();
  }, []);

  const editQn = async (data) => {
    try {
      const res = await axiosBase.put("/api/quiz/" + id, data, {
        headers: { authorization: "Bearer " + localStorage.getItem("token") },
      });
   
    } catch (error) {
      console.error(error);
    }
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    setquestion(e.target.question.value);
    console.log(e.target.question.value);

    const postData = {
      question: e.target.question.value,
    };
    await editQn(postData);
    setquestion("");
  };

  const onChangeCap = (e) => {
    setquestion(e.target.value);
  };

  return (
    <div>
        {qust ? (
        <div className="edit-form">
          <form action="" onSubmit={(e) => onSubmit(e)}>
            
            <textarea onChange={onChangeCap}
              value={question}
              name="question"
              id=""cols="30" rows="10"></textarea>
            <button>edit</button>
          </form>
        </div>
      ) : (
        <h1>loading ......</h1>
      )}
    </div>
  )
}

export default Editqn