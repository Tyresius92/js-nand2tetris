import Bit from '../Bit';
import Mux4Way16 from '../Mux4Way16';

const { OFF, ON } = Bit;

describe('Mux4Way16', () => {
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
    const d = [ON, ON, ON, ON, ON, ON, ON, ON, ON, ON, ON, ON, ON, ON, ON, ON];

    it('selects a if sel[0] and sel[1] are both OFF', () => {
      expect(Mux4Way16(a, b, c, d, [OFF, OFF])).toEqual(a);
    });

    it('selects b if sel[0] = ON and sel[1] = OFF', () => {
      expect(Mux4Way16(a, b, c, d, [OFF, ON])).toEqual(b);
    });

    it('selects c if sel[0] = OFF and sel[1] = ON', () => {
      expect(Mux4Way16(a, b, c, d, [ON, OFF])).toEqual(c);
    });

    it('selects d if sel[0] = ON and sel[1] = ON', () => {
      expect(Mux4Way16(a, b, c, d, [ON, ON])).toEqual(d);
    });
  });

  describe('a weirdo test case just to be sure', () => {
    it('selects a if sel[0] and sel[1] are both OFF', () => {
      const a = [
        ON,
        ON,
        ON,
        OFF,
        ON,
        ON,
        OFF,
        OFF,
        ON,
        OFF,
        ON,
        OFF,
        ON,
        OFF,
        OFF,
        ON,
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
      expect(Mux4Way16(a, b, c, d, [OFF, OFF])).toEqual(a);
    });
  });
});
