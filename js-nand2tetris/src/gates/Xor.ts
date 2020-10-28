import Bit from './Bit';
import And from './And';
import Not from './Not';
import Or from './Or';

const Xor = (a: Bit, b: Bit): Bit => Or(And(a, Not(b)), And(Not(a), b));

export default Xor;
