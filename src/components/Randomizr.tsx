import {random} from 'lodash';
import {randomizerFN} from '../types/types'

const Randomizr: randomizerFN<number> = (min, max) => random(min, max);
//const Randomizr = (min, max) => Number.parseFloat(Math.random() * (max - min) + min).toFixed(0);
export default Randomizr;