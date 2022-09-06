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
import { Container, Grid } from "@mui/material";
function App() {
  function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  
  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }
  return (
    <Container maxWidth={"xl"} sx={{ bgcolor: "white" }}>
      <Grid
        className='drop'
        container
        spacing={2}
        sx={{
          justifyContent: "center",
          pt: "50px",
        }}
        ondrop="drop(event)"
        ondragover="allowDrop(event)"
      >
        <ChartContainer
          viz={[
            <BarChart data={barData} />,
            <LineChart data={lineData} />,
            <RadarChart data={radarData} />,
            <AreaBumpChart data={areaBumpData} />,
            <CirclePackingChart data={circlePackingChartData} />,
            <BulletChart data={bulletData} />,
            <FunnelChart data={funnelData} />,
            <HeatMapChart data={heatData} />,
            <ChordChart data={chordData} />,
            <BumpChart data={bumpData} />,
            <CalendarChart data={calendarData} />,
            <MarimekkoChart data={marimekkoData} />,
            <NetworkChart data={networkData} />,
            <ParallelCoordinatesChart data={parallelCoordinatesData} />,
            <PieChart data={pieData} />,
            <RadialBarChart data={radialbarData} />,
            <SankeyChart data={sankeyData} />,
            <ScatterPlotChart data={scatterplotData} />,
            <StreamChart data={streamData} />,
            <SunburstChart data={sunburstData} />,
            <SwarmPlotChart data={swarmplotData} />,
            <TimeRangeChart data={timerangeData} />,
            <TreeMapChart data={treemapData} />,
            <VoronoiChart data={voronoiData} />,
            <WaffleChart data={waffleData} />,
          ]}
        />
      </Grid>
    </Container>
  );
}

export default App;
