import styles from "./App.module.css";
import { useEffect, useState } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log("run~~");
  useEffect(() => {
    console.log("API 호출");
  }, []);
  return (
    <div>
      <input 
        value={keyword} 
        onChange={onChange}
        type="text"
        placeholder="Search Here..."
        />
        <h1>{counter}</h1>
        <button onClick={onClick}>Click This</button>
    </div>
  );
}

export default App;
