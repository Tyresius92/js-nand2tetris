import { Bit } from '../types';
import And from '../and/And';
import Not from '../negation/Not';

const DMux = (input: Bit, sel: Bit): [Bit, Bit] => [
  And(Not(sel), input),
  And(sel, input),
];

export default DMux;
