import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PeekDialog from "./components/PeekDialog";

import "./App.scss";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/peek" element={<PeekDialog />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
