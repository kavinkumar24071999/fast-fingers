import './App.css';
import InputBar from './components/inputBar/InputBar';
import Timer from './components/timer/Timer';
import WordsBar from "./components/wordsBar/WordsBar";

export default App;

function App() {
  return (
    <div className="App">
      <InputBar/>
      <Timer maxSeconds={10}/>
      <WordsBar/>
    </div>
  );
}

