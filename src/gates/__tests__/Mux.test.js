import Bit from '../Bit';
import Mux from '../Mux';

const { OFF, ON } = Bit;

describe('Mux', () => {
  it.each`
    a      | b      | sel    | result
    ${OFF} | ${OFF} | ${OFF} | ${OFF}
    ${OFF} | ${ON}  | ${OFF} | ${OFF}
    ${ON}  | ${OFF} | ${OFF} | ${ON}
    ${ON}  | ${ON}  | ${OFF} | ${ON}
    ${OFF} | ${OFF} | ${ON}  | ${OFF}
    ${OFF} | ${ON}  | ${ON}  | ${ON}
    ${ON}  | ${OFF} | ${ON}  | ${OFF}
    ${ON}  | ${ON}  | ${ON}  | ${ON}
  `('returns $result for a: $a; b: $b', ({ a, b, sel, result }) => {
    expect(Mux(a, b, sel)).toBe(result);
  });
});
