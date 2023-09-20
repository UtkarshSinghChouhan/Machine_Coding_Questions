import React, { useEffect, useState } from "react";
import ProgressBar from "./components/ProgressBar";

const App = () => {
  const [val, setVal] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setVal((preVal) => preVal + 1);
    }, 100);

    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <div className="App">
      <span>Progress Bar</span>
      <ProgressBar value={val} />
    </div>
  );
};

export default App;
