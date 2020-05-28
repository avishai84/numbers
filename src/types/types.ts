
export type randomizerFN<Type> = (min: Type, max: Type) => void;

export type fillArrayFN<Type> = (min: Type, max: Type) => number[];

export type CheckArrayFN = (randomNum: number, arrayFromState: number[]) => boolean | null;

export type GenerateNumberFN<Type> = (currentArrayState: number[], min: Type, max: Type) => number | null;

export type langFN = () => JSX.Element;


