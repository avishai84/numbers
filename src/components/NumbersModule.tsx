import React, { useReducer, useState, useEffect } from "react";
import GenerateNumber from './GenerateNumber';
import Audio from './Audio';
import {hello, CssAlive, bye, changeEasing} from './CssFn/CssAlive';
import './AllCss/styles.scss';
// const updateCSSInterval:any = ():any => {
//   setInterval(() => {
//     console.log('interval ');
//   }, 5000);

// };  
const initialNumbers:any = [0,1,2,3,4,5,6,7,8,9,10];
const NumbersModule = ({browserName}:any) => {
const [rndmNum, setRndmNum] = useState();
// const [cssAlive, setCssAlive] = useState();
// const [isGameOver, setIsgameOver ] = useState(false);
const [items, dispatch] = useReducer((state:any, action:any):any => {


    switch(action.type){
      case 'new':
        return state = [...initialNumbers];
      case 'rmv':

        if(rndmNum == Number.parseInt(action.value)){
          const index = [...state].indexOf(Number.parseInt(action.value));
          if(index > -1){
            const temp = [...state];
            temp.splice(index, 1);
            changeEasing();
            return(state = [...temp]);
          }
        }else{
          return(state);
        }
       
        break;
        default: return [...state];  
      }

},[...initialNumbers]);


useEffect( () => {
  let rndNumLocal:any = GenerateNumber(items);
      setRndmNum(rndNumLocal);
}, [items]);

// useEffect(()=> { 
//   // setInterval(() => {
//     updateCSSInterval();
//   // }, 5000);
//   // setCssAlive();
//   if([...items].length === 0){
//     console.log('Items cssAlive 1 ');
//     setIsgameOver(true);
//     clearInterval(updateCSSInterval);
//   }
//   if([...items].length === initialNumbers){
//     console.log('Items cssAlive 2 ');
//     updateCSSInterval();
//   }
// });


// useEffect(() => {
//  console.log('GAME OVER');
//   return () => {
//     // cleanup
//     //clearInterval(updateCSSInterval);
//   }
// }, [isGameOver])

  return(
    <> 
      <h2>Announce: {rndmNum} {items.length === 0 && <button onClick={() => dispatch({"type":"new"})}>new game</button>}</h2>
      <ul className="ul"> 
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


 