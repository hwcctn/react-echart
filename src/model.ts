export const data = {
  platform_usage: {
    platforms: [
      "android",
      "cast to device",
      "iOS",
      "windows",
      "mac",
      "web player",
    ],
    count: [139821, 3898, 3049, 1691, 1176, 225],
    percentage: [93.3, 2.6, 2.03, 1.13, 0.78, 0.15],
    avg_play_time: [125.08, 186.5, 164.96, 138.24, 214.21, 111.72],
    total_play_time: [291479.92, 12116.27, 8382.52, 3896.06, 4198.48, 418.94],
  },
  top_artists: {
    artists: [
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
    play_count: [
      13621, 6878, 4855, 3814, 2697, 2482, 2478, 2390, 2305, 2231, 2116, 2105,
      1818, 1631, 1600, 1558, 1507, 1458, 1446, 1381,
    ],
  },
  duration_distribution: {
    duration: [
      "0秒 (立即跳过)",
      "1-10秒",
      "10-30秒",
      "30秒-1分钟",
      "1-3分钟",
      "3-5分钟",
      "5分钟以上",
    ],
    play_count: [3733, 45216, 6711, 5182, 30714, 49783, 8521],
    play_percent: [2.49, 30.17, 4.48, 3.46, 20.5, 33.22, 5.69],
  },
  start_resons: {
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
  //   下面那两个直接返回这些数据给我
  //   spark-sql (default)> SELECT * FROM hadoop_catalog.default.play_duration_stats;
  // 149860    0    1561125    128316.64    2794    138840    218493    117840.06
  play_duration_stats: {},
  // spark-sql (default)> SELECT * FROM hadoop_catalog.default.skip_ratio_analysis;
  // false    141991    94.75
  // true    7869    5.25
  skip_analysis: {},
};
