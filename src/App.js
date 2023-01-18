import "./App.css";
import Gallery from "./components/desktopGallery";
import ImageView from "./components/imageView";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Gallery />} />
        <Route path="/view/:wallpaper_url" element={<ImageView />} />
      </Routes>
    </div>
  );
}

export default App;
