import { Bit } from '../types';
import ArithmeticLogicUnit from '../ArithmeticLogicUnit';

// Other helpers
import { ALL_OFF, ALL_ON, ZERO, ONE, NEGATIVE_ONE } from '../constants';
import TwosComplement from '../TwosComplement';
import Not16 from '../Not16';
import And16 from '../And16';
import Or16 from '../Or16';
import Incrementer from '../Incrementer';
import Add16 from '../Add16';

const { ON, OFF } = Bit;

describe('ArithmeticLogicUnit', () => {
  const PARTIAL_ON = [
    ON,
    OFF,
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
    x             | y
    ${ALL_OFF}    | ${ALL_OFF}
    ${ALL_OFF}    | ${ALL_ON}
    ${ALL_OFF}    | ${PARTIAL_ON}
    ${ALL_ON}     | ${ALL_OFF}
    ${ALL_ON}     | ${ALL_ON}
    ${ALL_ON}     | ${PARTIAL_ON}
    ${PARTIAL_ON} | ${ALL_OFF}
    ${PARTIAL_ON} | ${ALL_ON}
    ${PARTIAL_ON} | ${PARTIAL_ON}
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
    ).toEqual(ZERO);
  });

  it.each`
    x             | y
    ${ALL_OFF}    | ${ALL_OFF}
    ${ALL_OFF}    | ${ALL_ON}
    ${ALL_OFF}    | ${PARTIAL_ON}
    ${ALL_ON}     | ${ALL_OFF}
    ${ALL_ON}     | ${ALL_ON}
    ${ALL_ON}     | ${PARTIAL_ON}
    ${PARTIAL_ON} | ${ALL_OFF}
    ${PARTIAL_ON} | ${ALL_ON}
    ${PARTIAL_ON} | ${PARTIAL_ON}
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
    ).toEqual(ONE);
  });

  it.each`
    x             | y
    ${ALL_OFF}    | ${ALL_OFF}
    ${ALL_OFF}    | ${ALL_ON}
    ${ALL_OFF}    | ${PARTIAL_ON}
    ${ALL_ON}     | ${ALL_OFF}
    ${ALL_ON}     | ${ALL_ON}
    ${ALL_ON}     | ${PARTIAL_ON}
    ${PARTIAL_ON} | ${ALL_OFF}
    ${PARTIAL_ON} | ${ALL_ON}
    ${PARTIAL_ON} | ${PARTIAL_ON}
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
    ).toEqual(NEGATIVE_ONE);
  });

  it.each`
    x             | y
    ${ALL_OFF}    | ${ALL_OFF}
    ${ALL_OFF}    | ${ALL_ON}
    ${ALL_OFF}    | ${PARTIAL_ON}
    ${ALL_ON}     | ${ALL_OFF}
    ${ALL_ON}     | ${ALL_ON}
    ${ALL_ON}     | ${PARTIAL_ON}
    ${PARTIAL_ON} | ${ALL_OFF}
    ${PARTIAL_ON} | ${ALL_ON}
    ${PARTIAL_ON} | ${PARTIAL_ON}
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
    ).toEqual(x);
  });

  it.each`
    x             | y
    ${ALL_OFF}    | ${ALL_OFF}
    ${ALL_OFF}    | ${ALL_ON}
    ${ALL_OFF}    | ${PARTIAL_ON}
    ${ALL_ON}     | ${ALL_OFF}
    ${ALL_ON}     | ${ALL_ON}
    ${ALL_ON}     | ${PARTIAL_ON}
    ${PARTIAL_ON} | ${ALL_OFF}
    ${PARTIAL_ON} | ${ALL_ON}
    ${PARTIAL_ON} | ${PARTIAL_ON}
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
    ).toEqual(y);
  });

  it.each`
    x             | y
    ${ALL_OFF}    | ${ALL_OFF}
    ${ALL_OFF}    | ${ALL_ON}
    ${ALL_OFF}    | ${PARTIAL_ON}
    ${ALL_ON}     | ${ALL_OFF}
    ${ALL_ON}     | ${ALL_ON}
    ${ALL_ON}     | ${PARTIAL_ON}
    ${PARTIAL_ON} | ${ALL_OFF}
    ${PARTIAL_ON} | ${ALL_ON}
    ${PARTIAL_ON} | ${PARTIAL_ON}
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
    ).toEqual(Not16(x));
  });

  it.each`
    x             | y
    ${ALL_OFF}    | ${ALL_OFF}
    ${ALL_OFF}    | ${ALL_ON}
    ${ALL_OFF}    | ${PARTIAL_ON}
    ${ALL_ON}     | ${ALL_OFF}
    ${ALL_ON}     | ${ALL_ON}
    ${ALL_ON}     | ${PARTIAL_ON}
    ${PARTIAL_ON} | ${ALL_OFF}
    ${PARTIAL_ON} | ${ALL_ON}
    ${PARTIAL_ON} | ${PARTIAL_ON}
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
    ).toEqual(Not16(y));
  });

  it.each`
    x             | y
    ${ALL_OFF}    | ${ALL_OFF}
    ${ALL_OFF}    | ${ALL_ON}
    ${ALL_OFF}    | ${PARTIAL_ON}
    ${ALL_ON}     | ${ALL_OFF}
    ${ALL_ON}     | ${ALL_ON}
    ${ALL_ON}     | ${PARTIAL_ON}
    ${PARTIAL_ON} | ${ALL_OFF}
    ${PARTIAL_ON} | ${ALL_ON}
    ${PARTIAL_ON} | ${PARTIAL_ON}
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
    ).toEqual(TwosComplement(x));
  });

  it.each`
    x             | y
    ${ALL_OFF}    | ${ALL_OFF}
    ${ALL_OFF}    | ${ALL_ON}
    ${ALL_OFF}    | ${PARTIAL_ON}
    ${ALL_ON}     | ${ALL_OFF}
    ${ALL_ON}     | ${ALL_ON}
    ${ALL_ON}     | ${PARTIAL_ON}
    ${PARTIAL_ON} | ${ALL_OFF}
    ${PARTIAL_ON} | ${ALL_ON}
    ${PARTIAL_ON} | ${PARTIAL_ON}
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
    ).toEqual(TwosComplement(y));
  });

  it.each`
    x             | y
    ${ALL_OFF}    | ${ALL_OFF}
    ${ALL_OFF}    | ${ALL_ON}
    ${ALL_OFF}    | ${PARTIAL_ON}
    ${ALL_ON}     | ${ALL_OFF}
    ${ALL_ON}     | ${ALL_ON}
    ${ALL_ON}     | ${PARTIAL_ON}
    ${PARTIAL_ON} | ${ALL_OFF}
    ${PARTIAL_ON} | ${ALL_ON}
    ${PARTIAL_ON} | ${PARTIAL_ON}
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
    ).toEqual(Incrementer(x));
  });

  it.each`
    x             | y
    ${ALL_OFF}    | ${ALL_OFF}
    ${ALL_OFF}    | ${ALL_ON}
    ${ALL_OFF}    | ${PARTIAL_ON}
    ${ALL_ON}     | ${ALL_OFF}
    ${ALL_ON}     | ${ALL_ON}
    ${ALL_ON}     | ${PARTIAL_ON}
    ${PARTIAL_ON} | ${ALL_OFF}
    ${PARTIAL_ON} | ${ALL_ON}
    ${PARTIAL_ON} | ${PARTIAL_ON}
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
    ).toEqual(Incrementer(y));
  });

  it.each`
    x             | y
    ${ALL_OFF}    | ${ALL_OFF}
    ${ALL_OFF}    | ${ALL_ON}
    ${ALL_OFF}    | ${PARTIAL_ON}
    ${ALL_ON}     | ${ALL_OFF}
    ${ALL_ON}     | ${ALL_ON}
    ${ALL_ON}     | ${PARTIAL_ON}
    ${PARTIAL_ON} | ${ALL_OFF}
    ${PARTIAL_ON} | ${ALL_ON}
    ${PARTIAL_ON} | ${PARTIAL_ON}
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
    ).toEqual(Add16(x, NEGATIVE_ONE));
  });

  it.each`
    x             | y
    ${ALL_OFF}    | ${ALL_OFF}
    ${ALL_OFF}    | ${ALL_ON}
    ${ALL_OFF}    | ${PARTIAL_ON}
    ${ALL_ON}     | ${ALL_OFF}
    ${ALL_ON}     | ${ALL_ON}
    ${ALL_ON}     | ${PARTIAL_ON}
    ${PARTIAL_ON} | ${ALL_OFF}
    ${PARTIAL_ON} | ${ALL_ON}
    ${PARTIAL_ON} | ${PARTIAL_ON}
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
    ).toEqual(Add16(y, NEGATIVE_ONE));
  });

  it.each`
    x             | y
    ${ALL_OFF}    | ${ALL_OFF}
    ${ALL_OFF}    | ${ALL_ON}
    ${ALL_OFF}    | ${PARTIAL_ON}
    ${ALL_ON}     | ${ALL_OFF}
    ${ALL_ON}     | ${ALL_ON}
    ${ALL_ON}     | ${PARTIAL_ON}
    ${PARTIAL_ON} | ${ALL_OFF}
    ${PARTIAL_ON} | ${ALL_ON}
    ${PARTIAL_ON} | ${PARTIAL_ON}
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
    ).toEqual(Add16(x, y));
  });

  it.each`
    x             | y
    ${ALL_OFF}    | ${ALL_OFF}
    ${ALL_OFF}    | ${ALL_ON}
    ${ALL_OFF}    | ${PARTIAL_ON}
    ${ALL_ON}     | ${ALL_OFF}
    ${ALL_ON}     | ${ALL_ON}
    ${ALL_ON}     | ${PARTIAL_ON}
    ${PARTIAL_ON} | ${ALL_OFF}
    ${PARTIAL_ON} | ${ALL_ON}
    ${PARTIAL_ON} | ${PARTIAL_ON}
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
    ).toEqual(Add16(x, TwosComplement(y)));
  });

  it.each`
    x             | y
    ${ALL_OFF}    | ${ALL_OFF}
    ${ALL_OFF}    | ${ALL_ON}
    ${ALL_OFF}    | ${PARTIAL_ON}
    ${ALL_ON}     | ${ALL_OFF}
    ${ALL_ON}     | ${ALL_ON}
    ${ALL_ON}     | ${PARTIAL_ON}
    ${PARTIAL_ON} | ${ALL_OFF}
    ${PARTIAL_ON} | ${ALL_ON}
    ${PARTIAL_ON} | ${PARTIAL_ON}
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
    ).toEqual(Add16(TwosComplement(x), y));
  });

  it.each`
    x             | y
    ${ALL_OFF}    | ${ALL_OFF}
    ${ALL_OFF}    | ${ALL_ON}
    ${ALL_OFF}    | ${PARTIAL_ON}
    ${ALL_ON}     | ${ALL_OFF}
    ${ALL_ON}     | ${ALL_ON}
    ${ALL_ON}     | ${PARTIAL_ON}
    ${PARTIAL_ON} | ${ALL_OFF}
    ${PARTIAL_ON} | ${ALL_ON}
    ${PARTIAL_ON} | ${PARTIAL_ON}
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
    ).toEqual(And16(x, y));
  });

  it.each`
    x             | y
    ${ALL_OFF}    | ${ALL_OFF}
    ${ALL_OFF}    | ${ALL_ON}
    ${ALL_OFF}    | ${PARTIAL_ON}
    ${ALL_ON}     | ${ALL_OFF}
    ${ALL_ON}     | ${ALL_ON}
    ${ALL_ON}     | ${PARTIAL_ON}
    ${PARTIAL_ON} | ${ALL_OFF}
    ${PARTIAL_ON} | ${ALL_ON}
    ${PARTIAL_ON} | ${PARTIAL_ON}
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
    ).toEqual(Or16(x, y));
  });
});
