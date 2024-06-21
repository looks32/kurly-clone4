// atoms.js
import { atom } from 'recoil';

export const itemsState = atom({
  key: 'itemsState', // 고유한 키
  default: [], // 초기 상태 값
});