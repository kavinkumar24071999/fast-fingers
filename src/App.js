import './App.css';
import InputBar from './components/inputBar/InputBar';
import Timer from './components/timer/Timer';
import WordsBar from "./components/wordsBar/WordsBar";
import {useEffect, useState} from "react";
import words from "./data/data";

export default App;

const EMPTY_WORD = '';
const SPACE = " ";
const MAX_WORDS = 10;

function App() {
  const [isTimerRunning, setTimerRunning] = useState(false);
  const [inputWord, setInputWord] = useState(EMPTY_WORD);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [wordPermanentStyle, setWordPermanentStyle] = useState({});
  const getRandomWords = () => {
    return words.sort(() => (Math.random() > .5) ? 1 : -1);
  };

  const [randomWords, setRandomWords] = useState([]);

  useEffect(() => {
    isTimerRunning && setRandomWords(getRandomWords().slice(0, MAX_WORDS));
  }, [isTimerRunning]);

  useEffect(() => {
    if (inputWord.includes(SPACE)) {
      wordPermanentStyleHandler();
      setInputWord(EMPTY_WORD);
      incrementWordIndexByOne();
    }
    if (currentWordIndex >= MAX_WORDS) {
      setRandomWords(getRandomWords().slice(0, MAX_WORDS));
      setCurrentWordIndex(0);
      setWordPermanentStyle({});
    }
  }, [inputWord]);

  const incrementWordIndexByOne = () => {
    setCurrentWordIndex(currentWordIndex + 1);
  };

  const onTimerStart = () => {
    setTimerRunning(true);
  };

  const wordPermanentStyleHandler = () => {
    if (randomWords[currentWordIndex].length === inputWord.trim().length
      && randomWords[currentWordIndex] === inputWord.trim()) {
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
    setCurrentWordIndex(0);
    setWordPermanentStyle({});
    setTimerRunning(false);
  };

  return (
    <div className="App">
      {isTimerRunning && <WordsBar inputWord={inputWord} wordIndex={currentWordIndex} randomWords={randomWords}
        wordPermanentStyle={wordPermanentStyle} />}
      <InputBar word={inputWord} setWord={setInputWord} />
      <Timer maxSeconds={60} onTimerStart={onTimerStart} onTimerEnd={onTimerEnd} />
    </div>
  );
}

