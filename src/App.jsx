import { useState } from "react";
import "./App.css";
import CreateGrid from "./components/Grid";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <CreateGrid />
    </>
  );
}

export default App;
