import React from 'react';
import "./Difficulty.css";

function Difficulty({level}) {
  return (
    <div>
        {Array.from(5).map((item,i) => (
            <span className='Star'>Star</span>
        ))}
    </div>
  )
}

export default Difficulty