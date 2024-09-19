import React, { Children, useEffect, useState } from 'react'
import { createContext } from "react";

export const QuestionContext = createContext();


export function QuestionContextProvider({children}) {
    const [correctQuestions, setCorrectQuestions] = useState(0);
    const [maxScore, setMaxScore] = useState(0);

    useEffect(() => {
      const savedScore = localStorage.getItem("maxScore")
      if(savedScore) {
        setMaxScore(parseInt(savedScore))
      }
    },[])

    const addCorrectAnswer = (isCorrect) => {
        if(isCorrect){
            setCorrectQuestions(prev => prev + 1)
        }
    }

    const setNewScore = (newScore) => {
      if (newScore > maxScore) {
        setMaxScore(newScore);
        localStorage.setItem('maxScore', newScore);
    }
    }

  return (
    <QuestionContext.Provider value={{correctQuestions,maxScore,addCorrectAnswer,setNewScore}}>
    {children}
    </QuestionContext.Provider>
  )
}

