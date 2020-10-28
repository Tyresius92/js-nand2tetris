import Bit from './Bit';
import Mux from './Mux';

const Mux8Way16 = (
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
  e: [
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
  f: [
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
  g: [
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
  h: [
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
  sel: [Bit, Bit, Bit]
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
    Mux(
      Mux(Mux(a[0], b[0], sel[2]), Mux(c[0], d[0], sel[2]), sel[1]),
      Mux(Mux(e[0], f[0], sel[2]), Mux(g[0], h[0], sel[2]), sel[1]),
      sel[0]
    ),
    Mux(
      Mux(Mux(a[1], b[1], sel[2]), Mux(c[1], d[1], sel[2]), sel[1]),
      Mux(Mux(e[1], f[1], sel[2]), Mux(g[1], h[1], sel[2]), sel[1]),
      sel[0]
    ),
    Mux(
      Mux(Mux(a[2], b[2], sel[2]), Mux(c[2], d[2], sel[2]), sel[1]),
      Mux(Mux(e[2], f[2], sel[2]), Mux(g[2], h[2], sel[2]), sel[1]),
      sel[0]
    ),
    Mux(
      Mux(Mux(a[3], b[3], sel[2]), Mux(c[3], d[3], sel[2]), sel[1]),
      Mux(Mux(e[3], f[3], sel[2]), Mux(g[3], h[3], sel[2]), sel[1]),
      sel[0]
    ),
    Mux(
      Mux(Mux(a[4], b[4], sel[2]), Mux(c[4], d[4], sel[2]), sel[1]),
      Mux(Mux(e[4], f[4], sel[2]), Mux(g[4], h[4], sel[2]), sel[1]),
      sel[0]
    ),
    Mux(
      Mux(Mux(a[5], b[5], sel[2]), Mux(c[5], d[5], sel[2]), sel[1]),
      Mux(Mux(e[5], f[5], sel[2]), Mux(g[5], h[5], sel[2]), sel[1]),
      sel[0]
    ),
    Mux(
      Mux(Mux(a[6], b[6], sel[2]), Mux(c[6], d[6], sel[2]), sel[1]),
      Mux(Mux(e[6], f[6], sel[2]), Mux(g[6], h[6], sel[2]), sel[1]),
      sel[0]
    ),
    Mux(
      Mux(Mux(a[7], b[7], sel[2]), Mux(c[7], d[7], sel[2]), sel[1]),
      Mux(Mux(e[7], f[7], sel[2]), Mux(g[7], h[7], sel[2]), sel[1]),
      sel[0]
    ),
    Mux(
      Mux(Mux(a[8], b[8], sel[2]), Mux(c[8], d[8], sel[2]), sel[1]),
      Mux(Mux(e[8], f[8], sel[2]), Mux(g[8], h[8], sel[2]), sel[1]),
      sel[0]
    ),
    Mux(
      Mux(Mux(a[9], b[9], sel[2]), Mux(c[9], d[9], sel[2]), sel[1]),
      Mux(Mux(e[9], f[9], sel[2]), Mux(g[9], h[9], sel[2]), sel[1]),
      sel[0]
    ),
    Mux(
      Mux(Mux(a[10], b[10], sel[2]), Mux(c[10], d[10], sel[2]), sel[1]),
      Mux(Mux(e[10], f[10], sel[2]), Mux(g[10], h[10], sel[2]), sel[1]),
      sel[0]
    ),
    Mux(
      Mux(Mux(a[11], b[11], sel[2]), Mux(c[11], d[11], sel[2]), sel[1]),
      Mux(Mux(e[11], f[11], sel[2]), Mux(g[11], h[11], sel[2]), sel[1]),
      sel[0]
    ),
    Mux(
      Mux(Mux(a[12], b[12], sel[2]), Mux(c[12], d[12], sel[2]), sel[1]),
      Mux(Mux(e[12], f[12], sel[2]), Mux(g[12], h[12], sel[2]), sel[1]),
      sel[0]
    ),
    Mux(
      Mux(Mux(a[13], b[13], sel[2]), Mux(c[13], d[13], sel[2]), sel[1]),
      Mux(Mux(e[13], f[13], sel[2]), Mux(g[13], h[13], sel[2]), sel[1]),
      sel[0]
    ),
    Mux(
      Mux(Mux(a[14], b[14], sel[2]), Mux(c[14], d[14], sel[2]), sel[1]),
      Mux(Mux(e[14], f[14], sel[2]), Mux(g[14], h[14], sel[2]), sel[1]),
      sel[0]
    ),
    Mux(
      Mux(Mux(a[15], b[15], sel[2]), Mux(c[15], d[15], sel[2]), sel[1]),
      Mux(Mux(e[15], f[15], sel[2]), Mux(g[15], h[15], sel[2]), sel[1]),
      sel[0]
    ),
  ];
};

export default Mux8Way16;
