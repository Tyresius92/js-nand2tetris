import { Bit, Bus8 } from './types';
import Or from './Or';

const Or8Way = (input: Bus8): Bit =>
  Or(
    input[0],
    Or(
      input[1],
      Or(
        input[2],
        Or(input[3], Or(input[4], Or(input[5], Or(input[6], input[7]))))
      )
    )
  );

export default Or8Way;
