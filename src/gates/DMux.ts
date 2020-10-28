import { Bit } from './types';
import And from './And';
import Not from './Not';

const DMux = (input: Bit, sel: Bit): [Bit, Bit] => [
  And(Not(sel), input),
  And(sel, input),
];

export default DMux;
