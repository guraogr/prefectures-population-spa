import { ChangeEvent, Dispatch, useState } from 'react';

interface Props {
  prefCode: string;
  onChangeHandler: (
    e: ChangeEvent<HTMLInputElement>,
    isChecked: boolean,
    setIsChecked: Dispatch<React.SetStateAction<boolean>>
  ) => Promise<void>;
}
const Checkbox = ({ prefCode, onChangeHandler }: Props) => {
  const [isChecked, setIsChecked] = useState(false);

  const onChangeFunc = (e: ChangeEvent<HTMLInputElement>) => {
    try {
      void onChangeHandler(e, isChecked, setIsChecked);
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
    }
  };

  return <input type="checkbox" onChange={onChangeFunc} value={prefCode} />;
};

export default Checkbox;
