import './App.css';
import InputBar from './components/inputBar/InputBar';
import Timer from './components/timer/Timer';

export default App;
function App() {
  return (
    <div className="App">
      <header className="App-header">
        Learn React
      </header>
      <InputBar />
      <Timer maxSeconds={10} />
    </div>
  );
}

