import React, { useContext, useState } from 'react'
import {QuestionContext} from "../../context/QuestionContext";
import "./Question.css";

function Question({question, options, correctAnswer, handleNext, questionsLength }) {
    const [selectedValue, setSelectedValue] = useState("");
    const [isSelected, setIsSelected] = useState(false);
    const [questionIndex, setQuestionIndex] = useState(0);
    const {addCorrectAnswer} = useContext(QuestionContext);

    const handleChange = (e) => {
        setSelectedValue(e.target.value)
        setIsSelected(true);
    }

    const handleSubmit = (e) => {
        if((questionIndex + 1) !== questionsLength)
        e.preventDefault();
        if(selectedValue === correctAnswer) {
            addCorrectAnswer(true)
        }
        setSelectedValue("");
        setIsSelected(false);
        setQuestionIndex(prev => prev + 1);
        handleNext()
    }
  return (
    <form className='question-form' onSubmit={handleSubmit}>
        <h1 className='question'>{decodeURIComponent(question)}</h1>
        <div className='options'>
        {options.map((option,i)=>(
        <label htmlFor={option} key={i} className={`option ${selectedValue === option ? 'selected' : ''}`} >    
        <input className='option-input' id={option} name="quiz" type="radio" value={option} checked={selectedValue === option} onChange={handleChange} disabled={isSelected} />
        <p className='option-value'>{option}</p>
        </label>
        ))}
        </div>
        <h1 className='status'>{!selectedValue ? "" : selectedValue === correctAnswer ? "Correct!" : "Sorry, Try again!"}</h1>
        {isSelected && 
        <button className='btn' type='submit'>{questionsLength === (questionIndex + 1) ? "Complete Quiz" : "Next Question"}</button>
        }
    </form>
  )
}

export default Question;