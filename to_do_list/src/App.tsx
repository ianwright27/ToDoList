import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import ListGroup from "./components/ListGroup";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* Navbar */}
      <Navbar></Navbar>

      {/* List Group */}
      <ListGroup></ListGroup>
    </div>
  );
}

export default App;
