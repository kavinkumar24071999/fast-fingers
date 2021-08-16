import React, {useState} from "react";
import './WordsBar.css';

const WordsBar = ({inputWord, wordIndex, randomWords}) => {

  function getClassName(word) {
    if (word === randomWords[wordIndex] && word === inputWord) {
      return 'highlight';
    }
  }

  return (<div className={'words-bar'}>
    {randomWords.map((word, index) => {
      return <div key={index} className={getClassName(word)}> {word} </div>;
    })}
  </div>);
};

export default WordsBar;