export interface Population {
  year: number;
  value: number;
}

export interface FetchPopulation {
  label: string;
  data: {
    data: Population[];
    boundaryYear: number;
  }[];
}

export interface RequestPopulationParams {
  url: string;
  config: {
    prefCode: string;
    cityCode: string;
  };
}
