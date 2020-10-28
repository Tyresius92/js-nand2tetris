import Bit from '../Bit';
import Not16 from '../Not16';

const { OFF, ON } = Bit;

const ALL_OFF = [
  OFF,
  OFF,
  OFF,
  OFF,
  OFF,
  OFF,
  OFF,
  OFF,
  OFF,
  OFF,
  OFF,
  OFF,
  OFF,
  OFF,
  OFF,
  OFF,
];

const ALL_ON = [ON, ON, ON, ON, ON, ON, ON, ON, ON, ON, ON, ON, ON, ON, ON, ON];

const ALTERNATING_ON_START = [
  ON,
  OFF,
  ON,
  OFF,
  ON,
  OFF,
  ON,
  OFF,
  ON,
  OFF,
  ON,
  OFF,
  ON,
  OFF,
  ON,
  OFF,
];

const ALTERNATING_OFF_START = [
  OFF,
  ON,
  OFF,
  ON,
  OFF,
  ON,
  OFF,
  ON,
  OFF,
  ON,
  OFF,
  ON,
  OFF,
  ON,
  OFF,
  ON,
];

const PSEUDO_RANDOM = [
  OFF,
  ON,
  ON,
  ON,
  OFF,
  OFF,
  ON,
  ON,
  ON,
  ON,
  OFF,
  OFF,
  OFF,
  OFF,
  ON,
  OFF,
];

const PSEUDO_RANDOM_REVERSED = [
  ON,
  OFF,
  OFF,
  OFF,
  ON,
  ON,
  OFF,
  OFF,
  OFF,
  OFF,
  ON,
  ON,
  ON,
  ON,
  OFF,
  ON,
];

describe('Not16', () => {
  it.each`
    input                     | result
    ${ALL_OFF}                | ${ALL_ON}
    ${ALL_ON}                 | ${ALL_OFF}
    ${ALTERNATING_ON_START}   | ${ALTERNATING_OFF_START}
    ${ALTERNATING_OFF_START}  | ${ALTERNATING_ON_START}
    ${PSEUDO_RANDOM}          | ${PSEUDO_RANDOM_REVERSED}
    ${PSEUDO_RANDOM_REVERSED} | ${PSEUDO_RANDOM}
  `('returns $result for input: $input', ({ input, result }) => {
    expect(Not16(input)).toEqual(result);
  });
});
