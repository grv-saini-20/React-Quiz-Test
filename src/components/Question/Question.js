import React, { useContext, useState } from 'react'
import {QuestionContext} from "../../context/QuestionContext";
import "./Question.css";

function Question({question, options, correctAnswer, handleNext }) {
    const [selectedValue, setSelectedValue] = useState("");
    const {addCorrectAnswer} = useContext(QuestionContext);

    const handleChange = (e) => {
        setSelectedValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(selectedValue === correctAnswer) {
            addCorrectAnswer(true)
        }
        setSelectedValue("")
        handleNext()
    }
  return (
    <form className='question-form' onSubmit={handleSubmit}>
        <h1 className='question'>{decodeURIComponent(question)}</h1>
        <div className='options'>
        {options.map((option,i)=>(
        <div key={i} className="option">    
        <input className='option-input' id={option} name="capital" type="radio" value={option} checked={selectedValue === option} onChange={handleChange} />
        <label className='option-value' htmlFor={option}>{option}</label>
        </div>
        ))}
        </div>
        <h1 className='status'>{!selectedValue ? "" : selectedValue === correctAnswer ? "Correct!" : "Sorry!"}</h1>
        <button className='btn' type='submit'>Next Question</button>
    </form>
  )
}

export default Question;