import { useContext, useEffect, useState } from 'react';
import './App.css';
import Difficulty from './components/Difficulty/Difficulty';
import Question from './components/Question/Question';
import { QuestionContext } from './context/QuestionContext';
import ProgressBar from './components/ProgressBar/ProgressBar';
import MarksProgressBar from './components/MarksProgressBar/MarksProgressBar';

function App() {
  const [questionsData, setQuestionsData] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const {correctQuestions, maxScore, setNewScore} = useContext(QuestionContext);
  const [marks, setMarks] = useState(0);

  const calculateMarks = () => {
    const value = (correctQuestions/questionsData?.length)*100
    setMarks(value);   
    setNewScore(value);
  }

  const handleNext = () => {
    if(activeIndex < (questionsData.length - 1)){
      setActiveIndex(prev => prev + 1)
    }
  }

  useEffect(() => {
    fetch("data/questions.json")
    .then((response) => response.json())
    .then((data) => setQuestionsData(data))
    .catch((error => console.log({"data fetching error" : error})))
  }      
  ,[])

  useEffect(() => {
    calculateMarks()
  },[correctQuestions, questionsData])

  return (
    <main>
    <ProgressBar value={((activeIndex + 1)/questionsData.length)*100}/>  
    <section className="main-page">
      {/* <Difficulty level="medium"/> */}
        {questionsData.length !== 0 && (
        <div>
        <h1 className='question-heading'>Question {activeIndex + 1} of {questionsData.length}</h1>
        <p className="category">{decodeURIComponent(questionsData[activeIndex].category)}</p>
        <Question handleNext={handleNext} question={questionsData[activeIndex].question} correctAnswer={decodeURIComponent(questionsData[activeIndex].correct_answer)} options={[...questionsData[activeIndex].incorrect_answers.map(answer => decodeURIComponent(answer)), decodeURIComponent(questionsData[activeIndex].correct_answer)]}/>
        </div>)
        }
        <MarksProgressBar marks={marks} maxMarks={maxScore}/>
    </section>
    </main>
  );
}

export default App;
