import React from 'react';

function ResultBox({ score, onReplay, onQuit }) {
  return (
    <div className="result_box activeResult">
      <div className="icon">
        <i className="fas fa-crown"></i>
      </div>
      <div className="complete_text">You've completed the Quiz!</div>
      <div className="score_text">
        <span>Your Score: {score}</span>
      </div>
      <div className="buttons">
        <button className="restart" onClick={onReplay}>Replay Quiz</button>
        <button className="quit" onClick={onQuit}>Quit Quiz</button>
      </div>
    </div>
  );
}

export default ResultBox;
