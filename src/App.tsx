import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";

function App() {
  return (
    <div className="App">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />}>
          <Route path="/projects" element={<Home />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
