import React, {useState} from "react";
import words from '../../data/data';
import './WordsBar.css';

const WordsBar = ({inputWord}) => {
  const getRandomWords = () => {
    return words.sort(() => (Math.random() > .5) ? 1 : -1);
  };

  const [randomWords] = useState(getRandomWords());

  function getClassName(inputWord, currentWord) {
    if (inputWord === currentWord) {
      return 'highlight';
    }
  }

  return (<div className={'words-bar'}>
    {randomWords.map((word, index) => {
      return <div key={index} className={getClassName(inputWord, word)}> {word} </div>;
    })}
  </div>);
};

export default WordsBar;