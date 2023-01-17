import "./App.css";
import Gallery from "./components/desktopGallery";
import ImageView from "./components/imageView";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" element={<Gallery />} />
        <Route path="/large" element={<ImageView />} />
      </Switch>
    </div>
  );
}

export default App;
