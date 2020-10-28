import Bit from './Bit';
import Nand from './Nand';

const Not = (a: Bit): Bit => Nand(a, a);

export default Not;
