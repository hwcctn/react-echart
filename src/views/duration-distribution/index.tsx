import React, { memo } from "react";
import type { FC, ReactNode } from "react";
import type { EChartsOption } from "echarts";
import Echarts from "../../components/Echarts";
import type { DurationDistributionData } from "../utils/formatData";
interface IProps {
  children?: ReactNode;
  data: DurationDistributionData;
}
const DurationDistribution: FC<IProps> = ({ data }) => {
  const { duration, play_count, play_percent } = data;
  const option: EChartsOption = {
    title: {
      text: "播放时长分布",
      left: "center",
    },
    tooltip: {
      trigger: "axis",
      axisPointer: { type: "shadow" },
    },
    legend: {
      bottom: 0,
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "10%",
      containLabel: true,
    },
    xAxis: {
      type: "value",
    },
    yAxis: {
      type: "category",
      data: duration,
    },
    series: [
      {
        name: "播放次数",
        type: "bar",
        stack: "总量",
        emphasis: {
          focus: "series",
        },
        label: {
          show: true,
          position: "insideRight",
        },
        data: play_count,
      },
      {
        name: "占比 (%)",
        type: "bar",
        stack: "总量",
        emphasis: {
          focus: "series",
        },
        label: {
          show: false,
          position: "insideRight",
          formatter: "{c}%",
        },
        data: play_percent,
      },
    ],
  };

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Echarts option={option}></Echarts>
    </div>
  );
};
export default memo(DurationDistribution);
