import Bit from '../Bit';
import And16 from '../And16';

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

describe('And16', () => {
  it.each`
    a                        | b                        | result
    ${ALL_OFF}               | ${ALL_OFF}               | ${ALL_OFF}
    ${ALL_OFF}               | ${ALL_ON}                | ${ALL_OFF}
    ${ALL_ON}                | ${ALL_OFF}               | ${ALL_OFF}
    ${ALL_ON}                | ${ALL_ON}                | ${ALL_ON}
    ${ALTERNATING_OFF_START} | ${ALTERNATING_OFF_START} | ${ALTERNATING_OFF_START}
    ${ALTERNATING_OFF_START} | ${ALTERNATING_ON_START}  | ${ALL_OFF}
    ${ALTERNATING_ON_START}  | ${ALTERNATING_OFF_START} | ${ALL_OFF}
    ${ALTERNATING_ON_START}  | ${ALTERNATING_ON_START}  | ${ALTERNATING_ON_START}
    ${ALL_ON}                | ${ALTERNATING_ON_START}  | ${ALTERNATING_ON_START}
    ${ALL_OFF}               | ${ALTERNATING_ON_START}  | ${ALL_OFF}
  `('returns $result for a: $a; b: $b', ({ a, b, result }) => {
    expect(And16(a, b)).toEqual(result);
  });
});
