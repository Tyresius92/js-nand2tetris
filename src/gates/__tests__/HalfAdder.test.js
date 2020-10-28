import { Bit } from '../types';
import HalfAdder from '../HalfAdder';

const { ON, OFF } = Bit;

describe('HalfAdder', () => {
  it('takes in two bits and returns a sum and a carry', () => {
    expect(HalfAdder(OFF, OFF)).toEqual({ sum: OFF, carry: OFF });
  });

  it('returns the correct value if one of the bits is on', () => {
    expect(HalfAdder(ON, OFF)).toEqual({ sum: ON, carry: OFF });
    expect(HalfAdder(OFF, ON)).toEqual({ sum: ON, carry: OFF });
  });

  it('returns the correct value if both bits are on', () => {
    expect(HalfAdder(ON, ON)).toEqual({ sum: OFF, carry: ON });
  });
});
