import { Bit } from '../types';
import Eq from '../Eq';

const { ON, OFF } = Bit;

describe('Eq', () => {
  it.each`
    a      | b
    ${ON}  | ${ON}
    ${OFF} | ${OFF}
  `('gives back ON when the inputs are the same', ({ a, b }) => {
    expect(Eq(a, b)).toEqual(ON);
  });

  it.each`
    a      | b
    ${OFF} | ${ON}
    ${ON}  | ${OFF}
  `('gives back OFF when the inputs are the same', ({ a, b }) => {
    expect(Eq(a, b)).toEqual(OFF);
  });
});
