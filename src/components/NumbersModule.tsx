import React, { useReducer, useState } from "react";
import Randomizr from './Randomizr';
import CheckArray from './CheckArray';

const initialNumbers = [0,1,2,3,4,5,6,7,8,9,10];

const NumbersModule = () => {
  //const getRandomArbitrary:any = (min:any, max:any) => Number.parseFloat(Math.random() * (max - min) + min).toFixed(0);
const [rndmNum, setRndmNum] = useState();
const [items, dispatch] = useReducer((state:any, action:any):any => {

    switch(action.type){
      case 'Randomizr':
         const rndNum = Randomizr(0, 10);
        
          console.log(CheckArray(rndNum, state));
        return state;
      case 'new':
        return state = [...initialNumbers];
      case 'rmv':
        const index = [...state].indexOf(Number.parseInt(action.value));
        if(index > -1){
          const temp = [...state];
          temp.splice(index, 1);
          return(state = [...temp]);
        }
        break;
        default: return [...state];  
      }

},[...initialNumbers]);
  
console.log(rndmNum);

  return(
    <> 
      <ul> 
      <button onClick={() => dispatch({"type":"Randomizr"})}>Randomizr</button>
        New Number: {rndmNum}
        <button onClick={() => dispatch({"type":"new"})}>new game</button>
          {
          [...items].map(item => <li
            key={item+1}
            onClick={(e) => dispatch({"type":"rmv", "value": e.currentTarget.innerText})}
            >
              {item}
          </li>)
          }
        </ul>
    </>
    );
};

export default NumbersModule;


 