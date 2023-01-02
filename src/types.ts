
export type RandomizerFN<Type> = (min: Type, max: Type) => number;

export type FillArrayFN<Type> = (min: Type, max: Type) => number[];

export type CheckArrayFN = (randomNum: number, arrayFromState: number[]) => boolean | null;

export type GenerateNumberFN<Type> = (currentArrayState: number[], min: Type, max: Type) => number | null;

export type LangFN = () => JSX.Element;


