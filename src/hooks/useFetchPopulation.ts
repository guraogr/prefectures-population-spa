import { AxiosError, AxiosResponse } from 'axios';
import { useQuery } from 'react-query';
import apiClient from '../api/apiClient';
import { SuccessFetch } from '../types/api';
import { FetchPopulation, RequestPopulationParams } from '../types/population';

export const useFetchPopulation = () => {
  const fetchPopulationParam: RequestPopulationParams = {
    url: 'population/composition/perYear',
    config: {
      prefCode: '1',
      cityCode: '-',
    },
  };
  const fetchPopulation = async () => {
    const response = await apiClient.get<SuccessFetch<FetchPopulation[]>>(fetchPopulationParam.url, {
      params: fetchPopulationParam.config,
    });
    return response;
  };

  const { data, isError, isLoading, error } = useQuery<AxiosResponse<SuccessFetch<FetchPopulation[]>>, AxiosError>(
    'population',
    fetchPopulation
  );

  return { data, isError, isLoading, error };
};
