import "./App.css";
import {
  BarChart,
  LineChart,
  RadarChart,
  AreaBumpChart,
  CirclePackingChart,
  BulletChart,
  ChoroplethChart,
  FunnelChart,
  HeatMapChart, 
  ChordChart,
  BumpChart,
  CalendarChart,
  MarimekkoChart,
  NetworkChart,
  ParallelCoordinatesChart,
  PieChart,
  RadialBarChart,
  SankeyChart
} from "./Charts";
import {
  barData,
  lineData,
  radarData,
  areaBumpData,
  circlePackingChartData,
  bulletData,
  choroplethData,
  funnelData,
  heatData,
  chordData,
  bumpData,
  calendarData,
  marimekkoData,
  networkData,
  parallelCoordinatesData,
  pieData,
  radialbarData,
  sankeyData
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
        <HeatMapChart data={heatData} />
        <ChordChart data={chordData} />
        <BumpChart data={bumpData} />
        <CalendarChart data={calendarData} />
        <MarimekkoChart data={marimekkoData} />
        <NetworkChart data={networkData} />
        <ParallelCoordinatesChart data={parallelCoordinatesData} />
        <PieChart data={pieData} />
        <RadialBarChart data={radialbarData} />
        <SankeyChart data={sankeyData} />
      </div>
    </div>
  );
}

export default App;
