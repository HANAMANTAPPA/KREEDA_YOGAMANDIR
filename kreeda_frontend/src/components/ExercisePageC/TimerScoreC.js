import React, { useEffect } from 'react';
import './tim2.css';

const TimerScore = ({ time = 0, animationType = 'decreasing', animationColor = '#DA22FF', position = 'top-right' }) => {
  useEffect(() => {
    const circle = document.getElementById(`progressCircle-${time}`);
    if (circle) {
      const progress = animationType === 'increasing' ? (time / 20) * 360 : (time / 50) * 360;
      circle.style.setProperty('--progress', `${progress}deg`);
      circle.style.setProperty('--color', animationColor);
    }
  }, [time, animationType, animationColor]);

  return (
    <div className={`outer-main ${position}`}>
      <div className="circle-1">
        <div className={`progress-circle ${animationType}`} id={`progressCircle-${time}`}>
          <div className="circle-2">
            <div className="txt-1 spinAndChangeScale">
              <span style={{ color: "Black" }}>{time}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TimerScore;
