import React, { useState } from "react";
import axiosBase from "../api.js";

function CreateQuiz() {
  const [qn, setQn] = useState();
  const [err, setErr] = useState("");
  const createQn = async (data) => {
    try {
      const res = await axiosBase.post("/api/quiz", data, {
        headers: { authorization: "Bearer " + localStorage.getItem("token") },
      });
      console.log(res);
    } catch (error) {
      console.error(error);
      setErr(error?.response?.data?.errors || error.message);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setQn(e.target.question.value);
    console.log(e.target.question.value);

    const postData = {
      question: e.target.question.value,
    };
    await createQn(postData);
    setQn("");
  };
  return (
    <div>
      <h1>Quiz</h1>
      <form action="" onSubmit={(e) => onSubmit(e)}>
        <textarea
          name="question"
          id=""
          placeholder="question here"
          cols="30"
          rows="10"
        ></textarea>
        <button>post</button>
      </form>
    </div>
  );
}

export default CreateQuiz;
