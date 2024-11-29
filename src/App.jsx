import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Menu } from "./Menue";
import Guess from "./Guess";
import Name from "./Name";
import "./App.css";
import audio from "./assets/725580__tenonic__marble-run-piano-intro.wav";
const App = () => {
  const [isplaying, setisplayinh] = useState(true);
  useEffect(() => {
    setisplayinh(true);
  }, [audio]);
  return (
    <div>
      {isplaying && <audio src={audio} autoPlay loop={true} muted={false} />}
      <Routes>
        <Route path="/" exact element={<Menu />} />
        <Route path="/Guess" element={<Guess />} />
        <Route path="/Name" element={<Name />} />
      </Routes>
    </div>
  );
};

export default App;
