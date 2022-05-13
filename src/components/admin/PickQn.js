import React, { useEffect, useState } from "react";
import axiosBase from "../../api";
import { useParams } from "react-router-dom";

function PickQn() {
  // State with list of all checked item

  const [checked, setChecked] = useState([]);
  const [checkList, setCheckList] = useState([]);
  const [questions, setquestions] = useState();
  const [error, setError] = useState()

  // Add/Remove checked item from list
  const handleCheck = (event) => {
    var updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
  };

  // Generate string of checked items
  const checkedItems = checked.length
    ? checked.reduce((total, item) => {
        return total + ", " + item;
      })
    : "";

  // Return classes based on whether item is checked
  var isChecked = (item) =>
    checked.includes(item) ? "checked-item" : "not-checked-item";
    const { id } = useParams();
    const handleSubmit = async(e)=>{
        if(checked.length < 2){
            window.alert("please select atleast two questions")
            return 

        }
        

        let qnIds =[]
        checked.forEach((item) => {
            const index = checkList.indexOf(item)
            qnIds.push(questions[index]._id)
            
        } )
        console.log(qnIds)

        try {
            const res = await axiosBase.put("/api/quiz/pickquiz/" +id, {questions:qnIds});
            console.log(res)
          } catch (error) {
            console.error(error);
            setError(error?.response?.data?.errors || error.message);
          }


    }

  useEffect(() => {
    const allQuestions = async () => {
      try {
        const res = await axiosBase.get("/api/quiz", {
          headers: { authorization: "Bearer " + localStorage.getItem("token") },
        });
        console.log(res.data.data);
        const names = [res.data.data.map((qn) => qn.question)];
        console.log(names);
        setCheckList(names[0]);
        setquestions(res.data.data);
      } catch (error) {
        console.error(error);
      }
    };
    allQuestions();
  }, []);

  return (
    <div className="app">
      <div className="checkList">
        <div className="title">Your CheckList:</div>
        {questions && (
          <div className="list-container">
            {checkList.map((item, index) => (
              <div key={index}>
                <input value={item} type="checkbox" onChange={handleCheck} />
                <span className={isChecked(item)}>{item}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      <button onClick={handleSubmit}>{`Add : ${checkedItems.length} to this quiz`}</button>
    </div>
  );
}

export default PickQn;
