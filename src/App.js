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
  SankeyChart,
  ScatterPlotChart,
  StreamChart,
  SunburstChart,
  SwarmPlotChart,
  TimeRangeChart 
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
  sankeyData,
  scatterplotData,
  streamData,
  sunburstData,
  swarmplotData,
  timerangeData
} from "./Charts/data";
function App() {
  return (
    <div className="App">
      <div style={{ width: "500px", height: "500px" }}>
        <div style={{ width: "inherit", height: "inherit", display: "flex" }}>
          <div style={{ width: "inherit", height: "inherit" }}>
            <BarChart data={barData} />
          </div>
          <LineChart data={lineData} />
        </div>
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
        <ScatterPlotChart data={scatterplotData} />
        <StreamChart data={streamData} />
        <SunburstChart data={sunburstData} />
        <SwarmPlotChart data={swarmplotData} />
        <TimeRangeChart data={timerangeData} />
      </div>
    </div>
  );
}

export default App;
