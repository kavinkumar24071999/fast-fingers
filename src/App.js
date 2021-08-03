import './App.css';
import Timer from './components/timer/Timer';

export default App;
function App() {
  return (
    <div className="App">
      <header className="App-header">
        Learn React
      </header>
      <Timer maxSeconds={10} />
    </div>
  );
}

