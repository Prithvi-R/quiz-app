import React, { useState } from 'react';
import './components/style.css'; // Ensure this path is correct
import StartButton from './components/Startbutton';
import InfoBox from './components/InfoBox';
import QuizBox from './components/QuizBox';
import ResultBox from './components/Resultbox';
import AddQuestion from './components/AddQuestions';
import initialQuestions from './components/questions';

function App() {
  const [showInfo, setShowInfo] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [showAddQuestion, setShowAddQuestion] = useState(false);
  const [questions, setQuestions] = useState(initialQuestions);
  const [score, setScore] = useState(0);

  const handleCompleteQuiz = (finalScore) => {
    setScore(finalScore);
    setShowQuiz(false);
    setShowResult(true);
  };

  const handleAddQuestion = (newQuestion) => {
    setQuestions([...questions, newQuestion]);
    setShowAddQuestion(false);
  };

  return (
    <div>
      {!showInfo && !showQuiz && !showResult && !showAddQuestion && (
        <div className='start'>
          <StartButton onStart={() => setShowInfo(true)} text="Start Quiz" />
          <StartButton onStart={() => setShowAddQuestion(true)} text="AddQuestion" />
        </div>
      )}
      {showInfo && (
        <InfoBox
          onQuit={() => setShowInfo(false)}
          onStartQuiz={() => {
            setShowInfo(false);
            setShowQuiz(true);
          }}
        />
      )}
      {showQuiz && <QuizBox questions={questions} onCompleteQuiz={handleCompleteQuiz} />}
      {showResult && (
        <ResultBox
          score={score}
          onReplay={() => {
            setShowResult(false);
            setShowQuiz(true);
          }}
          onQuit={() => setShowResult(false)}
        />
      )}
      {showAddQuestion && <AddQuestion onAddQuestion={handleAddQuestion} />}
    </div>
  );
}

export default App;
