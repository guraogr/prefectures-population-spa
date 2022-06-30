import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { prefectureState } from '../../recoil/prefecture';

interface Props {
  prefCode: string;
}
const Checkbox = ({ prefCode }: Props) => {
  const [isChecked, setIsChecked] = useState(false);
  const [pref, setPref] = useRecoilState(prefectureState);

  const onChangeHandler = () => {
    if (isChecked) {
      setIsChecked(false);
      setPref(pref.filter((code) => code !== prefCode));
    } else {
      setIsChecked(true);
      setPref([...pref, prefCode]);
    }
  };

  return <input type="checkbox" onChange={onChangeHandler} />;
};
export default Checkbox;
