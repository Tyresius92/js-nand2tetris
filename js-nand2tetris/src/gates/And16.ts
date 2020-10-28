import Bit from './Bit';
import And from './And';

const And16 = (
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
  return [
    And(a[0], b[0]),
    And(a[1], b[1]),
    And(a[2], b[2]),
    And(a[3], b[3]),
    And(a[4], b[4]),
    And(a[5], b[5]),
    And(a[6], b[6]),
    And(a[7], b[7]),
    And(a[8], b[8]),
    And(a[9], b[9]),
    And(a[10], b[10]),
    And(a[11], b[11]),
    And(a[12], b[12]),
    And(a[13], b[13]),
    And(a[14], b[14]),
    And(a[15], b[15]),
  ];
};

export default And16;
