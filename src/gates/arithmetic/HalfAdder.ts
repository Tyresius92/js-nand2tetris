import { Bit, AdderResult } from '../types';
import Xor from '../or/Xor';
import And from '../and/And';

const HalfAdder = (a: Bit, b: Bit): AdderResult => ({
  sum: Xor(a, b),
  carry: And(a, b),
});

export default HalfAdder;
