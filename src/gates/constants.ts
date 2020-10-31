import { Bit, Bus16 } from './types';

const { ON, OFF } = Bit;

export const ALL_OFF: Bus16 = [
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
// aliases for all off
export const ZERO = ALL_OFF;

export const ONE: Bus16 = [
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

export const ALL_ON: Bus16 = [
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
export const NEGATIVE_ONE: Bus16 = ALL_ON;
