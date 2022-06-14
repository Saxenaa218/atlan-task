import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loader from "./components/Loader";

import "./App.scss";

const Home = lazy(() => import("./pages/Home"));
const PeekDialog = lazy(() => import("./components/PeekDialog"));

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<Loader />}>
              <Home />
            </Suspense>
          }
        ></Route>
        <Route
          path="/peek"
          element={
            <Suspense fallback={<Loader />}>
              <PeekDialog />
            </Suspense>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
