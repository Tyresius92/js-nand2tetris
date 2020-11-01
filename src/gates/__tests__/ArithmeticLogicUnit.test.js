import { Bit } from '../types';
import ArithmeticLogicUnit from '../ArithmeticLogicUnit';

// Other helpers
import { ALL_OFF, ALL_ON, ZERO, ONE, NEGATIVE_ONE } from '../constants';
import TwosComplement from '../negation/TwosComplement';
import Not16 from '../negation/Not16';
import And16 from '../and/And16';
import Or16 from '../or/Or16';
import Incrementer from '../arithmetic/Incrementer';
import Add16 from '../arithmetic/Add16';
import Eq16 from '../equality/Eq16';
import IsNeg16 from '../negation/IsNeg16';

const { ON, OFF } = Bit;

describe('ArithmeticLogicUnit', () => {
  const PARTIAL_ON = [
    OFF,
    ON,
    OFF,
    ON,
    ON,
    ON,
    OFF,
    ON,
    OFF,
    OFF,
    OFF,
    OFF,
    ON,
    ON,
    OFF,
    ON,
  ];

  const NEGATIVE_PARTIAL_ON = [
    ON,
    ON,
    OFF,
    ON,
    ON,
    ON,
    OFF,
    ON,
    OFF,
    OFF,
    OFF,
    OFF,
    ON,
    ON,
    OFF,
    ON,
  ];

  it.each`
    x                      | y
    ${ALL_OFF}             | ${ALL_OFF}
    ${ALL_OFF}             | ${ALL_ON}
    ${ALL_OFF}             | ${PARTIAL_ON}
    ${ALL_OFF}             | ${NEGATIVE_PARTIAL_ON}
    ${ALL_ON}              | ${ALL_OFF}
    ${ALL_ON}              | ${ALL_ON}
    ${ALL_ON}              | ${PARTIAL_ON}
    ${ALL_ON}              | ${NEGATIVE_PARTIAL_ON}
    ${PARTIAL_ON}          | ${ALL_OFF}
    ${PARTIAL_ON}          | ${ALL_ON}
    ${PARTIAL_ON}          | ${PARTIAL_ON}
    ${PARTIAL_ON}          | ${NEGATIVE_PARTIAL_ON}
    ${NEGATIVE_PARTIAL_ON} | ${ALL_OFF}
    ${NEGATIVE_PARTIAL_ON} | ${ALL_ON}
    ${NEGATIVE_PARTIAL_ON} | ${PARTIAL_ON}
    ${NEGATIVE_PARTIAL_ON} | ${NEGATIVE_PARTIAL_ON}
  `('returns ALL OFF for all z options ON', ({ x, y }) => {
    expect(
      ArithmeticLogicUnit(x, y, {
        zx: ON,
        nx: OFF,
        zy: ON,
        ny: OFF,
        f: ON,
        no: OFF,
      })
    ).toEqual({ output: ZERO, zr: ON, ng: OFF });
  });

  it.each`
    x                      | y
    ${ALL_OFF}             | ${ALL_OFF}
    ${ALL_OFF}             | ${ALL_ON}
    ${ALL_OFF}             | ${PARTIAL_ON}
    ${ALL_OFF}             | ${NEGATIVE_PARTIAL_ON}
    ${ALL_ON}              | ${ALL_OFF}
    ${ALL_ON}              | ${ALL_ON}
    ${ALL_ON}              | ${PARTIAL_ON}
    ${ALL_ON}              | ${NEGATIVE_PARTIAL_ON}
    ${PARTIAL_ON}          | ${ALL_OFF}
    ${PARTIAL_ON}          | ${ALL_ON}
    ${PARTIAL_ON}          | ${PARTIAL_ON}
    ${PARTIAL_ON}          | ${NEGATIVE_PARTIAL_ON}
    ${NEGATIVE_PARTIAL_ON} | ${ALL_OFF}
    ${NEGATIVE_PARTIAL_ON} | ${ALL_ON}
    ${NEGATIVE_PARTIAL_ON} | ${PARTIAL_ON}
    ${NEGATIVE_PARTIAL_ON} | ${NEGATIVE_PARTIAL_ON}
  `('returns ONE for all ON options', ({ x, y }) => {
    expect(
      ArithmeticLogicUnit(x, y, {
        zx: ON,
        nx: ON,
        zy: ON,
        ny: ON,
        f: ON,
        no: ON,
      })
    ).toEqual({ output: ONE, zr: OFF, ng: OFF });
  });

  it.each`
    x                      | y
    ${ALL_OFF}             | ${ALL_OFF}
    ${ALL_OFF}             | ${ALL_ON}
    ${ALL_OFF}             | ${PARTIAL_ON}
    ${ALL_OFF}             | ${NEGATIVE_PARTIAL_ON}
    ${ALL_ON}              | ${ALL_OFF}
    ${ALL_ON}              | ${ALL_ON}
    ${ALL_ON}              | ${PARTIAL_ON}
    ${ALL_ON}              | ${NEGATIVE_PARTIAL_ON}
    ${PARTIAL_ON}          | ${ALL_OFF}
    ${PARTIAL_ON}          | ${ALL_ON}
    ${PARTIAL_ON}          | ${PARTIAL_ON}
    ${PARTIAL_ON}          | ${NEGATIVE_PARTIAL_ON}
    ${NEGATIVE_PARTIAL_ON} | ${ALL_OFF}
    ${NEGATIVE_PARTIAL_ON} | ${ALL_ON}
    ${NEGATIVE_PARTIAL_ON} | ${PARTIAL_ON}
    ${NEGATIVE_PARTIAL_ON} | ${NEGATIVE_PARTIAL_ON}
  `('returns NEGATIVE_ONE for zx, nx, zy, f ON options', ({ x, y }) => {
    expect(
      ArithmeticLogicUnit(x, y, {
        zx: ON,
        nx: ON,
        zy: ON,
        ny: OFF,
        f: ON,
        no: OFF,
      })
    ).toEqual({ output: NEGATIVE_ONE, zr: OFF, ng: ON });
  });

  it.each`
    x                      | y
    ${ALL_OFF}             | ${ALL_OFF}
    ${ALL_OFF}             | ${ALL_ON}
    ${ALL_OFF}             | ${PARTIAL_ON}
    ${ALL_OFF}             | ${NEGATIVE_PARTIAL_ON}
    ${ALL_ON}              | ${ALL_OFF}
    ${ALL_ON}              | ${ALL_ON}
    ${ALL_ON}              | ${PARTIAL_ON}
    ${ALL_ON}              | ${NEGATIVE_PARTIAL_ON}
    ${PARTIAL_ON}          | ${ALL_OFF}
    ${PARTIAL_ON}          | ${ALL_ON}
    ${PARTIAL_ON}          | ${PARTIAL_ON}
    ${PARTIAL_ON}          | ${NEGATIVE_PARTIAL_ON}
    ${NEGATIVE_PARTIAL_ON} | ${ALL_OFF}
    ${NEGATIVE_PARTIAL_ON} | ${ALL_ON}
    ${NEGATIVE_PARTIAL_ON} | ${PARTIAL_ON}
    ${NEGATIVE_PARTIAL_ON} | ${NEGATIVE_PARTIAL_ON}
  `('returns x for all zy ny = ON options', ({ x, y }) => {
    expect(
      ArithmeticLogicUnit(x, y, {
        zx: OFF,
        nx: OFF,
        zy: ON,
        ny: ON,
        f: OFF,
        no: OFF,
      })
    ).toEqual({ output: x, zr: Eq16(ZERO, x), ng: IsNeg16(x) });
  });

  it.each`
    x                      | y
    ${ALL_OFF}             | ${ALL_OFF}
    ${ALL_OFF}             | ${ALL_ON}
    ${ALL_OFF}             | ${PARTIAL_ON}
    ${ALL_OFF}             | ${NEGATIVE_PARTIAL_ON}
    ${ALL_ON}              | ${ALL_OFF}
    ${ALL_ON}              | ${ALL_ON}
    ${ALL_ON}              | ${PARTIAL_ON}
    ${ALL_ON}              | ${NEGATIVE_PARTIAL_ON}
    ${PARTIAL_ON}          | ${ALL_OFF}
    ${PARTIAL_ON}          | ${ALL_ON}
    ${PARTIAL_ON}          | ${PARTIAL_ON}
    ${PARTIAL_ON}          | ${NEGATIVE_PARTIAL_ON}
    ${NEGATIVE_PARTIAL_ON} | ${ALL_OFF}
    ${NEGATIVE_PARTIAL_ON} | ${ALL_ON}
    ${NEGATIVE_PARTIAL_ON} | ${PARTIAL_ON}
    ${NEGATIVE_PARTIAL_ON} | ${NEGATIVE_PARTIAL_ON}
  `('returns y for all zx nx = ON options', ({ x, y }) => {
    expect(
      ArithmeticLogicUnit(x, y, {
        zx: ON,
        nx: ON,
        zy: OFF,
        ny: OFF,
        f: OFF,
        no: OFF,
      })
    ).toEqual({ output: y, zr: Eq16(ZERO, y), ng: IsNeg16(y) });
  });

  it.each`
    x                      | y
    ${ALL_OFF}             | ${ALL_OFF}
    ${ALL_OFF}             | ${ALL_ON}
    ${ALL_OFF}             | ${PARTIAL_ON}
    ${ALL_OFF}             | ${NEGATIVE_PARTIAL_ON}
    ${ALL_ON}              | ${ALL_OFF}
    ${ALL_ON}              | ${ALL_ON}
    ${ALL_ON}              | ${PARTIAL_ON}
    ${ALL_ON}              | ${NEGATIVE_PARTIAL_ON}
    ${PARTIAL_ON}          | ${ALL_OFF}
    ${PARTIAL_ON}          | ${ALL_ON}
    ${PARTIAL_ON}          | ${PARTIAL_ON}
    ${PARTIAL_ON}          | ${NEGATIVE_PARTIAL_ON}
    ${NEGATIVE_PARTIAL_ON} | ${ALL_OFF}
    ${NEGATIVE_PARTIAL_ON} | ${ALL_ON}
    ${NEGATIVE_PARTIAL_ON} | ${PARTIAL_ON}
    ${NEGATIVE_PARTIAL_ON} | ${NEGATIVE_PARTIAL_ON}
  `('returns !x for all zy ny no = ON options', ({ x, y }) => {
    expect(
      ArithmeticLogicUnit(x, y, {
        zx: OFF,
        nx: OFF,
        zy: ON,
        ny: ON,
        f: OFF,
        no: ON,
      })
    ).toEqual({
      output: Not16(x),
      zr: Eq16(ZERO, Not16(x)),
      ng: IsNeg16(Not16(x)),
    });
  });

  it.each`
    x                      | y
    ${ALL_OFF}             | ${ALL_OFF}
    ${ALL_OFF}             | ${ALL_ON}
    ${ALL_OFF}             | ${PARTIAL_ON}
    ${ALL_OFF}             | ${NEGATIVE_PARTIAL_ON}
    ${ALL_ON}              | ${ALL_OFF}
    ${ALL_ON}              | ${ALL_ON}
    ${ALL_ON}              | ${PARTIAL_ON}
    ${ALL_ON}              | ${NEGATIVE_PARTIAL_ON}
    ${PARTIAL_ON}          | ${ALL_OFF}
    ${PARTIAL_ON}          | ${ALL_ON}
    ${PARTIAL_ON}          | ${PARTIAL_ON}
    ${PARTIAL_ON}          | ${NEGATIVE_PARTIAL_ON}
    ${NEGATIVE_PARTIAL_ON} | ${ALL_OFF}
    ${NEGATIVE_PARTIAL_ON} | ${ALL_ON}
    ${NEGATIVE_PARTIAL_ON} | ${PARTIAL_ON}
    ${NEGATIVE_PARTIAL_ON} | ${NEGATIVE_PARTIAL_ON}
  `('returns !y for all zx nx no = ON options', ({ x, y }) => {
    expect(
      ArithmeticLogicUnit(x, y, {
        zx: ON,
        nx: ON,
        zy: OFF,
        ny: OFF,
        f: OFF,
        no: ON,
      })
    ).toEqual({
      output: Not16(y),
      zr: Eq16(ZERO, Not16(y)),
      ng: IsNeg16(Not16(y)),
    });
  });

  it.each`
    x                      | y
    ${ALL_OFF}             | ${ALL_OFF}
    ${ALL_OFF}             | ${ALL_ON}
    ${ALL_OFF}             | ${PARTIAL_ON}
    ${ALL_OFF}             | ${NEGATIVE_PARTIAL_ON}
    ${ALL_ON}              | ${ALL_OFF}
    ${ALL_ON}              | ${ALL_ON}
    ${ALL_ON}              | ${PARTIAL_ON}
    ${ALL_ON}              | ${NEGATIVE_PARTIAL_ON}
    ${PARTIAL_ON}          | ${ALL_OFF}
    ${PARTIAL_ON}          | ${ALL_ON}
    ${PARTIAL_ON}          | ${PARTIAL_ON}
    ${PARTIAL_ON}          | ${NEGATIVE_PARTIAL_ON}
    ${NEGATIVE_PARTIAL_ON} | ${ALL_OFF}
    ${NEGATIVE_PARTIAL_ON} | ${ALL_ON}
    ${NEGATIVE_PARTIAL_ON} | ${PARTIAL_ON}
    ${NEGATIVE_PARTIAL_ON} | ${NEGATIVE_PARTIAL_ON}
  `('returns -x for all zy ny f no = ON options', ({ x, y }) => {
    expect(
      ArithmeticLogicUnit(x, y, {
        zx: OFF,
        nx: OFF,
        zy: ON,
        ny: ON,
        f: ON,
        no: ON,
      })
    ).toEqual({
      output: TwosComplement(x),
      zr: Eq16(ZERO, TwosComplement(x)),
      ng: IsNeg16(TwosComplement(x)),
    });
  });

  it.each`
    x                      | y
    ${ALL_OFF}             | ${ALL_OFF}
    ${ALL_OFF}             | ${ALL_ON}
    ${ALL_OFF}             | ${PARTIAL_ON}
    ${ALL_OFF}             | ${NEGATIVE_PARTIAL_ON}
    ${ALL_ON}              | ${ALL_OFF}
    ${ALL_ON}              | ${ALL_ON}
    ${ALL_ON}              | ${PARTIAL_ON}
    ${ALL_ON}              | ${NEGATIVE_PARTIAL_ON}
    ${PARTIAL_ON}          | ${ALL_OFF}
    ${PARTIAL_ON}          | ${ALL_ON}
    ${PARTIAL_ON}          | ${PARTIAL_ON}
    ${PARTIAL_ON}          | ${NEGATIVE_PARTIAL_ON}
    ${NEGATIVE_PARTIAL_ON} | ${ALL_OFF}
    ${NEGATIVE_PARTIAL_ON} | ${ALL_ON}
    ${NEGATIVE_PARTIAL_ON} | ${PARTIAL_ON}
    ${NEGATIVE_PARTIAL_ON} | ${NEGATIVE_PARTIAL_ON}
  `('returns -y for all zx nx f no = ON options', ({ x, y }) => {
    expect(
      ArithmeticLogicUnit(x, y, {
        zx: ON,
        nx: ON,
        zy: OFF,
        ny: OFF,
        f: ON,
        no: ON,
      })
    ).toEqual({
      output: TwosComplement(y),
      zr: Eq16(ZERO, TwosComplement(y)),
      ng: IsNeg16(TwosComplement(y)),
    });
  });

  it.each`
    x                      | y
    ${ALL_OFF}             | ${ALL_OFF}
    ${ALL_OFF}             | ${ALL_ON}
    ${ALL_OFF}             | ${PARTIAL_ON}
    ${ALL_OFF}             | ${NEGATIVE_PARTIAL_ON}
    ${ALL_ON}              | ${ALL_OFF}
    ${ALL_ON}              | ${ALL_ON}
    ${ALL_ON}              | ${PARTIAL_ON}
    ${ALL_ON}              | ${NEGATIVE_PARTIAL_ON}
    ${PARTIAL_ON}          | ${ALL_OFF}
    ${PARTIAL_ON}          | ${ALL_ON}
    ${PARTIAL_ON}          | ${PARTIAL_ON}
    ${PARTIAL_ON}          | ${NEGATIVE_PARTIAL_ON}
    ${NEGATIVE_PARTIAL_ON} | ${ALL_OFF}
    ${NEGATIVE_PARTIAL_ON} | ${ALL_ON}
    ${NEGATIVE_PARTIAL_ON} | ${PARTIAL_ON}
    ${NEGATIVE_PARTIAL_ON} | ${NEGATIVE_PARTIAL_ON}
  `('returns x+1 for zy nx f no = ON options', ({ x, y }) => {
    expect(
      ArithmeticLogicUnit(x, y, {
        zx: OFF,
        nx: ON,
        zy: ON,
        ny: ON,
        f: ON,
        no: ON,
      })
    ).toEqual({
      output: Incrementer(x),
      zr: Eq16(ZERO, Incrementer(x)),
      ng: IsNeg16(Incrementer(x)),
    });
  });

  it.each`
    x                      | y
    ${ALL_OFF}             | ${ALL_OFF}
    ${ALL_OFF}             | ${ALL_ON}
    ${ALL_OFF}             | ${PARTIAL_ON}
    ${ALL_OFF}             | ${NEGATIVE_PARTIAL_ON}
    ${ALL_ON}              | ${ALL_OFF}
    ${ALL_ON}              | ${ALL_ON}
    ${ALL_ON}              | ${PARTIAL_ON}
    ${ALL_ON}              | ${NEGATIVE_PARTIAL_ON}
    ${PARTIAL_ON}          | ${ALL_OFF}
    ${PARTIAL_ON}          | ${ALL_ON}
    ${PARTIAL_ON}          | ${PARTIAL_ON}
    ${PARTIAL_ON}          | ${NEGATIVE_PARTIAL_ON}
    ${NEGATIVE_PARTIAL_ON} | ${ALL_OFF}
    ${NEGATIVE_PARTIAL_ON} | ${ALL_ON}
    ${NEGATIVE_PARTIAL_ON} | ${PARTIAL_ON}
    ${NEGATIVE_PARTIAL_ON} | ${NEGATIVE_PARTIAL_ON}
  `('returns y+1 for zy nx ny f no = ON options', ({ x, y }) => {
    expect(
      ArithmeticLogicUnit(x, y, {
        zx: ON,
        nx: ON,
        zy: OFF,
        ny: ON,
        f: ON,
        no: ON,
      })
    ).toEqual({
      output: Incrementer(y),
      zr: Eq16(ZERO, Incrementer(y)),
      ng: IsNeg16(Incrementer(y)),
    });
  });

  it.each`
    x                      | y
    ${ALL_OFF}             | ${ALL_OFF}
    ${ALL_OFF}             | ${ALL_ON}
    ${ALL_OFF}             | ${PARTIAL_ON}
    ${ALL_OFF}             | ${NEGATIVE_PARTIAL_ON}
    ${ALL_ON}              | ${ALL_OFF}
    ${ALL_ON}              | ${ALL_ON}
    ${ALL_ON}              | ${PARTIAL_ON}
    ${ALL_ON}              | ${NEGATIVE_PARTIAL_ON}
    ${PARTIAL_ON}          | ${ALL_OFF}
    ${PARTIAL_ON}          | ${ALL_ON}
    ${PARTIAL_ON}          | ${PARTIAL_ON}
    ${PARTIAL_ON}          | ${NEGATIVE_PARTIAL_ON}
    ${NEGATIVE_PARTIAL_ON} | ${ALL_OFF}
    ${NEGATIVE_PARTIAL_ON} | ${ALL_ON}
    ${NEGATIVE_PARTIAL_ON} | ${PARTIAL_ON}
    ${NEGATIVE_PARTIAL_ON} | ${NEGATIVE_PARTIAL_ON}
  `('returns x-1 for zy ny f = ON options', ({ x, y }) => {
    expect(
      ArithmeticLogicUnit(x, y, {
        zx: OFF,
        nx: OFF,
        zy: ON,
        ny: ON,
        f: ON,
        no: OFF,
      })
    ).toEqual({
      output: Add16(x, NEGATIVE_ONE),
      zr: Eq16(ZERO, Add16(x, NEGATIVE_ONE)),
      ng: IsNeg16(Add16(x, NEGATIVE_ONE)),
    });
  });

  it.each`
    x                      | y
    ${ALL_OFF}             | ${ALL_OFF}
    ${ALL_OFF}             | ${ALL_ON}
    ${ALL_OFF}             | ${PARTIAL_ON}
    ${ALL_OFF}             | ${NEGATIVE_PARTIAL_ON}
    ${ALL_ON}              | ${ALL_OFF}
    ${ALL_ON}              | ${ALL_ON}
    ${ALL_ON}              | ${PARTIAL_ON}
    ${ALL_ON}              | ${NEGATIVE_PARTIAL_ON}
    ${PARTIAL_ON}          | ${ALL_OFF}
    ${PARTIAL_ON}          | ${ALL_ON}
    ${PARTIAL_ON}          | ${PARTIAL_ON}
    ${PARTIAL_ON}          | ${NEGATIVE_PARTIAL_ON}
    ${NEGATIVE_PARTIAL_ON} | ${ALL_OFF}
    ${NEGATIVE_PARTIAL_ON} | ${ALL_ON}
    ${NEGATIVE_PARTIAL_ON} | ${PARTIAL_ON}
    ${NEGATIVE_PARTIAL_ON} | ${NEGATIVE_PARTIAL_ON}
  `('returns x-1 for zx nx f = ON options', ({ x, y }) => {
    expect(
      ArithmeticLogicUnit(x, y, {
        zx: ON,
        nx: ON,
        zy: OFF,
        ny: OFF,
        f: ON,
        no: OFF,
      })
    ).toEqual({
      output: Add16(y, NEGATIVE_ONE),
      zr: Eq16(ZERO, Add16(y, NEGATIVE_ONE)),
      ng: IsNeg16(Add16(y, NEGATIVE_ONE)),
    });
  });

  it.each`
    x                      | y
    ${ALL_OFF}             | ${ALL_OFF}
    ${ALL_OFF}             | ${ALL_ON}
    ${ALL_OFF}             | ${PARTIAL_ON}
    ${ALL_OFF}             | ${NEGATIVE_PARTIAL_ON}
    ${ALL_ON}              | ${ALL_OFF}
    ${ALL_ON}              | ${ALL_ON}
    ${ALL_ON}              | ${PARTIAL_ON}
    ${ALL_ON}              | ${NEGATIVE_PARTIAL_ON}
    ${PARTIAL_ON}          | ${ALL_OFF}
    ${PARTIAL_ON}          | ${ALL_ON}
    ${PARTIAL_ON}          | ${PARTIAL_ON}
    ${PARTIAL_ON}          | ${NEGATIVE_PARTIAL_ON}
    ${NEGATIVE_PARTIAL_ON} | ${ALL_OFF}
    ${NEGATIVE_PARTIAL_ON} | ${ALL_ON}
    ${NEGATIVE_PARTIAL_ON} | ${PARTIAL_ON}
    ${NEGATIVE_PARTIAL_ON} | ${NEGATIVE_PARTIAL_ON}
  `('returns x+y for f = ON options', ({ x, y }) => {
    expect(
      ArithmeticLogicUnit(x, y, {
        zx: OFF,
        nx: OFF,
        zy: OFF,
        ny: OFF,
        f: ON,
        no: OFF,
      })
    ).toEqual({
      output: Add16(x, y),
      zr: Eq16(ZERO, Add16(x, y)),
      ng: IsNeg16(Add16(x, y)),
    });
  });

  it.each`
    x                      | y
    ${ALL_OFF}             | ${ALL_OFF}
    ${ALL_OFF}             | ${ALL_ON}
    ${ALL_OFF}             | ${PARTIAL_ON}
    ${ALL_OFF}             | ${NEGATIVE_PARTIAL_ON}
    ${ALL_ON}              | ${ALL_OFF}
    ${ALL_ON}              | ${ALL_ON}
    ${ALL_ON}              | ${PARTIAL_ON}
    ${ALL_ON}              | ${NEGATIVE_PARTIAL_ON}
    ${PARTIAL_ON}          | ${ALL_OFF}
    ${PARTIAL_ON}          | ${ALL_ON}
    ${PARTIAL_ON}          | ${PARTIAL_ON}
    ${PARTIAL_ON}          | ${NEGATIVE_PARTIAL_ON}
    ${NEGATIVE_PARTIAL_ON} | ${ALL_OFF}
    ${NEGATIVE_PARTIAL_ON} | ${ALL_ON}
    ${NEGATIVE_PARTIAL_ON} | ${PARTIAL_ON}
    ${NEGATIVE_PARTIAL_ON} | ${NEGATIVE_PARTIAL_ON}
  `('returns x-y for nx f no = ON options', ({ x, y }) => {
    expect(
      ArithmeticLogicUnit(x, y, {
        zx: OFF,
        nx: ON,
        zy: OFF,
        ny: OFF,
        f: ON,
        no: ON,
      })
    ).toEqual({
      output: Add16(x, TwosComplement(y)),
      zr: Eq16(ZERO, Add16(x, TwosComplement(y))),
      ng: IsNeg16(Add16(x, TwosComplement(y))),
    });
  });

  it.each`
    x                      | y
    ${ALL_OFF}             | ${ALL_OFF}
    ${ALL_OFF}             | ${ALL_ON}
    ${ALL_OFF}             | ${PARTIAL_ON}
    ${ALL_OFF}             | ${NEGATIVE_PARTIAL_ON}
    ${ALL_ON}              | ${ALL_OFF}
    ${ALL_ON}              | ${ALL_ON}
    ${ALL_ON}              | ${PARTIAL_ON}
    ${ALL_ON}              | ${NEGATIVE_PARTIAL_ON}
    ${PARTIAL_ON}          | ${ALL_OFF}
    ${PARTIAL_ON}          | ${ALL_ON}
    ${PARTIAL_ON}          | ${PARTIAL_ON}
    ${PARTIAL_ON}          | ${NEGATIVE_PARTIAL_ON}
    ${NEGATIVE_PARTIAL_ON} | ${ALL_OFF}
    ${NEGATIVE_PARTIAL_ON} | ${ALL_ON}
    ${NEGATIVE_PARTIAL_ON} | ${PARTIAL_ON}
    ${NEGATIVE_PARTIAL_ON} | ${NEGATIVE_PARTIAL_ON}
  `('returns y-x for ny f no = ON options', ({ x, y }) => {
    expect(
      ArithmeticLogicUnit(x, y, {
        zx: OFF,
        nx: OFF,
        zy: OFF,
        ny: ON,
        f: ON,
        no: ON,
      })
    ).toEqual({
      output: Add16(TwosComplement(x), y),
      zr: Eq16(ZERO, Add16(TwosComplement(x), y)),
      ng: IsNeg16(Add16(TwosComplement(x), y)),
    });
  });

  it.each`
    x                      | y
    ${ALL_OFF}             | ${ALL_OFF}
    ${ALL_OFF}             | ${ALL_ON}
    ${ALL_OFF}             | ${PARTIAL_ON}
    ${ALL_OFF}             | ${NEGATIVE_PARTIAL_ON}
    ${ALL_ON}              | ${ALL_OFF}
    ${ALL_ON}              | ${ALL_ON}
    ${ALL_ON}              | ${PARTIAL_ON}
    ${ALL_ON}              | ${NEGATIVE_PARTIAL_ON}
    ${PARTIAL_ON}          | ${ALL_OFF}
    ${PARTIAL_ON}          | ${ALL_ON}
    ${PARTIAL_ON}          | ${PARTIAL_ON}
    ${PARTIAL_ON}          | ${NEGATIVE_PARTIAL_ON}
    ${NEGATIVE_PARTIAL_ON} | ${ALL_OFF}
    ${NEGATIVE_PARTIAL_ON} | ${ALL_ON}
    ${NEGATIVE_PARTIAL_ON} | ${PARTIAL_ON}
    ${NEGATIVE_PARTIAL_ON} | ${NEGATIVE_PARTIAL_ON}
  `('returns AND logic for all off options', ({ x, y }) => {
    expect(
      ArithmeticLogicUnit(x, y, {
        zx: OFF,
        nx: OFF,
        zy: OFF,
        ny: OFF,
        f: OFF,
        no: OFF,
      })
    ).toEqual({
      output: And16(x, y),
      zr: Eq16(ZERO, And16(x, y)),
      ng: IsNeg16(And16(x, y)),
    });
  });

  it.each`
    x                      | y
    ${ALL_OFF}             | ${ALL_OFF}
    ${ALL_OFF}             | ${ALL_ON}
    ${ALL_OFF}             | ${PARTIAL_ON}
    ${ALL_OFF}             | ${NEGATIVE_PARTIAL_ON}
    ${ALL_ON}              | ${ALL_OFF}
    ${ALL_ON}              | ${ALL_ON}
    ${ALL_ON}              | ${PARTIAL_ON}
    ${ALL_ON}              | ${NEGATIVE_PARTIAL_ON}
    ${PARTIAL_ON}          | ${ALL_OFF}
    ${PARTIAL_ON}          | ${ALL_ON}
    ${PARTIAL_ON}          | ${PARTIAL_ON}
    ${PARTIAL_ON}          | ${NEGATIVE_PARTIAL_ON}
    ${NEGATIVE_PARTIAL_ON} | ${ALL_OFF}
    ${NEGATIVE_PARTIAL_ON} | ${ALL_ON}
    ${NEGATIVE_PARTIAL_ON} | ${PARTIAL_ON}
    ${NEGATIVE_PARTIAL_ON} | ${NEGATIVE_PARTIAL_ON}
  `('returns OR logic for n options ON', ({ x, y }) => {
    expect(
      ArithmeticLogicUnit(x, y, {
        zx: OFF,
        nx: ON,
        zy: OFF,
        ny: ON,
        f: OFF,
        no: ON,
      })
    ).toEqual({
      output: Or16(x, y),
      zr: Eq16(ZERO, Or16(x, y)),
      ng: IsNeg16(Or16(x, y)),
    });
  });
});
