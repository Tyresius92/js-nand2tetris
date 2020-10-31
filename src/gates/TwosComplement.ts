import { Bus16 } from './types';
import Incrementer from './Incrementer';
import Not16 from './Not16';

const TwosComplement = (x: Bus16): Bus16 => Incrementer(Not16(x));

export default TwosComplement;
