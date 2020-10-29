import { Bit } from './types';
import HalfAdder from './HalfAdder';
import FullAdder from './FullAdder';

const Add16 = (
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
  ]
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
  // TODO: Measure the performance of this guy,
  // and implement it better if performance sucks
  // Since we're using local vars, I _think_ we'll be okay?
  // C would totally compile this junk right out of there.

  const { sum: zeroSum, carry: zeroCarry } = HalfAdder(a[15], b[15]);
  const { sum: oneSum, carry: oneCarry } = FullAdder(a[14], b[14], zeroCarry);
  const { sum: twoSum, carry: twoCarry } = FullAdder(a[13], b[13], oneCarry);
  const { sum: threeSum, carry: threeCarry } = FullAdder(
    a[12],
    b[12],
    twoCarry
  );
  const { sum: fourSum, carry: fourCarry } = FullAdder(
    a[11],
    b[11],
    threeCarry
  );
  const { sum: fiveSum, carry: fiveCarry } = FullAdder(a[10], b[10], fourCarry);
  const { sum: sixSum, carry: sixCarry } = FullAdder(a[9], b[9], fiveCarry);
  const { sum: sevenSum, carry: sevenCarry } = FullAdder(a[8], b[8], sixCarry);
  const { sum: eightSum, carry: eightCarry } = FullAdder(
    a[7],
    b[7],
    sevenCarry
  );
  const { sum: nineSum, carry: nineCarry } = FullAdder(a[6], b[6], eightCarry);
  const { sum: tenSum, carry: tenCarry } = FullAdder(a[5], b[5], nineCarry);
  const { sum: elevenSum, carry: elevenCarry } = FullAdder(
    a[4],
    b[4],
    tenCarry
  );
  const { sum: twelveSum, carry: twelveCarry } = FullAdder(
    a[3],
    b[3],
    elevenCarry
  );
  const { sum: thirteenSum, carry: thirteenCarry } = FullAdder(
    a[2],
    b[2],
    twelveCarry
  );
  const { sum: fourteenSum, carry: fourteenCarry } = FullAdder(
    a[1],
    b[1],
    thirteenCarry
  );
  const { sum: fifteenSum } = FullAdder(a[0], b[0], fourteenCarry);

  return [
    fifteenSum,
    fourteenSum,
    thirteenSum,
    twelveSum,
    elevenSum,
    tenSum,
    nineSum,
    eightSum,
    sevenSum,
    sixSum,
    fiveSum,
    fourSum,
    threeSum,
    twoSum,
    oneSum,
    zeroSum,
  ];
};

export default Add16;
