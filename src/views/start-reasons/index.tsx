import React, { memo } from "react";
import type { FC, ReactNode } from "react";
import Echarts from "../../components/Echarts";
import type { EChartsOption } from "echarts";
interface IProps {
  children?: ReactNode;
}
const StartReasons: FC<IProps> = () => {
  const option = {
    title: {
      text: "播放原因词云",
      left: "center",
    },
    tooltip: {},
    series: [
      {
        type: "wordCloud",
        shape: "circle",
        sizeRange: [12, 60],
        rotationRange: [-45, 90],
        gridSize: 18,
        textStyle: {
          color: () =>
            `rgb(${[
              Math.round(Math.random() * 160),
              Math.round(Math.random() * 160),
              Math.round(Math.random() * 160),
            ].join(",")})`,
        },
        data: [
          { name: "trackdone", value: 76655 },
          { name: "fwdbtn", value: 53793 },
          { name: "clickrow", value: 11228 },
          { name: "appload", value: 3729 },
          { name: "backbtn", value: 2205 },
          { name: "playbtn", value: 1458 },
          { name: "remote", value: 477 },
          { name: "trackerror", value: 120 },
          { name: "unknown", value: 23 },
          { name: "nextbtn", value: 21 },
          { name: "popup", value: 5 },
          { name: "endplay", value: 2 },
          { name: "autoplay", value: 1 },
        ],
      },
    ],
  } as EChartsOption;

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Echarts option={option}></Echarts>
    </div>
  );
};
export default memo(StartReasons);
