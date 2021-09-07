import React from "react";
import './WordsBar.css';

const WordsBar = ({inputWord, inputWordIndex, randomWords, wordPermanentStyle}) => {

  function getStyleFor(randomWord, randomWordIndex) {
    if (wordPermanentStyle[randomWordIndex]) {
      return wordPermanentStyle[randomWordIndex];
    }
    const isRandomWordNotCurrentWord = randomWordIndex !== inputWordIndex;
    if (isRandomWordNotCurrentWord) {
      return 'ordinary';
    }
    if (randomWord.includes(inputWord)) {
      return 'highlight-correct';
    }
    if (!randomWord.includes(inputWord)) {
      return 'highlight-wrong';
    }
  }

  return (<div className={'words-bar'}>
    {randomWords.map((word, index) => {
      return <div key={index}
        className={ getStyleFor(word, index)}> {word} </div>;
    })}
  </div>);
};

export default WordsBar;