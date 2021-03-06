/// <reference types="react-scripts" />

export type genericFunc<TFirst> = (param: TFirst) => TFirst;

export type langGeneric<TFfirst> = () => React.ReactElement;

export type NumberModuleProps = {
      
}

export type SoundsType = [
      { 'zero': string, '_': string},
      { 'one': string, '_': string},
      { 'two': string, '_': string},
      { 'three': string, '_': string},
      { 'four': string, '_':  string},
      { 'five': string, '_':  string},
      { 'six': string, '_': string},
      { 'seven': string, '_' : string},
      { 'eight': string, '_': string},
      { 'nine': string, '_':  string},
      { 'ten': string, '_': string}
];

// export type rndom = (min:number, max:number ) =>  1;

// export type CheckArrayFN<TFirst> = (rndNum:TFirst, arrayFromSatate: string[]): boolean | null =>  {
//       return true;
// }

