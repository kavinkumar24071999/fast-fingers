import './App.css';
import InputBar from './components/inputBar/InputBar';
import Timer from './components/timer/Timer';
import WordsBar from "./components/wordsBar/WordsBar";
import {useState} from "react";

export default App;

function App() {
  const [isTimerRunning, setTimerRunning] = useState(false);
  return (
    <div className="App">
      <InputBar/>
      <Timer maxSeconds={10} setTimerRunning={setTimerRunning}/>
      {isTimerRunning && <WordsBar/>}
    </div>
  );
}

