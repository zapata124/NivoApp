// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/voronoi
import { ResponsiveVoronoi } from "@nivo/voronoi";

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const VoronoiChart = ({ data /* see data tab */ }) => (
  <ResponsiveVoronoi
    data={data}
    xDomain={[0, 100]}
    yDomain={[0, 100]}
    enableLinks={true}
    linkLineColor="#cccccc"
    cellLineColor="#c6432d"
    pointSize={6}
    pointColor="#c6432d"
    margin={{ top: 1, right: 1, bottom: 1, left: 1 }}
  />
);
export default VoronoiChart;
