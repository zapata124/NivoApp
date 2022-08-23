import "./App.css";
import BarChart from "./Charts/Bar/BarChart";
import LineChart from "./Charts/Line/LineChart";
import RadarChart from "./Charts/Radar/RadarChart";
import { AreaBumpChart } from "./Charts";
import CirclePackingChart from "./Charts/Circle/CirclePacking";
import BulletChart from "./Charts/Bullet/BulletChart";
import ChoroplethChart from "./Charts/Choropleth/ChoroplethChart";
import FunnelChart from "./Charts/Funnel/FunnelChart";
import {
  barData,
  lineData,
  radarData,
  areaBumpData,
  circlePackingChartData,
  bulletData,
  choroplethData,
  funnelData,
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
        {/* not in working conditions */}
        {/* <ChoroplethChart data={choroplethData} /> */}
        <BulletChart data={bulletData} />
        <FunnelChart data={funnelData} />
      </div>
    </div>
  );
}

export default App;
