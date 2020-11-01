import { Bit } from '../../types';
import Add16 from '../Add16';

const { ON, OFF } = Bit;

describe('Add16', () => {
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

  const TWO = [
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
    OFF,
  ];

  it('returns all off if both inputs are all off', () => {
    expect(Add16(ZERO, ZERO)).toEqual(ZERO);
  });

  it('returns ONE if one input is ONE', () => {
    expect(Add16(ZERO, ONE)).toEqual(ONE);
    expect(Add16(ONE, ZERO)).toEqual(ONE);
  });

  it('returns TWO if input is two ONEs or a ZERO and a TWO', () => {
    expect(Add16(ONE, ONE)).toEqual(TWO);
    expect(Add16(TWO, ZERO)).toEqual(TWO);
    expect(Add16(ZERO, TWO)).toEqual(TWO);
  });

  it('adds two arbitrary numbers', () => {
    const SEVEN_THOUSAND = [
      OFF,
      OFF,
      OFF,
      ON,
      ON,
      OFF,
      ON,
      ON,
      OFF,
      ON,
      OFF,
      ON,
      ON,
      OFF,
      OFF,
      OFF,
    ];

    const THREE_THOUSAND_ONE = [
      OFF,
      OFF,
      OFF,
      OFF,
      ON,
      OFF,
      ON,
      ON,
      ON,
      OFF,
      ON,
      ON,
      ON,
      OFF,
      OFF,
      ON,
    ];

    const TEN_THOUSAND_ONE = [
      OFF,
      OFF,
      ON,
      OFF,
      OFF,
      ON,
      ON,
      ON,
      OFF,
      OFF,
      OFF,
      ON,
      OFF,
      OFF,
      OFF,
      ON,
    ];

    expect(Add16(SEVEN_THOUSAND, THREE_THOUSAND_ONE)).toEqual(TEN_THOUSAND_ONE);
  });

  it('discards the top bit if there is a carry over', () => {
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

    const NEGATIVE_TWO = [
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
      OFF,
    ];

    expect(Add16(NEGATIVE_ONE, ONE)).toEqual(ZERO);
    expect(Add16(NEGATIVE_ONE, NEGATIVE_ONE)).toEqual(NEGATIVE_TWO);
  });
});
