import React, { memo } from "react";
import type { FC, ReactNode } from "react";
import Echarts from "../../components/Echarts";
import type { EChartsOption } from "echarts";
interface IProps {
  children?: ReactNode;
}
const SkipAnalysis: FC<IProps> = () => {
  const option: EChartsOption = {
    grid: {
      left: "15%",
      right: "5%",
      top: "15%",
    },
    title: { text: "播放时长分布箱线图" },
    tooltip: { trigger: "item" },
    xAxis: { type: "category", data: ["播放时长"] },
    yAxis: { type: "value", name: "时长（秒）" },
    series: [
      {
        name: "箱线图",
        type: "boxplot",
        data: [
          {
            value: [0, 138840, 149860, 218493, 1561125], // 顺序: [min, Q1, median, Q3, max]
            itemStyle: { color: "#5470C6" },
          },
        ],
      },
    ],
  };
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Echarts option={option}></Echarts>
    </div>
  );
};
export default memo(SkipAnalysis);
