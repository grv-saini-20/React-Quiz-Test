import React from 'react'
import "../ProgressBar/ProgressBar.css";

function ProgressBar({value}) {
  return (
    <>
        <progress value={value} max="100" className='progress-bar'>
        </progress>
    </>
  )
}

export default ProgressBar