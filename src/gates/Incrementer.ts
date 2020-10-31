import { Bus16 } from './types';
import Add16 from './Add16';
import { ONE } from './constants';

const Incrementer = (input: Bus16): Bus16 => Add16(input, ONE);

export default Incrementer;
