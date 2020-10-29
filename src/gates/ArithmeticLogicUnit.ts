import { Bit, AluOptions } from './types';
import And16 from './And16';

const { ON, OFF } = Bit;

const ArithmeticLogicUnit = (
  x: [
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
  ],
  y: [
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
  ],
  options: AluOptions
) => {
  return And16(x, y);
};

export default ArithmeticLogicUnit;
