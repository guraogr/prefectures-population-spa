import { useFetchPref } from '../../hooks/useFetchPref';
import Checkbox from '../atoms/Checkbox';

export const PrefectureCheckboxList = () => {
  const { data, isError, error, isLoading } = useFetchPref();

  if (isLoading) return <span>Loading</span>;
  if (isError) return <span>{error && error.message}</span>;
  if (!data) return <span>データがありません</span>;

  return (
    <>
      {data.data.result.map((pref) => (
        <label key={pref.prefCode}>
          <Checkbox />
          <span>{pref.prefName}</span>
        </label>
      ))}
    </>
  );
};
