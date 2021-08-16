import './App.css';
import InputBar from './components/inputBar/InputBar';
import Timer from './components/timer/Timer';
import WordsBar from "./components/wordsBar/WordsBar";
import {useState} from "react";

export default App;

const EMPTY_WORD = '';

function App() {
  const [isTimerRunning, setTimerRunning] = useState(false);
  const [word, setWord] = useState(EMPTY_WORD);
  return (
    <div className="App">
      <InputBar word={word} setWord={setWord}/>
      <Timer maxSeconds={10} setTimerRunning={setTimerRunning}/>
      {isTimerRunning && <WordsBar inputWord={word}/>}
    </div>
  );
}

