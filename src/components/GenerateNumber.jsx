import Randomizr from './Randomizr';
import CheckArray from './CheckArray';

const GenerateNumber = (currentArrayState, min, max) => {
   console.log('GenerateNumber array ', currentArrayState.length);
      let rndNum, checking;
      if(CheckArray(Number.parseInt(rndNum), currentArrayState) !== null){
       do{
        rndNum = Randomizr(min, max);
        checking = CheckArray(Number.parseInt(rndNum), currentArrayState);
        }while(checking === false);
       return(rndNum);
      }
   return(null);
};

export default GenerateNumber;