import {CheckArrayFN} from '../types/types';

const CheckArray: CheckArrayFN = (randomNum, arrayFromState) => {
      if(arrayFromState.length > 0){
            const index = arrayFromState.indexOf(Number.parseInt(randomNum.toString()));
            return(index > -1 ? true : false);
      }
      return(null);
};
export default CheckArray;