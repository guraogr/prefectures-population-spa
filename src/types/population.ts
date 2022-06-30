export interface Population {
  year: number;
  value: number;
}

export interface FetchPopulation {
  boundaryYear: number;
  data: Population[];
}

export interface RequestPopulationParams {
  url: string;
  config: {
    prefCode: string;
    cityCode: string;
  };
}
