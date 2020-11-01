import { Bus16 } from '../types';
import Not from './Not';

const Not16 = (input: Bus16): Bus16 => [
  Not(input[0]),
  Not(input[1]),
  Not(input[2]),
  Not(input[3]),
  Not(input[4]),
  Not(input[5]),
  Not(input[6]),
  Not(input[7]),
  Not(input[8]),
  Not(input[9]),
  Not(input[10]),
  Not(input[11]),
  Not(input[12]),
  Not(input[13]),
  Not(input[14]),
  Not(input[15]),
];

export default Not16;
