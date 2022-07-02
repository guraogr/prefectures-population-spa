import apiClient from './apiClient';
import { SuccessFetch } from '../types/api';
import { FetchPopulation, RequestPopulationParams } from '../types/population';

export const fetchPopulation = async (prefCode: string, cityCode = '-') => {
  const fetchPopulationParam: RequestPopulationParams = {
    url: 'population/composition/perYear',
    config: {
      prefCode,
      cityCode,
    },
  };
  const response = await apiClient.get<SuccessFetch<FetchPopulation>>(fetchPopulationParam.url, {
    params: fetchPopulationParam.config,
  });
  console.log(response.data.result.data[0].data);
  // console.log(response.data.result.data[0].data[0]);
  return response;
};
