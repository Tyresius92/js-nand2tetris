import Bit from '../Bit';
import And from '../And';

const { OFF, ON } = Bit;

describe('And', () => {
  it.each`
    a      | b      | result
    ${OFF} | ${OFF} | ${OFF}
    ${OFF} | ${ON}  | ${OFF}
    ${ON}  | ${OFF} | ${OFF}
    ${ON}  | ${ON}  | ${ON}
  `('returns $result for a: $a; b: $b', ({ a, b, result }) => {
    expect(And(a, b)).toBe(result);
  });
});
