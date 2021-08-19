import React from "react";
import './WordsBar.css';

const WordsBar = ({inputWord, wordIndex, randomWords, getWordPermanentStyle, wordPermanentStyle}) => {

  function getClassName(word, index) {
    getWordPermanentStyle(word, index);
    if (index !== wordIndex || !inputWord) {
      return;
    }
    if (randomWords[wordIndex].includes(inputWord) && word.includes(inputWord)) {
      return 'highlight-correct';
    }
    if (!randomWords[wordIndex].includes(inputWord) || !word.includes(inputWord)) {
      return 'highlight-wrong';
    }
  }

  return (<div className={'words-bar'}>
    {randomWords.map((word, index) => {
      return <div key={index}
        className={wordPermanentStyle[index] || getClassName(word, index)}> {word} </div>;
    })}
  </div>);
};

export default WordsBar;