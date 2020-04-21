import React, { useReducer } from "react";
const initial = [0,1,2,3,4,5,6,7,8,9,10];
const NumbersModule = () => {

const [items, dispatch] = useReducer((state:any, action:any):any => {

    switch(action.type){
      case 'new':
        return state = [...initial];
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

},[...initial]);

  const rendered = 
  <> 
    <ul> 
      <button onClick={(e) => dispatch({"type":"new", "value": ''})}>new game</button>
        {
        [...items].map(item => <li
          key={item+1}
          onClick={(e) => dispatch({"type":"rmv", "value": e.currentTarget.innerText})}
          >
            {item}
        </li>)
        }
      </ul>
  </>;

  return rendered;
};

export default NumbersModule;


 