import React, {useState} from "react";
import './WordsBar.css';

const WordsBar = ({inputWord, wordIndex, randomWords}) => {

  function getClassName(word, index) {
    if (index !== wordIndex || !inputWord) {
      return;
    }
    if (randomWords[wordIndex].includes(inputWord) && word.includes(inputWord)) {
      return 'highlight';
    }
  }

  return (<div className={'words-bar'}>
    {randomWords.map((word, index) => {
      return <div key={index} className={getClassName(word, index)}> {word} </div>;
    })}
  </div>);
};

export default WordsBar;