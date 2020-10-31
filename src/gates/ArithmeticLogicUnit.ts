import { Bus16, AluOptions, AluResult } from './types';
import And16 from './And16';
import Mux16 from './Mux16';
import Not16 from './Not16';
import Add16 from './Add16';
import Eq16 from './Eq16';
import { ZERO } from './constants';
import IsNeg16 from './IsNeg16';

const ArithmeticLogicUnit = (
  x: Bus16,
  y: Bus16,
  options: AluOptions
): AluResult => {
  const xResult = Mux16(x, ZERO, options.zx);
  const xResult2 = Mux16(xResult, Not16(xResult), options.nx);

  const yResult = Mux16(y, ZERO, options.zy);
  const yResult2 = Mux16(yResult, Not16(yResult), options.ny);

  const fResult = Mux16(
    And16(xResult2, yResult2),
    Add16(xResult2, yResult2),
    options.f
  );

  const output = Mux16(fResult, Not16(fResult), options.no);

  return {
    output,
    zr: Eq16(ZERO, output),
    ng: IsNeg16(output),
  };
};

// This is the legacy (incomprehensible) version of the ALU.
// It is retained here for documentation, and because it's kind of fun,
// but the version above is WAY more performant since it's not doing the same
// calculations multiple times.

// If you're interested in verifying the correctness of this version,
// just remove Legacy from the name of this version and
// change the name of the version above
export const LegacyArithmeticLogicUnit = (
  x: Bus16,
  y: Bus16,
  options: AluOptions
): AluResult => ({
  output: Mux16(
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
  ),
  zr: Eq16(
    ZERO,
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
    )
  ),
  ng: IsNeg16(
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
    )
  ),
});

export default ArithmeticLogicUnit;
