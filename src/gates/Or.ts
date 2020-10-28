import Bit from './Bit';
import Nand from './Nand';
import Not from './Not';

const Or = (a: Bit, b: Bit): Bit => Nand(Not(a), Not(b));

export default Or;
