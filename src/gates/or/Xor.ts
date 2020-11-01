import { Bit } from '../types';
import And from '../and/And';
import Not from '../negation/Not';
import Or from './Or';

const Xor = (a: Bit, b: Bit): Bit => Or(And(a, Not(b)), And(Not(a), b));

export default Xor;
