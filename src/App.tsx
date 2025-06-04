import "./App.css";
import DurationDistribution from "./views/duration-distribution";
import PlatformUsage from "./views/platform-usage";
import SkipAnalysis from "./views/skip-analysis";
import StartReasons from "./views/start-reasons";
import TopArtists from "./views/top-artists";
import Clock from "./views/clock";
function App() {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        height: "100vh",

        justifyContent: "center",
      }}
    >
      <div style={{ width: "500px", height: "50%" }}>
        <PlatformUsage></PlatformUsage>
      </div>
      <div style={{ width: "500px", height: "50%" }}>
        <TopArtists></TopArtists>
      </div>
      <div style={{ width: "500px", height: "50%" }}>
        <StartReasons></StartReasons>
      </div>
      <div style={{ width: "500px", height: "50%" }}>
        <DurationDistribution></DurationDistribution>
      </div>
      <div style={{ width: "500px", height: "50%" }}>
        <SkipAnalysis></SkipAnalysis>
      </div>
      <div style={{ width: "500px", height: "50%" }}>
        <Clock></Clock>
      </div>
    </div>
  );
}

export default App;
