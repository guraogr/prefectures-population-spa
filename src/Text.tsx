import { AxiosError, AxiosResponse } from 'axios';
import { useQuery } from 'react-query';
import apiClient from './api/apiClient';
import { FetchResult } from './types/api';
import { Prefecture } from './types/prefectures';

export const Test = () => {
  const fetchPrefcture = async () => {
    const response = await apiClient.get<FetchResult<Prefecture[]>>('prefectures');
    return response;
  };

  const { data, isError, isLoading, error } = useQuery<AxiosResponse<FetchResult<Prefecture[]>>, AxiosError>(
    'prefectures',
    fetchPrefcture
  );

  if (isLoading) return <span>Loading</span>;

  if (isError) {
    return <span>{error.message}</span>;
  }

  return <div>aaa</div>;
};
