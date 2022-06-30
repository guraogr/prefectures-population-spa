import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from 'react-query';
import { PrefectureCheckboxList } from './components/Organisms/PrefectureCheckboxList';

const App = () => {
  const queryClient = new QueryClient();

  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <PrefectureCheckboxList />
      </QueryClientProvider>
    </RecoilRoot>
  );
};

export default App;
