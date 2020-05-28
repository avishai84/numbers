import Randomizr from './Randomizr';
import CheckArray from './CheckArray';
import {GenerateNumberFN} from '../types/types';

const GenerateNumber:GenerateNumberFN<number> = (currentArrayState, min, max) => {
      let rndNum:any, checking:any;
      if(CheckArray(Number.parseInt(rndNum), currentArrayState) !== null){
       do{
        rndNum = Randomizr(min, max);
        checking = CheckArray(Number.parseInt(rndNum.toString()), currentArrayState);
        }while(checking === false);
       return(rndNum);
      }
   return(null);
};

export default GenerateNumber;