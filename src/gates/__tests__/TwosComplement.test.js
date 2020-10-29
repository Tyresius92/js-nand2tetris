import { Bit } from '../types';
import TwosComplement from '../TwosComplement';

const { ON, OFF } = Bit;

describe('TwosComplement', () => {
  it('returns zero for zero', () => {
    const ZERO = [
      OFF,
      OFF,
      OFF,
      OFF,
      OFF,
      OFF,
      OFF,
      OFF,
      OFF,
      OFF,
      OFF,
      OFF,
      OFF,
      OFF,
      OFF,
      OFF,
    ];

    expect(TwosComplement(ZERO)).toEqual(ZERO);
  });

  it('returns NEGATIVE_ONE for ONE and vice versa', () => {
    const ONE = [
      OFF,
      OFF,
      OFF,
      OFF,
      OFF,
      OFF,
      OFF,
      OFF,
      OFF,
      OFF,
      OFF,
      OFF,
      OFF,
      OFF,
      OFF,
      ON,
    ];

    const NEGATIVE_ONE = [
      ON,
      ON,
      ON,
      ON,
      ON,
      ON,
      ON,
      ON,
      ON,
      ON,
      ON,
      ON,
      ON,
      ON,
      ON,
      ON,
    ];

    expect(TwosComplement(ONE)).toEqual(NEGATIVE_ONE);
    expect(TwosComplement(NEGATIVE_ONE)).toEqual(ONE);
  });

  it('works for numbers besides zero and one', () => {
    const FOUR = [
      OFF,
      OFF,
      OFF,
      OFF,
      OFF,
      OFF,
      OFF,
      OFF,
      OFF,
      OFF,
      OFF,
      OFF,
      OFF,
      ON,
      OFF,
      OFF,
    ];

    const NEGATIVE_FOUR = [
      ON,
      ON,
      ON,
      ON,
      ON,
      ON,
      ON,
      ON,
      ON,
      ON,
      ON,
      ON,
      ON,
      ON,
      OFF,
      OFF,
    ];

    expect(TwosComplement(FOUR)).toEqual(NEGATIVE_FOUR);
    expect(TwosComplement(NEGATIVE_FOUR)).toEqual(FOUR);
  });
});
