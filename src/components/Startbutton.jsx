import React from 'react';

function StartButton({ onStart, text }) {
  return (
    <div className="start_btn">
      <button onClick={onStart}>{text}</button>
    </div>
  );
}

export default StartButton;
