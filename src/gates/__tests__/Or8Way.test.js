import Bit from '../Bit';
import Or8Way from '../Or8Way';

const { OFF, ON } = Bit;

describe('Or8Way', () => {
  it.each`
    input                                       | result
    ${[OFF, OFF, OFF, OFF, OFF, OFF, OFF, OFF]} | ${OFF}
    ${[ON, OFF, OFF, OFF, OFF, OFF, OFF, OFF]}  | ${ON}
    ${[OFF, ON, OFF, OFF, OFF, OFF, OFF, OFF]}  | ${ON}
    ${[OFF, OFF, ON, OFF, OFF, OFF, OFF, OFF]}  | ${ON}
    ${[OFF, OFF, OFF, ON, OFF, OFF, OFF, OFF]}  | ${ON}
    ${[OFF, OFF, OFF, OFF, ON, OFF, OFF, OFF]}  | ${ON}
    ${[OFF, OFF, OFF, OFF, OFF, ON, OFF, OFF]}  | ${ON}
    ${[OFF, OFF, OFF, OFF, OFF, OFF, ON, OFF]}  | ${ON}
    ${[OFF, OFF, OFF, OFF, OFF, OFF, OFF, ON]}  | ${ON}
    ${[OFF, OFF, OFF, ON, OFF, OFF, OFF, ON]}   | ${ON}
    ${[OFF, ON, OFF, OFF, ON, OFF, ON, ON]}     | ${ON}
    ${[ON, ON, OFF, ON, OFF, OFF, OFF, ON]}     | ${ON}
    ${[ON, ON, ON, ON, ON, ON, ON, ON]}         | ${ON}
  `('returns $result for input: $input', ({ input, result }) => {
    expect(Or8Way(input)).toEqual(result);
  });
});
