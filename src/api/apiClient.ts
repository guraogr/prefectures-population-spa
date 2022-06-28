import axios from 'axios';

const envConfirmation = (): {
  baseUrl: string;
  apiKey: string;
} => {
  if (!process.env.REACT_APP_BASE_URL || !process.env.REACT_APP_API_KEY) {
    console.error('環境変数が上手く取得できません');
    return { baseUrl: '', apiKey: '' };
  }
  return { baseUrl: process.env.REACT_APP_BASE_URL, apiKey: process.env.REACT_APP_API_KEY };
};

const { baseUrl, apiKey } = envConfirmation();

const apiClient = axios.create({
  baseURL: `${baseUrl}/api/v1/`,
  headers: { 'X-API-KEY': apiKey },
});

export default apiClient;
