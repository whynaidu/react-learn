import Desktop from "./components/Desktop"
import Mobile from "./components/Mobile"
import { Routes, Route } from "react-router";
import "flowbite";
import "./App.css"
import Upload from "./components/Upload";
import Login from "./components/Login";


function App() {

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Desktop />} />
        <Route path="/:mobile" element={<Mobile />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Desktop />} />
      </Routes>
    </div>
  );
}

export default App
