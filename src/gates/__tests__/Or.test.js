import { Bit } from '../types';
import Or from '../Or';

const { OFF, ON } = Bit;

describe('Or', () => {
  it.each`
    a      | b      | result
    ${OFF} | ${OFF} | ${OFF}
    ${OFF} | ${ON}  | ${ON}
    ${ON}  | ${OFF} | ${ON}
    ${ON}  | ${ON}  | ${ON}
  `('returns $result for a: $a; b: $b', ({ a, b, result }) => {
    expect(Or(a, b)).toBe(result);
  });
});
