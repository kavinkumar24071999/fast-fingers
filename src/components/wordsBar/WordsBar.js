import React, {useState} from "react";
import words from '../../data/data';

const WordsBar = () => {
  const getRandomWords = () => {
    return words.sort(() => (Math.random() > .5) ? 1 : -1);
  };

  const [randomWords] = useState(getRandomWords());
  return (<div className={'words-bar'}>
    {randomWords.map((word, index) => {
      return <div key={index} className={'word'}> {word} </div>;
    })}
  </div>);
};

export default WordsBar;