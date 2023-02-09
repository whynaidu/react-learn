import Desktop from "./components/Desktop"
// import Header from "./components/Header"
import Mobile from "./components/Mobile"
import { Routes, Route } from "react-router";

import "./App.css"
import Header from "./components/Header";


function App() {

  return (
    <div className="App">

      <Routes>
        
        <Route exact path="/" element={<Desktop />} />
        <Route path="/:mobile" element={<Mobile />} />
        <Route path="*" element={<Desktop />} />
      </Routes>
    </div>
  );
}

export default App
