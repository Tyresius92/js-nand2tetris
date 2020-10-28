import { Bit } from '../types';
import DMux from '../DMux';

const { OFF, ON } = Bit;

describe('DMux', () => {
  it.each`
    input  | sel    | result
    ${OFF} | ${OFF} | ${[OFF, OFF]}
    ${ON}  | ${OFF} | ${[ON, OFF]}
    ${OFF} | ${ON}  | ${[OFF, OFF]}
    ${ON}  | ${ON}  | ${[OFF, ON]}
  `(
    'returns $result for input: $input; sel: $$sel',
    ({ input, sel, result }) => {
      expect(DMux(input, sel)).toEqual(result);
    }
  );
});
