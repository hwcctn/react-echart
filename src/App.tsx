import "./App.css";
import DurationDistribution from "./views/duration-distribution";
import PlatformUsage from "./views/platform-usage";
import SkipAnalysis from "./views/skip-analysis";
import StartReasons from "./views/start-reasons";
import TopArtists from "./views/top-artists";
import Clock from "./views/clock";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  formatDuration_distribution,
  formatPlatform_usage,
  formatStart_resons,
  formatTop_artists,
} from "./views/utils/formatData";
import type {
  PlatformUsageData,
  TopArtistsData,
  DurationDistributionData,
  StartReasonsData,
} from "./views/utils/formatData";
function App() {
  const [platformUsageData, setPlatformUsageData] =
    useState<PlatformUsageData | null>(null);
  const [topArtistsData, setTopArtistsData] = useState<TopArtistsData | null>(
    null
  );
  const [startReasonsData, setStartReasonsData] =
    useState<StartReasonsData | null>(null);
  const [durationDistributionData, setDurationDistributionData] =
    useState<DurationDistributionData | null>(null);
  useEffect(() => {
    axios.get("/api/analysis/results/latest").then((res) => {
      // console.log(res);
      const data = res.data.results;
      setPlatformUsageData(formatPlatform_usage(data.platform_usage));
      setTopArtistsData(formatTop_artists(data.top_artists));
      setStartReasonsData(formatStart_resons(data.reason_start));
      setDurationDistributionData(
        formatDuration_distribution(data.play_duration.distribution)
      );
    });
  }, []);
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
        {platformUsageData && <PlatformUsage data={platformUsageData} />}
      </div>
      <div style={{ width: "500px", height: "50%" }}>
        {/* <TopArtists data={topArtistsData}></TopArtists> */}
        {topArtistsData && <TopArtists data={topArtistsData} />}
      </div>
      <div style={{ width: "500px", height: "50%" }}>
        {startReasonsData && (
          <StartReasons data={startReasonsData}></StartReasons>
        )}
      </div>
      <div style={{ width: "500px", height: "50%" }}>
        {durationDistributionData && (
          <DurationDistribution
            data={durationDistributionData}
          ></DurationDistribution>
        )}
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
