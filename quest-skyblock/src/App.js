// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PlayPage from "./components/PlayPage";
import OpenWorld from "./pages/OpenWorld";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PlayPage />} />
        <Route path="/open-world" element={<OpenWorld />} />
      </Routes>
    </Router>
  );
};

export default App;
