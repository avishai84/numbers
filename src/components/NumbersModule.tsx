import React, { useReducer, useState, useEffect } from "react";
import GenerateNumber from './GenerateNumber';
import Audio from './Audio';

const initialNumbers = [0,1,2,3,4,5,6,7,8,9,10];
const NumbersModule = ({browserName}:any) => {
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

  let rndNumLocal:any = GenerateNumber(items);
  setRndmNum(rndNumLocal);
  
}, [items]);

  return(
    <> 
      <ul> 
        Announce: {rndmNum} {items.length === 0 && <button onClick={() => dispatch({"type":"new"})}>new game</button>}
          {
          [...items].map(item => <li
            key={item+1}
            onClick={(e) => dispatch({"type":"rmv", "value": e.currentTarget.innerText})}
            >
              {item}
          </li>)
          }
        </ul>
        {items.length > 0 && 
        <Audio announcedNumber={rndmNum} browser={browserName}/>
        }
    </>
    );
};

export default NumbersModule;


 