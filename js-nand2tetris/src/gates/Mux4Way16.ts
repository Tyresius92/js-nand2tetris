import Bit from './Bit';
import Mux from './Mux';

const Mux4Way16 = (
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
  c: [
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
  d: [
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
  sel: [Bit, Bit]
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
    // choose between a/b or c/d group
    Mux(
      // choose between a/b
      Mux(a[0], b[0], sel[1]),
      // choose between c/d
      Mux(c[0], d[0], sel[1]),
      // in the hardware, this is sel[1], since they are labeled right to left
      sel[0]
    ),
    // choose between a/b or c/d group
    Mux(
      // choose between a/b
      Mux(a[1], b[1], sel[1]),
      // choose between c/d
      Mux(c[1], d[1], sel[1]),
      sel[0]
    ),
    // choose between a/b or c/d group
    Mux(
      // choose between a/b
      Mux(a[2], b[2], sel[1]),
      // choose between c/d
      Mux(c[2], d[2], sel[1]),
      sel[0]
    ),
    // choose between a/b or c/d group
    Mux(
      // choose between a/b
      Mux(a[3], b[3], sel[1]),
      // choose between c/d
      Mux(c[3], d[3], sel[1]),
      sel[0]
    ),
    // choose between a/b or c/d group
    Mux(
      // choose between a/b
      Mux(a[4], b[4], sel[1]),
      // choose between c/d
      Mux(c[4], d[4], sel[1]),
      sel[0]
    ),
    // choose between a/b or c/d group
    Mux(
      // choose between a/b
      Mux(a[5], b[5], sel[1]),
      // choose between c/d
      Mux(c[5], d[5], sel[1]),
      sel[0]
    ),
    // choose between a/b or c/d group
    Mux(
      // choose between a/b
      Mux(a[6], b[6], sel[1]),
      // choose between c/d
      Mux(c[6], d[6], sel[1]),
      sel[0]
    ),
    // choose between a/b or c/d group
    Mux(
      // choose between a/b
      Mux(a[7], b[7], sel[1]),
      // choose between c/d
      Mux(c[7], d[7], sel[1]),
      sel[0]
    ),
    // choose between a/b or c/d group
    Mux(
      // choose between a/b
      Mux(a[8], b[8], sel[1]),
      // choose between c/d
      Mux(c[8], d[8], sel[1]),
      sel[0]
    ),
    // choose between a/b or c/d group
    Mux(
      // choose between a/b
      Mux(a[9], b[9], sel[1]),
      // choose between c/d
      Mux(c[9], d[9], sel[1]),
      sel[0]
    ),
    // choose between a/b or c/d group
    Mux(
      // choose between a/b
      Mux(a[10], b[10], sel[1]),
      // choose between c/d
      Mux(c[10], d[10], sel[1]),
      sel[0]
    ),
    // choose between a/b or c/d group
    Mux(
      // choose between a/b
      Mux(a[11], b[11], sel[1]),
      // choose between c/d
      Mux(c[11], d[11], sel[1]),
      sel[0]
    ),
    // choose between a/b or c/d group
    Mux(
      // choose between a/b
      Mux(a[12], b[12], sel[1]),
      // choose between c/d
      Mux(c[12], d[12], sel[1]),
      sel[0]
    ),
    // choose between a/b or c/d group
    Mux(
      // choose between a/b
      Mux(a[13], b[13], sel[1]),
      // choose between c/d
      Mux(c[13], d[13], sel[1]),
      sel[0]
    ),
    // choose between a/b or c/d group
    Mux(
      // choose between a/b
      Mux(a[14], b[14], sel[1]),
      // choose between c/d
      Mux(c[14], d[14], sel[1]),
      sel[0]
    ),
    // choose between a/b or c/d group
    Mux(
      // choose between a/b
      Mux(a[15], b[15], sel[1]),
      // choose between c/d
      Mux(c[15], d[15], sel[1]),
      sel[0]
    ),
  ];
};

export default Mux4Way16;
