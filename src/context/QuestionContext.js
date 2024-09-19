import React, { Children, useState } from 'react'
import { createContext } from "react";

export const QuestionContext = createContext();


export function QuestionContextProvider({children}) {
    const [correctQuestions, setCorrectQuestions] = useState(0)

    const addCorrectAnswer = (isCorrect) => {
        if(isCorrect){
            setCorrectQuestions(prev => prev + 1)
        }
    }

  return (
    <QuestionContext.Provider value={{correctQuestions,addCorrectAnswer}}>
    {children}
    </QuestionContext.Provider>
  )
}

