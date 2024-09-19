import React from 'react'
import "../MarksProgressBar/MarksProgressBar.css";
import ProgressBar from '../ProgressBar/ProgressBar';

function MarksProgressBar({marks}) {
  return (
    <div>
        <ProgressBar value={marks}/>
    </div>
  )
}

export default MarksProgressBar