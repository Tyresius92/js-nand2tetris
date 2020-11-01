import { Bit } from '../types';
import Not from '../negation/Not';
import Xor from '../or/Xor';

const Eq = (a: Bit, b: Bit): Bit => Not(Xor(a, b));

export default Eq;
