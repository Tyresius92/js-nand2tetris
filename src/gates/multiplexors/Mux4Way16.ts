import { Bit, Bus16 } from '../types';
import Mux16 from './Mux16';

const Mux4Way16 = (
  a: Bus16,
  b: Bus16,
  c: Bus16,
  d: Bus16,
  sel: [Bit, Bit]
): Bus16 => Mux16(Mux16(a, b, sel[1]), Mux16(c, d, sel[1]), sel[0]);

export default Mux4Way16;
