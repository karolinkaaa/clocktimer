import { useEffect, useState } from "react";
import "./App.css";
import Clock from "./Clock.jsx";
import Timer from "./Timer.jsx";
import Timer2 from "./Timer2.jsx";

function App() {
  return (
    <div className="App">
      <Clock city="London" />
      <Clock city="Paris" />
      <Timer />
      <Timer2 />
    </div>
  );
}

export default App;
