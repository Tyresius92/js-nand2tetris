import { Bit } from '../../types';
import FullAdder from '../FullAdder';

const { ON, OFF } = Bit;

describe('FullAdder', () => {
  it('returns the {sum: OFF, carry: OFF} if all bits are off', () => {
    expect(FullAdder(OFF, OFF, OFF)).toEqual({ sum: OFF, carry: OFF });
  });

  it('returns {sum: ON, carry: OFF} for a single bit on', () => {
    expect(FullAdder(OFF, OFF, ON)).toEqual({ sum: ON, carry: OFF });
    expect(FullAdder(OFF, ON, OFF)).toEqual({ sum: ON, carry: OFF });
    expect(FullAdder(ON, OFF, OFF)).toEqual({ sum: ON, carry: OFF });
  });

  it('returns {sum: OFF, carry: ON} if exactly two bits are on', () => {
    expect(FullAdder(OFF, ON, ON)).toEqual({ sum: OFF, carry: ON });
    expect(FullAdder(ON, OFF, ON)).toEqual({ sum: OFF, carry: ON });
    expect(FullAdder(ON, ON, OFF)).toEqual({ sum: OFF, carry: ON });
  });

  it('returns {sum: ON, carry: ON} if all three bits are on', () => {
    expect(FullAdder(ON, ON, ON)).toEqual({ sum: ON, carry: ON });
  });
});
