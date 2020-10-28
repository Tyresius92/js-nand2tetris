import { Bit } from './types';
import And from './And';
import Not from './Not';

const DMux8Way = (
  input: Bit,
  sel: [Bit, Bit, Bit]
): [Bit, Bit, Bit, Bit, Bit, Bit, Bit, Bit] => [
  And(input, And(Not(sel[0]), And(Not(sel[1]), Not(sel[2])))),
  And(input, And(Not(sel[0]), And(Not(sel[1]), sel[2]))),
  And(input, And(Not(sel[0]), And(sel[1], Not(sel[2])))),
  And(input, And(Not(sel[0]), And(sel[1], sel[2]))),
  And(input, And(sel[0], And(Not(sel[1]), Not(sel[2])))),
  And(input, And(sel[0], And(Not(sel[1]), sel[2]))),
  And(input, And(sel[0], And(sel[1], Not(sel[2])))),
  And(input, And(sel[0], And(sel[1], sel[2]))),
];

export default DMux8Way;
