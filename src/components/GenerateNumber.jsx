import Randomizr from './Randomizr';
import CheckArray from './CheckArray';

const GenerateNumber = (currentArrayState) => {
      let rndNum, checking;
      if(CheckArray(Number.parseInt(rndNum), currentArrayState) !== null){
       do{
        rndNum = Randomizr(0, 10);
        checking = CheckArray(Number.parseInt(rndNum), currentArrayState);
        }while(checking === false);
       return(rndNum);
      }
   return(null);
};

export default GenerateNumber;