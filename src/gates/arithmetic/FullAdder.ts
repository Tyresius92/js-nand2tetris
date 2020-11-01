import { Bit, AdderResult } from '../types';
import Or from '../or/Or';
import And from '../and/And';
import Xor from '../or/Xor';

const FullAdder = (a: Bit, b: Bit, c: Bit): AdderResult => ({
  sum: Xor(a, Xor(b, c)),
  carry: Or(And(a, b), Or(And(a, c), And(b, c))),
});

export default FullAdder;
