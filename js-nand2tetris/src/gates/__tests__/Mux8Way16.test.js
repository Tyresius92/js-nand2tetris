import Bit from '../Bit';
import Mux8Way16 from '../Mux8Way16';

const { OFF, ON } = Bit;

describe('Mux8Way16', () => {
  describe('Basic selection tests', () => {
    const a = [
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
    const b = [
      ON,
      OFF,
      ON,
      OFF,
      ON,
      OFF,
      ON,
      OFF,
      ON,
      OFF,
      ON,
      OFF,
      ON,
      OFF,
      ON,
      OFF,
    ];
    const c = [
      OFF,
      ON,
      OFF,
      ON,
      OFF,
      ON,
      OFF,
      ON,
      OFF,
      ON,
      OFF,
      ON,
      OFF,
      ON,
      OFF,
      ON,
    ];
    const d = [
      OFF,
      OFF,
      ON,
      ON,
      OFF,
      OFF,
      ON,
      ON,
      OFF,
      OFF,
      ON,
      ON,
      OFF,
      OFF,
      ON,
      ON,
    ];
    const e = [
      ON,
      ON,
      OFF,
      OFF,
      ON,
      ON,
      OFF,
      OFF,
      ON,
      ON,
      OFF,
      OFF,
      ON,
      ON,
      OFF,
      OFF,
    ];
    const f = [
      OFF,
      OFF,
      OFF,
      OFF,
      ON,
      ON,
      ON,
      ON,
      OFF,
      OFF,
      OFF,
      OFF,
      ON,
      ON,
      ON,
      ON,
    ];
    const g = [
      ON,
      ON,
      ON,
      ON,
      OFF,
      OFF,
      OFF,
      OFF,
      ON,
      ON,
      ON,
      ON,
      OFF,
      OFF,
      OFF,
      OFF,
    ];
    const h = [ON, ON, ON, ON, ON, ON, ON, ON, ON, ON, ON, ON, ON, ON, ON, ON];

    it('selects a if sel[0] = OFF and sel[1] = OFF and sel[2] = OFF', () => {
      expect(Mux8Way16(a, b, c, d, e, f, g, h, [OFF, OFF, OFF])).toEqual(a);
    });

    // DON'T FORGET THAT sel IS NUMBERED RIGHT TO LEFT!!!
    it('selects b if sel[0] = ON and sel[1] = OFF and sel[2] = OFF', () => {
      expect(Mux8Way16(a, b, c, d, e, f, g, h, [OFF, OFF, ON])).toEqual(b);
    });

    it('selects c if sel[0] = OFF and sel[1] = ON and sel[2] = OFF', () => {
      expect(Mux8Way16(a, b, c, d, e, f, g, h, [OFF, ON, OFF])).toEqual(c);
    });

    it('selects d if sel[0] = ON and sel[1] = ON and sel[2] = OFF', () => {
      expect(Mux8Way16(a, b, c, d, e, f, g, h, [OFF, ON, ON])).toEqual(d);
    });

    it('selects e if sel[0] = OFF and sel[1] = OFF and sel[2] = ON', () => {
      expect(Mux8Way16(a, b, c, d, e, f, g, h, [ON, OFF, OFF])).toEqual(e);
    });

    it('selects f if sel[0] = ON and sel[1] = OFF and sel[2] = ON', () => {
      expect(Mux8Way16(a, b, c, d, e, f, g, h, [ON, OFF, ON])).toEqual(f);
    });

    it('selects g if sel[0] = OFF and sel[1] = ON and sel[2] = ON', () => {
      expect(Mux8Way16(a, b, c, d, e, f, g, h, [ON, ON, OFF])).toEqual(g);
    });

    it('selects h if sel[0] = ON and sel[1] = ON and sel[2] = ON', () => {
      expect(Mux8Way16(a, b, c, d, e, f, g, h, [ON, ON, ON])).toEqual(h);
    });

    describe('a weirdo test case just to be sure', () => {
      it('selects a if sel[0] and sel[1] are both OFF', () => {
        const a = [
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
        const b = [
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
        const c = [
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
        const d = [
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
        const e = [
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
        const f = [
          ON,
          ON,
          ON,
          OFF,
          ON,
          OFF,
          ON,
          OFF,
          ON,
          OFF,
          OFF,
          OFF,
          ON,
          ON,
          ON,
          ON,
        ];
        const g = [
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
        const h = [
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
        expect(Mux8Way16(a, b, c, d, e, f, g, h, [ON, OFF, ON])).toEqual(f);
      });
    });
  });
});
