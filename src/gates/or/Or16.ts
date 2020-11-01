import { Bus16 } from '../types';
import Or from './Or';

const Or16 = (a: Bus16, b: Bus16): Bus16 => [
  Or(a[0], b[0]),
  Or(a[1], b[1]),
  Or(a[2], b[2]),
  Or(a[3], b[3]),
  Or(a[4], b[4]),
  Or(a[5], b[5]),
  Or(a[6], b[6]),
  Or(a[7], b[7]),
  Or(a[8], b[8]),
  Or(a[9], b[9]),
  Or(a[10], b[10]),
  Or(a[11], b[11]),
  Or(a[12], b[12]),
  Or(a[13], b[13]),
  Or(a[14], b[14]),
  Or(a[15], b[15]),
];

export default Or16;
