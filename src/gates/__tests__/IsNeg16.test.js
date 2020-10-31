import { Bit } from '../types';
import IsNeg16 from '../IsNeg16';
import { ZERO, ONE, NEGATIVE_ONE } from '../constants';

const { ON, OFF } = Bit;

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

const NEGATIVE_TEN_THOUSAND_ONE = [
  ON,
  ON,
  OFF,
  ON,
  ON,
  OFF,
  OFF,
  OFF,
  ON,
  ON,
  ON,
  OFF,
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

describe('IsNeg16', () => {
  it('returns OFF if input is ZERO', () => {
    expect(IsNeg16(ZERO)).toEqual(OFF);
  });

  it('returns OFF if input is a positive number', () => {
    expect(IsNeg16(ONE)).toEqual(OFF);
    expect(IsNeg16(THREE_THOUSAND_ONE)).toEqual(OFF);
    expect(IsNeg16(SEVEN_THOUSAND)).toEqual(OFF);
    expect(IsNeg16(TEN_THOUSAND_ONE)).toEqual(OFF);
  });

  it('returns ON if input is a negative number', () => {
    expect(IsNeg16(NEGATIVE_ONE)).toEqual(ON);
    expect(IsNeg16(NEGATIVE_TWO)).toEqual(ON);
    expect(IsNeg16(NEGATIVE_TEN_THOUSAND_ONE)).toEqual(ON);
  });
});
