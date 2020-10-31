import { Bit } from './types';
import Not from './Not';
import Xor from './Xor';

const Eq = (a: Bit, b: Bit): Bit => Not(Xor(a, b));

export default Eq;
