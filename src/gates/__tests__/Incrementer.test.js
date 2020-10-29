import { Bit } from '../types';
import Incrementer from '../Incrementer';

const { OFF, ON } = Bit;

describe('Incrementer', () => {
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

  it('increments ZERO to one', () => {
    expect(Incrementer(ZERO)).toEqual(ONE);
  });

  it('increments ONE to TWO', () => {
    expect(Incrementer(ONE)).toEqual(TWO);
  });

  it('increments NEGATIVE_ONE to ZERO (discarding most significant carry bit)', () => {
    expect(Incrementer(NEGATIVE_ONE)).toEqual(ZERO);
  });
});
