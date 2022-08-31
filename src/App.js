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
  TimeRangeChart,
  TreeMapChart,
  VoronoiChart,
  WaffleChart,
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
  timerangeData,
  treemapData,
  voronoiData,
  waffleData,
} from "./Charts/data";
import { ChartContainer } from "./reusables";
import { Grid } from "@mui/material";
function App() {
  return (
    <Grid container>
      <ChartContainer>
        <BarChart data={barData} />
      </ChartContainer>

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
      <ScatterPlotChart data={scatterplotData} />
      <StreamChart data={streamData} />
      <SunburstChart data={sunburstData} />
      <SwarmPlotChart data={swarmplotData} />
      <TimeRangeChart data={timerangeData} />
      <TreeMapChart data={treemapData} />
      <VoronoiChart data={voronoiData} />
      <WaffleChart data={waffleData} />
    </Grid>
  );
}

export default App;
