import React, { memo } from "react";
import type { FC, ReactNode } from "react";
import Echarts from "../../components/Echarts";
import type { EChartsOption } from "echarts";
interface IProps {
  children?: ReactNode;
}
const TopArtists: FC<IProps> = () => {
  const option: EChartsOption = {
    title: {
      text: "艺术家播放次数 Top 20",
      left: "center",
    },
    tooltip: {
      trigger: "axis",
    },
    xAxis: {
      type: "category",
      data: [
        "The Beatles",
        "The Killers",
        "John Mayer",
        "Bob Dylan",
        "Paul McCartney",
        "Led Zeppelin",
        "Johnny Cash",
        "The Rolling Stones",
        "Radiohead",
        "The Black Keys",
        "Imagine Dragons",
        "Pink Floyd",
        "The Strokes",
        "Coldplay",
        "Arctic Monkeys",
        "Lou Reed",
        "The Velvet Underground",
        "Ed Sheeran",
        "Howard Shore",
        "Kings of Leon",
      ],
      axisLabel: {
        interval: 0,
        rotate: 30,
      },
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        name: "播放次数",
        type: "bar",
        data: [
          13621, 6878, 4855, 3814, 2697, 2482, 2478, 2390, 2305, 2231, 2116,
          2105, 1818, 1631, 1600, 1558, 1507, 1458, 1446, 1381,
        ],
      },
    ],
  };
  return <Echarts option={option}></Echarts>;
};
export default memo(TopArtists);
