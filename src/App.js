import "./App.css";
import BarChart from "./Charts/BarChart";
import LineChart from "./Charts/LineChart";
import { barData, lineData } from "./Charts/data";
function App() {
  return (
    <div className="App">
      <div style={{ width: "500px", height: "500px" }}>
        <BarChart data={barData} />
        <LineChart data={lineData} />
      </div>
    </div>
  );
}

export default App;
