import { Bus16, AluOptions } from './types';
import And16 from './And16';
import Mux16 from './Mux16';
import Not16 from './Not16';
import Add16 from './Add16';
import { ZERO } from './constants';

const ArithmeticLogicUnit = (
  x: Bus16,
  y: Bus16,
  options: AluOptions
): Bus16 => {
  const xResult = Mux16(x, ZERO, options.zx);
  const xResult2 = Mux16(xResult, Not16(xResult), options.nx);

  const yResult = Mux16(y, ZERO, options.zy);
  const yResult2 = Mux16(yResult, Not16(yResult), options.ny);

  const fResult = Mux16(
    And16(xResult2, yResult2),
    Add16(xResult2, yResult2),
    options.f
  );

  return Mux16(fResult, Not16(fResult), options.no);
};

export default ArithmeticLogicUnit;

// This is the legacy (expanded and incomprehensible) version of the ALU.
// It is retained here for documentation, and because it's kind of fun,
// but the version above is WAY more performant
export const LegacyArithmeticLogicUnit = (
  x: Bus16,
  y: Bus16,
  options: AluOptions
): Bus16 =>
  Mux16(
    Mux16(
      And16(
        Mux16(
          Mux16(x, ZERO, options.zx),
          Not16(Mux16(x, ZERO, options.zx)),
          options.nx
        ),
        Mux16(
          Mux16(y, ZERO, options.zy),
          Not16(Mux16(y, ZERO, options.zy)),
          options.ny
        )
      ),
      Add16(
        Mux16(
          Mux16(x, ZERO, options.zx),
          Not16(Mux16(x, ZERO, options.zx)),
          options.nx
        ),
        Mux16(
          Mux16(y, ZERO, options.zy),
          Not16(Mux16(y, ZERO, options.zy)),
          options.ny
        )
      ),
      options.f
    ),
    Not16(
      Mux16(
        And16(
          Mux16(
            Mux16(x, ZERO, options.zx),
            Not16(Mux16(x, ZERO, options.zx)),
            options.nx
          ),
          Mux16(
            Mux16(y, ZERO, options.zy),
            Not16(Mux16(y, ZERO, options.zy)),
            options.ny
          )
        ),
        Add16(
          Mux16(
            Mux16(x, ZERO, options.zx),
            Not16(Mux16(x, ZERO, options.zx)),
            options.nx
          ),
          Mux16(
            Mux16(y, ZERO, options.zy),
            Not16(Mux16(y, ZERO, options.zy)),
            options.ny
          )
        ),
        options.f
      )
    ),
    options.no
  );
