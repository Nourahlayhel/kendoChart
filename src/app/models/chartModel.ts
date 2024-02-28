export interface ChartModel {
  series: Series[];
}

export interface Series {
  data: DataItem[];
}

export interface DataItem {
  x: string;
  value: string;
}
