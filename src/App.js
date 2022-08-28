import './App.css';
import { useAtom } from "jotai";
import { countAtom } from "./States/Home";


function App() {
    const [count, setCount] = useAtom(countAtom);

  return (
    <div className="App">
      {count}
      <button onClick={() => setCount((c) => c + 1)}>one up</button>
    </div>
  );
}

export default App;
