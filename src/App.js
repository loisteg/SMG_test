import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import Spinner from "./components/Spinner";
import { useState } from "react";

import "./App.css";

const MainTable = lazy(() => import("./components/MainTable"));
const CharacterTable = lazy(() => import("./components/CharacterTable"));

const App = () => {
  const [newValue, setNewValue] = useState("");
  console.log(newValue);

  return (
    <Router>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<MainTable value={newValue} />} />
          <Route
            path="/secondary"
            element={<CharacterTable setNewValue={setNewValue} />}
          />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
