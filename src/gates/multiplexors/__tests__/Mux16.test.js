import { Bit } from '../../types';
import Mux16 from '../Mux16';

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

describe('Mux16', () => {
  it.each`
    a                        | b                        | sel    | result
    ${ALL_OFF}               | ${ALL_OFF}               | ${OFF} | ${ALL_OFF}
    ${ALL_OFF}               | ${ALL_ON}                | ${OFF} | ${ALL_OFF}
    ${ALL_ON}                | ${ALL_OFF}               | ${OFF} | ${ALL_ON}
    ${ALL_ON}                | ${ALL_ON}                | ${OFF} | ${ALL_ON}
    ${ALTERNATING_OFF_START} | ${ALTERNATING_OFF_START} | ${OFF} | ${ALTERNATING_OFF_START}
    ${ALTERNATING_OFF_START} | ${ALTERNATING_ON_START}  | ${OFF} | ${ALTERNATING_OFF_START}
    ${ALTERNATING_ON_START}  | ${ALTERNATING_OFF_START} | ${OFF} | ${ALTERNATING_ON_START}
    ${ALTERNATING_ON_START}  | ${ALTERNATING_ON_START}  | ${OFF} | ${ALTERNATING_ON_START}
    ${ALL_ON}                | ${ALTERNATING_ON_START}  | ${OFF} | ${ALL_ON}
    ${ALL_OFF}               | ${ALTERNATING_ON_START}  | ${OFF} | ${ALL_OFF}
    ${ALL_OFF}               | ${ALL_OFF}               | ${ON}  | ${ALL_OFF}
    ${ALL_OFF}               | ${ALL_ON}                | ${ON}  | ${ALL_ON}
    ${ALL_ON}                | ${ALL_OFF}               | ${ON}  | ${ALL_OFF}
    ${ALL_ON}                | ${ALL_ON}                | ${ON}  | ${ALL_ON}
    ${ALTERNATING_OFF_START} | ${ALTERNATING_OFF_START} | ${ON}  | ${ALTERNATING_OFF_START}
    ${ALTERNATING_OFF_START} | ${ALTERNATING_ON_START}  | ${ON}  | ${ALTERNATING_ON_START}
    ${ALTERNATING_ON_START}  | ${ALTERNATING_OFF_START} | ${ON}  | ${ALTERNATING_OFF_START}
    ${ALTERNATING_ON_START}  | ${ALTERNATING_ON_START}  | ${ON}  | ${ALTERNATING_ON_START}
    ${ALL_ON}                | ${ALTERNATING_ON_START}  | ${ON}  | ${ALTERNATING_ON_START}
    ${ALL_OFF}               | ${ALTERNATING_ON_START}  | ${ON}  | ${ALTERNATING_ON_START}
  `('returns $result for a: $a; b: $b; sel: $sel', ({ a, b, sel, result }) => {
    expect(Mux16(a, b, sel)).toEqual(result);
  });
});
