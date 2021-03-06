import { Bit } from '../types';
import And from '../and/And';
import Not from '../negation/Not';

// TODO: Is there a better way to do this? Maybe using DMux gates?
const DMux4Way = (input: Bit, sel: [Bit, Bit]): [Bit, Bit, Bit, Bit] => [
  And(input, And(Not(sel[0]), Not(sel[1]))),
  And(input, And(Not(sel[0]), sel[1])),
  And(input, And(sel[0], Not(sel[1]))),
  And(input, And(sel[0], sel[1])),
];

export default DMux4Way;
