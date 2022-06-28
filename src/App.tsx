import { QueryClient, QueryClientProvider } from 'react-query';
import './App.css';
import { Test } from './Text';

const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Test />
    </QueryClientProvider>
  );
};

export default App;
