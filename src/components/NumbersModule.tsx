import React, { useReducer, useState, useEffect } from "react";
import GenerateNumber from './GenerateNumber';

const initialNumbers = [0,1,2,3,4,5,6,7,8,9,10];
const NumbersModule = () => {
const [rndmNum, setRndmNum] = useState();
const [items, dispatch] = useReducer((state:any, action:any):any => {

    switch(action.type){
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


useEffect( () => {

  let rndNum:any = GenerateNumber(items);
  setRndmNum(rndNum);
  
}, [items]);

  return(
    <> 
      <ul> 
        New Number: {rndmNum} {items.length === 0 && <button onClick={() => dispatch({"type":"new"})}>new game</button>}
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


 