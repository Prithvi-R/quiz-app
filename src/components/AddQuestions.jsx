import React, { useState } from 'react';

function AddQuestion({ onAddQuestion }) {
  const [questionText, setQuestionText] = useState('');
  const [option1, setOption1] = useState('');
  const [option2, setOption2] = useState('');
  const [option3, setOption3] = useState('');
  const [option4, setOption4] = useState('');
  const [correctOption, setCorrectOption] = useState(null);
  
  const handleAdd = () => {
    if (!questionText || !option1 || !option2 || !correctOption) {
        alert('Please fill in all required fields.');
        return;
    }
    if (![option1, option2, option3, option4].includes(correctOption)) {
        alert('Correct option must match one of the provided options.');
        return;
    }

    const newQuestion = {
      question: questionText,
      options: [option1, option2, option3, option4],
      answer: correctOption
    };
    onAddQuestion(newQuestion);
    setQuestionText('');
    setOption1('');
    setOption2('');
    setOption3('');
    setOption4('');
    setCorrectOption('');
  };

  return (
    <div className="add_question_box">
      <h2>Add New Question</h2>
      <input
        type="text"
        placeholder="Question"
        value={questionText}
        onChange={(e) => setQuestionText(e.target.value)}
      />
      <input
        type="text"
        placeholder="Option 1"
        value={option1}
        onChange={(e) => setOption1(e.target.value)}
      />
      <input
        type="text"
        placeholder="Option 2"
        value={option2}
        onChange={(e) => setOption2(e.target.value)}
      />
      <input
        type="text"
        placeholder="Option 3"
        value={option3}
        onChange={(e) => setOption3(e.target.value)}
      />
      <input
        type="text"
        placeholder="Option 4"
        value={option4}
        onChange={(e) => setOption4(e.target.value)}
      />
      <input
        type="text"
        placeholder="Correct Option"
        value={correctOption}
        onChange={(e) => setCorrectOption(e.target.value)}
      />
      <button onClick={handleAdd}>Add Question</button>
    </div>
  );
}

export default AddQuestion;
