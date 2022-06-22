import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import Spinner from "./components/Spinner";

import "./App.css";

const MainTable = lazy(() => import("./components/MainTable"));
const CharacterTable = lazy(() => import("./components/CharacterTable"));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<MainTable />} />
          <Route path="/secondary" element={<CharacterTable />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
