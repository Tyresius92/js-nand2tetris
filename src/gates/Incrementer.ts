import { Bit } from './types';
import Add16 from './Add16';

const { ON, OFF } = Bit;

const Incrementer = (
  input: [
    Bit,
    Bit,
    Bit,
    Bit,
    Bit,
    Bit,
    Bit,
    Bit,
    Bit,
    Bit,
    Bit,
    Bit,
    Bit,
    Bit,
    Bit,
    Bit
  ]
): [
  Bit,
  Bit,
  Bit,
  Bit,
  Bit,
  Bit,
  Bit,
  Bit,
  Bit,
  Bit,
  Bit,
  Bit,
  Bit,
  Bit,
  Bit,
  Bit
] =>
  Add16(input, [
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
  ]);

export default Incrementer;
