import Bit from '../Bit';
import Nand from '../Nand';

const { OFF, ON } = Bit;

describe('Nand', () => {
  it.each`
    a      | b      | result
    ${OFF} | ${OFF} | ${ON}
    ${OFF} | ${ON}  | ${ON}
    ${ON}  | ${OFF} | ${ON}
    ${ON}  | ${ON}  | ${OFF}
  `('returns $result for a: $a; b: $b', ({ a, b, result }) => {
    expect(Nand(a, b)).toBe(result);
  });
});
