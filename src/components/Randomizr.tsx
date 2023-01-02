import {random} from 'lodash';
import {RandomizerFN} from '../types'

const Randomizr: RandomizerFN<number> = (min, max) => random(min, max);

export default Randomizr;