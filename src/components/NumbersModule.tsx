import React, { useReducer, useState, useEffect } from "react";
import GenerateNumber from "./GenerateNumber";
import Audio from "./Audio";
import { changeEasing } from "./CssFn/CssAlive";
import "./AllCss/styles.scss";
import fillArray from "./FillArray";

const numberRandomOrderdedArray = fillArray(0, 10);
const initialNumbers: number[] = [...numberRandomOrderdedArray];
const NumbersModule = ({ browserName }: any) => {
  const [rndmNum, setRndmNum] = useState();
  const [level, setLevel] = useState(0);
  const [items, dispatch] = useReducer(
    (state: any, action: any): any => {
      switch (action.type) {
        case "new":
          setLevel(level + 1);
          return (state = [...initialNumbers]);
        case "rmv":
          if (rndmNum == Number.parseInt(action.value)) {
            const index = [...state].indexOf(Number.parseInt(action.value));
            if (index > -1) {
              const temp = [...state];
              temp.splice(index, 1);
              changeEasing(level);
              return (state = [...temp]);
            }
          } else {
            return state;
          }
          break;
        default:
          return [...state];
      }
    },
    [...initialNumbers]
  );

  useEffect(() => {
    let rndNumLocal: any = GenerateNumber(items, 0, 10);
    setRndmNum(rndNumLocal);
  }, [items]);

  return (
    <>
      <header>
        {items.length === 0 ? (
          <div className="nextGame">
            <button onClick={() => dispatch({ type: "new" })}>next game</button>
          </div>
        ) : (
          <>
            <h4>Announced: {rndmNum}</h4>
            <h4>Level: {level}</h4>
          </>
        )}
      </header>
      <main>
        {items.length === 0 ? (
          <div className="flexWrapper">
            <h1>yay! next level {level + 1}</h1>
          </div>
        ) : (
          <ul className="ul">
            {[...items].map((item) => (
              <li
                key={item + 1}
                onClick={(e) =>
                  dispatch({ type: "rmv", value: e.currentTarget.innerText })
                }
              >
                {item}
              </li>
            ))}
          </ul>
        )}
        {items.length > 0 && (
          <>
            <Audio announcedNumber={rndmNum} />
          </>
        )}
      </main>
    </>
  );
};

export default NumbersModule;
