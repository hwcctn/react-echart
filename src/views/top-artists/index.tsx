import React, { memo } from "react";
import type { FC, ReactNode } from "react";
import Echarts from "../../components/Echarts";
import type { EChartsOption } from "echarts";
import type { TopArtistsData } from "../utils/formatData";
interface IProps {
  children?: ReactNode;
  data: TopArtistsData;
}
const TopArtists: FC<IProps> = ({ data }) => {
  const { artists, play_count } = data;
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
      data: artists,
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
        data: play_count,
      },
    ],
  };
  return <Echarts option={option}></Echarts>;
};
export default memo(TopArtists);
