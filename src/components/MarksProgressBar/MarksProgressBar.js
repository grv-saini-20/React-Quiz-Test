import React from 'react'
import "../MarksProgressBar/MarksProgressBar.css";

function MarksProgressBar({marks, maxMarks}) {
  return (
    <div className='container'>
        <div className="marks-values">
            <p>Score: {marks}%</p>
            <p>Max Score: {maxMarks}%</p>
        </div>
        <progress value={marks} max="100" className='progress-bar'>
        </progress>
        <progress value={maxMarks} max="100" className='behind-bar'>
        </progress>
    </div>
  )
}

export default MarksProgressBar