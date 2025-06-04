/**
 * Echarts组件封装
 * 使用React Hooks 和Echarts库结合，用于React应用中渲染Echarts图表
 * @param {object} props -组件属性
 * @param {object} props.option Echarts 图表的配置选项，该选项用于初始化和更新图表。如果没有提供，则图表将不会被初始化
 */
import type { EChartsOption } from "echarts";
import React, { memo, useEffect, useRef } from "react";
import type { FC, ReactNode } from "react";
import * as echarts from "echarts";
import "echarts-wordcloud";
import "./index.css";
interface IProps {
  option?: EChartsOption;
  children?: ReactNode;
}
const Echarts: FC<IProps> = ({ option }) => {
  const box = useRef(null);
  useEffect(() => {
    console.log(box.current);
    const myChart = echarts.init(box.current);
    console.log(option);
    if (option != null) {
      myChart.setOption(option);
    } else {
      console.log("没有传过来");
    }
  }, [option]);
  return <div ref={box} id="main"></div>;
};
export default memo(Echarts);
