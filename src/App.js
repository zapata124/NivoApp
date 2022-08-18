import "./App.css";
import BarChart from "./Charts/BarChart";
import { barData } from "./Charts/data";
function App() {
  return (
    <div className="App">
      <div style={{ width: "500px", height: "500px" }}>
        <BarChart data={barData} />
      </div>
    </div>
  );
}

export default App;
