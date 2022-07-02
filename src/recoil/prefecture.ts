import { atom } from 'recoil';

export const selectedPrefectures = atom<string[]>({
  key: 'selectedPrefectures',
  default: [],
});

export const displayPrefectures = atom<string[]>({
  key: 'displayPrefectures',
  default: [],
});
