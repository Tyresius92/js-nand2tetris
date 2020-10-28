import Bit from './Bit';
import Mux from './Mux';

const Mux16 = (
  a: [
    Bit,
    Bit,
    Bit,
    Bit,
    Bit,
    Bit,
    Bit,
    Bit,
    Bit,
    Bit,
    Bit,
    Bit,
    Bit,
    Bit,
    Bit,
    Bit
  ],
  b: [
    Bit,
    Bit,
    Bit,
    Bit,
    Bit,
    Bit,
    Bit,
    Bit,
    Bit,
    Bit,
    Bit,
    Bit,
    Bit,
    Bit,
    Bit,
    Bit
  ],
  sel: Bit
): [
  Bit,
  Bit,
  Bit,
  Bit,
  Bit,
  Bit,
  Bit,
  Bit,
  Bit,
  Bit,
  Bit,
  Bit,
  Bit,
  Bit,
  Bit,
  Bit
] => {
  return [
    Mux(a[0], b[0], sel),
    Mux(a[1], b[1], sel),
    Mux(a[2], b[2], sel),
    Mux(a[3], b[3], sel),
    Mux(a[4], b[4], sel),
    Mux(a[5], b[5], sel),
    Mux(a[6], b[6], sel),
    Mux(a[7], b[7], sel),
    Mux(a[8], b[8], sel),
    Mux(a[9], b[9], sel),
    Mux(a[10], b[10], sel),
    Mux(a[11], b[11], sel),
    Mux(a[12], b[12], sel),
    Mux(a[13], b[13], sel),
    Mux(a[14], b[14], sel),
    Mux(a[15], b[15], sel),
  ];
};

export default Mux16;
