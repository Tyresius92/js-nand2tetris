import { Bit } from '../types';
import Nand from '../Nand';
import Not from '../negation/Not';

const And = (a: Bit, b: Bit): Bit => Not(Nand(a, b));

export default And;
