import './App.css';
import InputBar from './components/inputBar/InputBar';
import Timer from './components/timer/Timer';
import WordsBar from "./components/wordsBar/WordsBar";
import {useEffect, useState} from "react";
import words from "./data/data";

export default App;

const EMPTY_WORD = '';

function App() {
  const [isTimerRunning, setTimerRunning] = useState(false);
  const [word, setWord] = useState(EMPTY_WORD);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [wordPermanentStyle, setWordPermanentStyle] = useState({});
  const getRandomWords = () => {
    return words.sort(() => (Math.random() > .5) ? 1 : -1);
  };

  const [randomWords, setRandomWords] = useState([]);

  useEffect(() => {
    setRandomWords(getRandomWords());
  }, [isTimerRunning]);

  useEffect(() => {
    if (word.includes(" ")) {
      wordPermanentStyleHandler();
      setWord("");
      incrementWordIndexByOne();
    }
  }, [word]);

  const incrementWordIndexByOne = () => {
    setCurrentWordIndex(currentWordIndex + 1);
  };

  const onTimerStart = () => {
    setTimerRunning(true);
  };

  const wordPermanentStyleHandler = () => {
    if (randomWords[currentWordIndex].length === word.trim().length && randomWords[currentWordIndex] === word.trim()) {
      setWordPermanentStyle(wordPermanentStyle => {
        wordPermanentStyle[currentWordIndex] = 'correct';
        return wordPermanentStyle;
      });
    } else {
      setWordPermanentStyle(wordPermanentStyle => {
        wordPermanentStyle[currentWordIndex] = 'incorrect';
        return wordPermanentStyle;
      });
    }
  };

  const onTimerEnd = () => {
    setTimerRunning(false);
  };
  return (
    <div className="App">
      <InputBar word={word} setWord={setWord}/>
      <Timer maxSeconds={20} onTimerStart={onTimerStart} onTimerEnd={onTimerEnd}/>
      {isTimerRunning && <WordsBar inputWord={word} wordIndex={currentWordIndex} randomWords={randomWords}
        wordPermanentStyle={wordPermanentStyle}/>}
    </div>
  );
}

