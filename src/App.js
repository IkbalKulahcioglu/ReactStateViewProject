import "./App.css";
import View from "./View";
import { useState } from "react";

function getRandomView() {
  const viewArray = ["City", "Foggy", "River", "Wave"];
  return viewArray[Math.floor(Math.random() * viewArray.length)];
}
function App() {
  const [view, setView] = useState([]);
  const handleClick = () => {
    setView([...view, getRandomView()]);
  };
  const viewList = view.map((view, index) => {
    return <View key={index} viewName={view} />;
  });

  return (
    <div className="App">
      <button className="appButton" onClick={handleClick}>
        Add View
      </button>
      <div className="viewList">{viewList}</div>
    </div>
  );
}

export default App;
