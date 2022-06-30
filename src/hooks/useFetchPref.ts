import { AxiosError, AxiosResponse } from 'axios';
import { useQuery } from 'react-query';
import apiClient from '../api/apiClient';
import { SuccessFetch } from '../types/api';
import { Prefecture } from '../types/prefectures';

export const useFetchPref = () => {
  const fetchPrefcture = async () => {
    const response = await apiClient.get<SuccessFetch<Prefecture[]>>('prefectures');
    return response;
  };

  const { data, isError, isLoading, error } = useQuery<AxiosResponse<SuccessFetch<Prefecture[]>>, AxiosError>(
    'prefectures',
    fetchPrefcture
  );

  return { data, isError, isLoading, error };
};
