import { Bit, Bus16 } from '../types';
import Mux16 from './Mux16';

const Mux8Way16 = (
  a: Bus16,
  b: Bus16,
  c: Bus16,
  d: Bus16,
  e: Bus16,
  f: Bus16,
  g: Bus16,
  h: Bus16,
  sel: [Bit, Bit, Bit]
): Bus16 =>
  Mux16(
    Mux16(Mux16(a, b, sel[2]), Mux16(c, d, sel[2]), sel[1]),
    Mux16(Mux16(e, f, sel[2]), Mux16(g, h, sel[2]), sel[1]),
    sel[0]
  );

export default Mux8Way16;
