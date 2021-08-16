import './App.css';
import InputBar from './components/inputBar/InputBar';
import Timer from './components/timer/Timer';
import WordsBar from "./components/wordsBar/WordsBar";
import {useState} from "react";
import words from "./data/data";

export default App;

const EMPTY_WORD = '';

function App() {
  const [isTimerRunning, setTimerRunning] = useState(false);
  const [word, setWord] = useState(EMPTY_WORD);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const getRandomWords = () => {
    return words.sort(() => (Math.random() > .5) ? 1 : -1);
  };

  const [randomWords] = useState(getRandomWords());

  const incrementWordIndexByOne = () => {
    setCurrentWordIndex(currentWordIndex + 1);
  };

  const onTimerStart = () => {
    setTimerRunning(true);
  };

  const onTimerEnd = () => {
    setTimerRunning(false);
  };
  return (
    <div className="App">
      <InputBar word={word} setWord={setWord} incrementWordIndexByOne={incrementWordIndexByOne}/>
      <Timer maxSeconds={10} onTimerStart={onTimerStart} onTimerEnd={onTimerEnd}/>
      {isTimerRunning && <WordsBar inputWord={word} wordIndex={currentWordIndex} randomWords={randomWords}/>}
    </div>
  );
}

