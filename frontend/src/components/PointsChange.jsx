import React, { useEffect } from 'react';
import './PointsChange.css';

//function takes in an array of point displays and a function to do on the animation's end.
const PointsChange = ({ pointChanges, onAnimationEnd }) => {
  return (
    <div className="points-change-container">
      {pointChanges.map((pointChange, index) => (
        <div
          key={index}
          className={`points-change ${pointChange.value >= 0 ? 'gain' : 'loss'}`}
          onAnimationEnd={() => onAnimationEnd(index)}
          style={{ left: `${pointChange.left}px`, bottom: `${pointChange.bottom}px` }}
        >
          {pointChange.value >= 0 ? `+${pointChange.value}` : pointChange.value}
        </div>
      ))}
    </div>
  );
};

export default PointsChange;