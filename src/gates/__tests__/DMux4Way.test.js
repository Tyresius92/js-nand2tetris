import { Bit } from '../types';
import DMux4Way from '../DMux4Way';

const { OFF, ON } = Bit;

describe('DMux4Way', () => {
  it.each`
    input  | sel           | result
    ${OFF} | ${[OFF, OFF]} | ${[OFF, OFF, OFF, OFF]}
    ${OFF} | ${[OFF, ON]}  | ${[OFF, OFF, OFF, OFF]}
    ${OFF} | ${[ON, OFF]}  | ${[OFF, OFF, OFF, OFF]}
    ${OFF} | ${[ON, ON]}   | ${[OFF, OFF, OFF, OFF]}
    ${ON}  | ${[OFF, OFF]} | ${[ON, OFF, OFF, OFF]}
    ${ON}  | ${[OFF, ON]}  | ${[OFF, ON, OFF, OFF]}
    ${ON}  | ${[ON, OFF]}  | ${[OFF, OFF, ON, OFF]}
    ${ON}  | ${[ON, ON]}   | ${[OFF, OFF, OFF, ON]}
  `(
    'returns $result for input: $input; sel: $sel',
    ({ input, sel, result }) => {
      expect(DMux4Way(input, sel)).toEqual(result);
    }
  );
});
