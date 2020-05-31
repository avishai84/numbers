import {random} from 'lodash';
import {randomizerFN} from '../types/types'

const Randomizr: randomizerFN<number> = (min, max) => random(min, max);

export default Randomizr;