import React, { memo, useState } from "react";
import type { FC, ReactNode } from "react";
import Echarts from "../../components/Echarts";
interface IProps {
  children?: ReactNode;
}
const platforms = [
  "android",
  "cast to device",
  "iOS",
  "windows",
  "mac",
  "web player",
];
const count = [139821, 3898, 3049, 1691, 1176, 225];
const percentage = [93.3, 2.6, 2.03, 1.13, 0.78, 0.15];
const avg_play_time = [125.08, 186.5, 164.96, 138.24, 214.21, 111.72];
const total_play_time = [
  291479.92, 12116.27, 8382.52, 3896.06, 4198.48, 418.94,
];
type ChartType = "bar" | "line" | "pie";
const optionsMap: Record<
  string,
  { title: string; type: ChartType; data: number[] }
> = {
  count: { title: "平台播放次数", type: "bar", data: count },
  percentage: { title: "平台播放占比", type: "pie", data: percentage },
  avg_play_time: { title: "总播放时长", type: "line", data: avg_play_time },
  total_play_time: {
    title: "平均播放时长",
    type: "line",
    data: total_play_time,
  },
};
const PlatformUsage: FC<IProps> = () => {
  const [metric, setMetric] = useState("percentage");
  const getOption = (): echarts.EChartsOption => {
    const { title, type, data } = optionsMap[metric];

    if (type === "pie") {
      return {
        title: { text: title, left: "center" },
        tooltip: { trigger: "item" },
        legend: { bottom: "0%" },
        series: [
          {
            name: "播放占比",
            type: "pie",
            radius: "50%",
            data: platforms.map((name, i) => ({
              value: data[i],
              name,
            })),
          },
        ],
      };
    } else {
      return {
        title: { text: title },
        tooltip: { trigger: "axis" },
        legend: {
          top: "20px", 
          left: "center",
        },
        xAxis: {
          type: "category",
          data: platforms,
          axisLabel: { interval: 0, rotate: 30 },
        },

        yAxis: { type: "value" },
        series: [
          {
            name: metric,
            type,
            data,
          },
        ],
      };
    }
  };

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <select value={metric} onChange={(e) => setMetric(e.target.value)}>
        <option value="count">播放次数（柱状图）</option>
        <option value="percentage">播放占比（饼图）</option>
        <option value="avg_play_time">平均播放时长（折线图）</option>
        <option value="total_play_time">总播放时长（折线图）</option>
      </select>
      <Echarts option={getOption()}></Echarts>
    </div>
  );
};
export default memo(PlatformUsage);
