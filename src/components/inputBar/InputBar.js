import React from 'react';
import './InputBar.css';

const EMPTY_WORD = '';

const InputBar = ({word, setWord}) => {
  return (
    <div className="input-bar">
      <input value={word || EMPTY_WORD} onChange={(event) => setWord(event.target.value)} />
    </div>
  );
};

export default InputBar;

