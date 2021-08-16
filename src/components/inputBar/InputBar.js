import React from 'react';

const SPACE = ' ';
const EMPTY_WORD = '';

const InputBar = ({word, setWord}) => {

  const handleChange = (word) => {
    if (word.includes(SPACE)) {
      setWord(EMPTY_WORD);
    } else {
      setWord(word);
    }
  };

  return (
    <div className="input-bar">
      <input value={word || EMPTY_WORD} onChange={(event) => handleChange(event.target.value)}/>
    </div>
  );
};

export default InputBar;

