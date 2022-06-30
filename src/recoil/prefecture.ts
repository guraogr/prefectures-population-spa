import { atom } from 'recoil';

export const prefectureState = atom<string[]>({
  key: 'prefecture',
  default: [],
});
