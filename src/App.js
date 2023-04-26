import Message from './component/message';
import Sample from './component/prop';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>welcome to React</h1>
      <Message/>
      <Sample name="morgan"/>
    </div>
  );
}

export default App;
