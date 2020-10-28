import Bit from './Bit';
import Nand from './Nand';
import Not from './Not';

const And = (a: Bit, b: Bit): Bit => Not(Nand(a, b));

export default And;
