import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Test } from './Text';

const App = () => {
  const queryClient = new QueryClient();

  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <Test />
      </QueryClientProvider>
    </RecoilRoot>
  );
};

export default App;
