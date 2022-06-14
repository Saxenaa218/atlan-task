import React, { lazy, Suspense } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Loader from "./components/Loader";

import "./App.scss";

const Home = lazy(() => import("./pages/Home"));
const PeekDialog = lazy(() => import("./components/PeekDialog"));

const App: React.FC = () => {
  return (
    <HashRouter>
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
    </HashRouter>
  );
};

export default App;
