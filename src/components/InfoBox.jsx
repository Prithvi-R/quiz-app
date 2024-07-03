import React from 'react';

function InfoBox({ onQuit, onStartQuiz }) {
  return (
    <div className="info_box activeInfo">
      <div className="info-title"><span>Rules for the quiz</span></div>
      <div className="info-list">
        <div className="info">1. Once you select your answer, it can't be undone.</div>
        <div className="info">2. You will have only 15 seconds per each question.</div>
        <div className="info">3. You'll get points on the basis of your correct answers.</div>
      </div>
      <div className="buttons">
        <button className="quit" onClick={onQuit}>Exit Quiz</button>
        <button className="restart" onClick={onStartQuiz}>Continue</button>
      </div>
    </div>
  );
}

export default InfoBox;
