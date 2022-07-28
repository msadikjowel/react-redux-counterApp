import './App.css';
import Counter from './components/Counter';
import Todos from './components/Todos';
import View from './feature/counter/View';

function App() {
  return (
    <div className="App">
      <h1>Welcome to react-redux</h1>
      <Counter />
      <h1>React-Redux fetching data</h1>
      <Todos />
      <h1>Counter app using redux toolkit</h1>
      <View />
    </div>
  );
}

export default App;
