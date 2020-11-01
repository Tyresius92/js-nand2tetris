import { Bit } from '../types';
import Nand from '../Nand';
import Not from '../negation/Not';

const Or = (a: Bit, b: Bit): Bit => Nand(Not(a), Not(b));

export default Or;
