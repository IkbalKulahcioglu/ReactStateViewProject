import City from "./images/city.jpg";
import Foggy from "./images/foggy.jpg";
import River from "./images/river.jpg";
import Wave from "./images/wave.jpg";
import './View.css'

const viewMap = {
    City,
    Foggy,
    River,
    Wave,
};
function View({ viewName }) {
  return (
    <div className="viewDiv">
      <img className="view" src={viewMap[viewName]} alt="view" />
    </div>
  );
}

export default View;
