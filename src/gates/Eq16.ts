import { Bit, Bus16 } from './types';
import Eq from './Eq';
import And from './And';

const { ON, OFF } = Bit;

const Eq16 = (a: Bus16, b: Bus16): Bit => {
  return And(
    Eq(a[0], b[0]),
    And(
      Eq(a[1], b[1]),
      And(
        Eq(a[2], b[2]),
        And(
          Eq(a[3], b[3]),
          And(
            Eq(a[4], b[4]),
            And(
              Eq(a[5], b[5]),
              And(
                Eq(a[6], b[6]),
                And(
                  Eq(a[7], b[7]),
                  And(
                    Eq(a[8], b[8]),
                    And(
                      Eq(a[9], b[9]),
                      And(
                        Eq(a[10], b[10]),
                        And(
                          Eq(a[11], b[11]),
                          And(
                            Eq(a[12], b[12]),
                            And(
                              Eq(a[13], b[13]),
                              And(Eq(a[14], b[14]), Eq(a[15], b[15]))
                            )
                          )
                        )
                      )
                    )
                  )
                )
              )
            )
          )
        )
      )
    )
  );
};

export default Eq16;
