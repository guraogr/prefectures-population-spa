import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from 'react-query';
import Home from './components/Pages/Home';

const App = () => {
  const queryClient = new QueryClient();

  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <Home />
      </QueryClientProvider>
    </RecoilRoot>
  );
};

export default App;
