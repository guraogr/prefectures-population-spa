import { ChangeEvent, Dispatch } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { fetchPopulation } from '../../api/fetchPopulation';
import { useFetchPref } from '../../hooks/useFetchPref';
import { displayPrefectures, selectedPrefectures } from '../../recoil/prefecture';
import Checkbox from '../atoms/Checkbox';

const CheckboxList = () => {
  const [selectedPrefs, setSelectedPrefs] = useRecoilState(selectedPrefectures);
  const setDisplayPrefs = useSetRecoilState(displayPrefectures);
  const { data, isError, error, isLoading } = useFetchPref();

  const onChangeHandler = async (
    e: ChangeEvent<HTMLInputElement>,
    isChecked: boolean,
    setIsChecked: Dispatch<React.SetStateAction<boolean>>
  ) => {
    const checkedPrefCode = e.target.value;

    if (isChecked) {
      setIsChecked(false);
      setSelectedPrefs(selectedPrefs.filter((code) => code !== checkedPrefCode));
    } else {
      setIsChecked(true);
      setSelectedPrefs([...selectedPrefs, checkedPrefCode]);
      const res = await fetchPopulation(checkedPrefCode);
      console.log(res);
    }
  };

  if (isLoading) return <span>Loading</span>;
  if (isError) return <span>{error && error.message}</span>;
  if (!data) return <span>データがありません</span>;

  return (
    <>
      {data.data.result.map((dt) => (
        <label key={dt.prefCode}>
          <Checkbox prefCode={dt.prefCode.toString()} onChangeHandler={onChangeHandler} />
          <span>{dt.prefName}</span>
        </label>
      ))}
    </>
  );
};

export default CheckboxList;
