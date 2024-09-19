import React from 'react';
import "./Difficulty.css";

function Difficulty({level}) {
  const filledStars = level === "easy" ? 1 : level === "medium" ? 3 : 5;

  return (
    <div>
        {
          Array.from({length: 5}, (_,i) => (
            <span key={i} className={`star ${i < filledStars ? 'filled' : ''}`}>
              ★
            </span>
          ))
        }
    </div>
  )
}

export default Difficulty