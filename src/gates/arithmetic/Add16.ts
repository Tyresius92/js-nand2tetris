import { Bus16 } from '../types';
import HalfAdder from './HalfAdder';
import FullAdder from './FullAdder';

const Add16 = (a: Bus16, b: Bus16): Bus16 => {
  // TODO: Measure the performance of this guy,
  // and implement it better if performance sucks
  // Since we're using local vars, I _think_ we'll be okay?

  // Remember that the highest index is the rightmost in the register, and so
  // is the least significant bit => 0001 is just one,
  // but the 1 is stored at `bus[3]`
  const { sum: zeroS, carry: zeroC } = HalfAdder(a[15], b[15]);
  const { sum: oneS, carry: oneC } = FullAdder(a[14], b[14], zeroC);
  const { sum: twoS, carry: twoC } = FullAdder(a[13], b[13], oneC);
  const { sum: threeS, carry: threeC } = FullAdder(a[12], b[12], twoC);
  const { sum: fourS, carry: fourC } = FullAdder(a[11], b[11], threeC);
  const { sum: fiveS, carry: fiveC } = FullAdder(a[10], b[10], fourC);
  const { sum: sixS, carry: sixC } = FullAdder(a[9], b[9], fiveC);
  const { sum: sevenS, carry: sevenC } = FullAdder(a[8], b[8], sixC);
  const { sum: eightS, carry: eightC } = FullAdder(a[7], b[7], sevenC);
  const { sum: nineS, carry: nineC } = FullAdder(a[6], b[6], eightC);
  const { sum: tenS, carry: tenC } = FullAdder(a[5], b[5], nineC);
  const { sum: elevenS, carry: elevenC } = FullAdder(a[4], b[4], tenC);
  const { sum: twelveS, carry: twelveC } = FullAdder(a[3], b[3], elevenC);
  const { sum: thirteenS, carry: thirteenC } = FullAdder(a[2], b[2], twelveC);
  const { sum: fourteenS, carry: fourteenC } = FullAdder(a[1], b[1], thirteenC);
  const { sum: fifteenS } = FullAdder(a[0], b[0], fourteenC);

  return [
    fifteenS,
    fourteenS,
    thirteenS,
    twelveS,
    elevenS,
    tenS,
    nineS,
    eightS,
    sevenS,
    sixS,
    fiveS,
    fourS,
    threeS,
    twoS,
    oneS,
    zeroS,
  ];
};

export default Add16;
