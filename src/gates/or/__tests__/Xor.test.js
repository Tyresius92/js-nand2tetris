import { Bit } from '../../types';
import Xor from '../Xor';

const { OFF, ON } = Bit;

describe('Xor', () => {
  it.each`
    a      | b      | result
    ${OFF} | ${OFF} | ${OFF}
    ${OFF} | ${ON}  | ${ON}
    ${ON}  | ${OFF} | ${ON}
    ${ON}  | ${ON}  | ${OFF}
  `('returns $result for a: $a; b: $b', ({ a, b, result }) => {
    expect(Xor(a, b)).toBe(result);
  });
});
