import logo from './logo.svg';
import './App.css';
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(100);
  const increment = () => setCounter(counter + 1);

  return (
    <div>
      <h1>Counter Demo</h1>
      <div> {counter} </div>
      <div>
        <input type="button" value="Counter Option 1" onClick={increment} />
      </div>
    </div>
  );
}

export default App;
