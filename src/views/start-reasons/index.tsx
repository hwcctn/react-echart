import React, { memo } from "react";
import type { FC, ReactNode } from "react";
import Echarts from "../../components/Echarts";
import type { EChartsOption } from "echarts";
import type { StartReasonsData } from "../utils/formatData";
interface IProps {
  children?: ReactNode;
  data: StartReasonsData;
}
const StartReasons: FC<IProps> = ({ data }) => {
  // console.log("sss", data.data);
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
        data: data.data,
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
