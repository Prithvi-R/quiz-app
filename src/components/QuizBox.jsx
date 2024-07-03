import React, { useState, useEffect } from 'react';

function QuizBox({ questions, onCompleteQuiz }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(15);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime > 0) {
          setProgress((progress) => progress + 3.49);
          return prevTime - 1;
        } else {
          handleNextQuestion();
          return 0;
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleAnswerSelect = (option) => {
    setSelectedAnswer(option);
    if (option === questions[currentQuestionIndex].answer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    setSelectedAnswer(null);
    setProgress(0);
    setTimeLeft(15);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      onCompleteQuiz(score);
    }
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="quiz_box activeQuiz">
      <header>
        <div className="title">Online quiz portal</div>
        <div className="timer">
          <div className="time_left_txt">Time Left</div>
          <div className="timer_sec">{timeLeft}</div>
        </div>
        <div className="time_line" style={{ width: `${progress}%` }}></div>
      </header>
      <section>
        <div className="que_text">{currentQuestion.question}</div>
        <div className="option_list">
          {currentQuestion.options.map((option, index) => (
            <div
              key={index}
              className={`option ${
                selectedAnswer
                  ? option === currentQuestion.answer
                    ? 'correct'
                    : 'incorrect'
                  : ''
              }`}
              onClick={() => handleAnswerSelect(option)}
            >
              {option}
              {selectedAnswer && (
                <div className="icon">
                  {option === currentQuestion.answer ? '✅' : '❌'}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
      <footer>
        <div className="total_que">
          Question {currentQuestionIndex + 1} of {questions.length}
        </div>
        <button className="next_btn show" onClick={handleNextQuestion}>
          Next Question
        </button>
      </footer>
    </div>
  );
}

export default QuizBox;
