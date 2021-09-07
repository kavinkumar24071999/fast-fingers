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
  const [randomWords, setRandomWords] = useState([]);

  useEffect(() => {
    isTimerRunning && setRandomWords(getRandomWords().slice(0, MAX_WORDS));
  }, [isTimerRunning]);

  useEffect(() => {
    if (inputWord.includes(SPACE)) {
      onInputWordCompletion();
    }
    if (currentWordIndex >= MAX_WORDS) {
      resetWordsBar();
    }
  }, [inputWord]);

  const getRandomWords = () => {
    return words.sort(() => (Math.random() > .5) ? 1 : -1);
  };

  const incrementWordIndexByOne = () => {
    setCurrentWordIndex(currentWordIndex + 1);
  };

  const handleWordPermanentStyle = () => {
    const isCurrentWordEqualsInputWord = randomWords[currentWordIndex] === inputWord.trim();
    if (isCurrentWordEqualsInputWord) {
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

  const onTimerStart = () => {
    setInputWord(EMPTY_WORD);
    setTimerRunning(true);
  };

  const onTimerEnd = () => {
    setInputWord(EMPTY_WORD);
    setCurrentWordIndex(0);
    setWordPermanentStyle({});
    setTimerRunning(false);
  };

  function onInputWordCompletion() {
    handleWordPermanentStyle();
    setInputWord(EMPTY_WORD);
    incrementWordIndexByOne();
  }

  function resetWordsBar() {
    setRandomWords(getRandomWords().slice(0, MAX_WORDS));
    setCurrentWordIndex(0);
    setWordPermanentStyle({});
  }

  return (
    <div className="App">
      {isTimerRunning && <WordsBar inputWord={inputWord} inputWordIndex={currentWordIndex} randomWords={randomWords}
        wordPermanentStyle={wordPermanentStyle}/>}
      <InputBar word={inputWord} setWord={setInputWord}/>
      <Timer maxSeconds={20} onTimerStart={onTimerStart} onTimerEnd={onTimerEnd}/>
    </div>
  );
}