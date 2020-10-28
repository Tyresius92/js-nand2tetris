import { Bit, AdderResult } from './types';
import Or from './Or';
import And from './And';
import Xor from './Xor';

const FullAdder = (a: Bit, b: Bit, c: Bit): AdderResult => ({
  sum: Xor(a, Xor(b, c)),
  carry: Or(And(a, b), Or(And(a, c), And(b, c))),
});

export default FullAdder;
