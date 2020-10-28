import Bit from '../Bit';
import DMux8Way from '../DMux8Way';

const { OFF, ON } = Bit;

describe('DMux8Way', () => {
  const ALL_OFF = [OFF, OFF, OFF, OFF, OFF, OFF, OFF, OFF];

  it('is all off regardless of sel value if in bit is OFF', () => {
    expect(DMux8Way(OFF, [OFF, OFF, OFF])).toEqual(ALL_OFF);
    expect(DMux8Way(OFF, [OFF, OFF, ON])).toEqual(ALL_OFF);
    expect(DMux8Way(OFF, [OFF, ON, OFF])).toEqual(ALL_OFF);
    expect(DMux8Way(OFF, [OFF, ON, ON])).toEqual(ALL_OFF);
    expect(DMux8Way(OFF, [ON, OFF, OFF])).toEqual(ALL_OFF);
    expect(DMux8Way(OFF, [ON, OFF, ON])).toEqual(ALL_OFF);
    expect(DMux8Way(OFF, [ON, ON, OFF])).toEqual(ALL_OFF);
    expect(DMux8Way(OFF, [ON, ON, ON])).toEqual(ALL_OFF);
  });

  it('returns the correct array for 000', () => {
    expect(DMux8Way(ON, [OFF, OFF, OFF])).toEqual([
      ON,
      OFF,
      OFF,
      OFF,
      OFF,
      OFF,
      OFF,
      OFF,
    ]);
  });

  it('returns the correct array for 001', () => {
    expect(DMux8Way(ON, [OFF, OFF, ON])).toEqual([
      OFF,
      ON,
      OFF,
      OFF,
      OFF,
      OFF,
      OFF,
      OFF,
    ]);
  });

  it('returns the correct array for 010', () => {
    expect(DMux8Way(ON, [OFF, ON, OFF])).toEqual([
      OFF,
      OFF,
      ON,
      OFF,
      OFF,
      OFF,
      OFF,
      OFF,
    ]);
  });

  it('returns the correct array for 011', () => {
    expect(DMux8Way(ON, [OFF, ON, ON])).toEqual([
      OFF,
      OFF,
      OFF,
      ON,
      OFF,
      OFF,
      OFF,
      OFF,
    ]);
  });

  it('returns the correct array for 100', () => {
    expect(DMux8Way(ON, [ON, OFF, OFF])).toEqual([
      OFF,
      OFF,
      OFF,
      OFF,
      ON,
      OFF,
      OFF,
      OFF,
    ]);
  });

  it('returns the correct array for 101', () => {
    expect(DMux8Way(ON, [ON, OFF, ON])).toEqual([
      OFF,
      OFF,
      OFF,
      OFF,
      OFF,
      ON,
      OFF,
      OFF,
    ]);
  });

  it('returns the correct array for 110', () => {
    expect(DMux8Way(ON, [ON, ON, OFF])).toEqual([
      OFF,
      OFF,
      OFF,
      OFF,
      OFF,
      OFF,
      ON,
      OFF,
    ]);
  });

  it('returns the correct array for 111', () => {
    expect(DMux8Way(ON, [ON, ON, ON])).toEqual([
      OFF,
      OFF,
      OFF,
      OFF,
      OFF,
      OFF,
      OFF,
      ON,
    ]);
  });
});
