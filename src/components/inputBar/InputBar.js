import React from 'react';
import './InputBar.css';

const EMPTY_WORD = '';

const InputBar = ({word, setWord}) => {

  const handleChange = (word) => {
    setWord(word);
  };

  return (
    <div className="input-bar">
      <input value={word || EMPTY_WORD} onChange={(event) => handleChange(event.target.value)} />
    </div>
  );
};

export default InputBar;

