import { Bit, AdderResult } from './types';
import Xor from './Xor';
import And from './And';

const HalfAdder = (a: Bit, b: Bit): AdderResult => ({
  sum: Xor(a, b),
  carry: And(a, b),
});

export default HalfAdder;
