import React, { memo } from "react";
import type { FC, ReactNode } from "react";
import type { EChartsOption } from "echarts";
import Echarts from "../../components/Echarts";
interface IProps {
  children?: ReactNode;
}
const DurationDistribution: FC<IProps> = () => {
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
      data: [
        "0秒 (立即跳过)",
        "1-10秒",
        "10-30秒",
        "30秒-1分钟",
        "1-3分钟",
        "3-5分钟",
        "5分钟以上",
      ],
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
        data: [3733, 45216, 6711, 5182, 30714, 49783, 8521],
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
        data: [2.49, 30.17, 4.48, 3.46, 20.5, 33.22, 5.69],
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
