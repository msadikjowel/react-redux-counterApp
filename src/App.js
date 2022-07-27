import './App.css';
import Counter from './components/Counter';
import Todos from './components/Todos';

function App() {
  return (
    <div className="App">
      <h1>Welcome to react-redux</h1>
      <Counter />
      <h1>React-Redux fetching data</h1>
      <Todos />
    </div>
  );
}

export default App;
