export function formatPlatform_usage(data: any) {
  const platforms = data.map((item: any) => item.platform);
  const count = data.map((item: any) => item.play_count);
  const percentage = data.map((item: any) => item.percentage);
  const avg_play_time = data.map((item: any) => item.avg_play_time_ms);
  const total_play_time = data.map((item: any) => item.total_play_time_minutes);
  return {
    platforms,
    count,
    percentage,
    avg_play_time,
    total_play_time,
  };
}
export function formatTop_artists(data: any) {
  const artists = data.map((item: any) => item.artist_name);
  const play_count = data.map((item: any) => item.play_count);
  return {
    artists,
    play_count,
  };
}
export function formatDuration_distribution(data: any) {
  const duration = data.map((item: any) => item.duration_range);
  const play_count = data.map((item: any) => item.play_count);
  const play_percent = data.map((item: any) => item.percentage);
  return {
    duration,
    play_count,
    play_percent,
  };
}
export function formatStart_resons(data: any) {
  return {
    data: data.map((item: any) => ({
      name: item.reason_start,
      value: item.play_count,
    })),
  };
}

export interface PlatformUsageData {
  platforms: string[];
  count: number[];
  percentage: number[];
  avg_play_time: number[]; // 毫秒为单位
  total_play_time: number[]; // 分钟为单位
}

export interface TopArtistsData {
  artists: string[];
  play_count: number[];
}

export interface DurationDistributionData {
  duration: string[];
  play_count: number[];
  play_percent: number[];
}

export interface StartReasonsData {
  data: {
    name: string;
    value: number;
  }[];
}
