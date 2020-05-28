import { random } from "lodash";
import CheckArray from "./CheckArray";
import {fillArrayFN} from '../types/types';

const fillArray: fillArrayFN<number> = (min, max) => {
  let array: number[] = [];
  let rndNum:number;
  rndNum = random(min, max);
  array.push(rndNum);
  function fillArray() {
    for (let i = 0; array.length < max; i++) {
      rndNum = random(min, max);
      if (!CheckArray(rndNum, array)) {
        array.push(rndNum);
      } else {
        array.pop();
      }
    }
    return [...array];
  }
  fillArray();
  return [...array];
};

export default fillArray;
