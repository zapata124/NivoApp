import "./App.css";
import BarChart from "./Charts/BarChart";
import LineChart from "./Charts/LineChart";
import RadarChart from "./Charts/RadarChart";
import AreaBumpChart from "./Charts/AreaBump";
import CirclePackingChart from "./Charts/CirclePacking";
import BulletChart from "./Charts/BulletChart";
import ChoroplethChart from "./Charts/ChoroplethChart";
import {
  barData,
  lineData,
  radarData,
  areaBumpData,
  circlePackingChartData,
  bulletData,
  choroplethData,
} from "./Charts/data";
function App() {
  return (
    <div className="App">
      <div style={{ width: "500px", height: "500px" }}>
        <BarChart data={barData} />
        <LineChart data={lineData} />
        <RadarChart data={radarData} />
        <AreaBumpChart data={areaBumpData} />
        <CirclePackingChart data={circlePackingChartData} />
        <BulletChart data={bulletData} />
        <ChoroplethChart data={choroplethData} />
      </div>
    </div>
  );
}

export default App;
