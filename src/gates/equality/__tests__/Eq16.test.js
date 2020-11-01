import { Bit } from '../../types';
import Eq16 from '../Eq16';
import { ALL_ON, ALL_OFF, ONE } from '../../constants';

const { ON, OFF } = Bit;

describe('Eq16', () => {
  it.each`
    a          | b
    ${ALL_ON}  | ${ALL_ON}
    ${ALL_OFF} | ${ALL_OFF}
    ${ONE}     | ${ONE}
  `('returns ON only if all 16 bits are the same', ({ a, b }) => {
    expect(Eq16(a, b)).toEqual(ON);
  });

  it.each`
    a          | b
    ${ALL_ON}  | ${ALL_OFF}
    ${ALL_ON}  | ${ONE}
    ${ALL_OFF} | ${ALL_ON}
    ${ALL_OFF} | ${ONE}
    ${ONE}     | ${ALL_ON}
    ${ONE}     | ${ALL_OFF}
  `('returns OFF only if all 16 bits are the same', ({ a, b }) => {
    expect(Eq16(a, b)).toEqual(OFF);
  });
});
