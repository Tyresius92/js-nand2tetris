import Bit from '../Bit';
import Not from '../Not';

const { OFF, ON } = Bit;

describe('Not', () => {
  it.each`
    a      | result
    ${OFF} | ${ON}
    ${ON}  | ${OFF}
  `('returns $result for a: $a; b: $b', ({ a, b, result }) => {
    expect(Not(a, b)).toBe(result);
  });
});
