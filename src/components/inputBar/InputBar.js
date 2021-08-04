import React, {useState} from 'react';

const SPACE = ' ';
const EMPTY = '';

const InputBar = () => {
  const [word, setWord] = useState(EMPTY);

  const handleChange = (word) => {
    if (word.includes(SPACE)) {
      setWord(EMPTY);
    } else {
      setWord(word);
    }
  };

  return (
    <div className="input-bar">
      <input value={word || EMPTY} onChange={(event) => handleChange(event.target.value)} />
    </div>
  );
};

export default InputBar;

