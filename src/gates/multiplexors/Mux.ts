import { Bit } from '../types';
import And from '../and/And';
import Not from '../negation/Not';
import Or from '../or/Or';

// TODO: This might be getting a little confusing/hard to follow?
// Maybe use local vars?
const Mux = (a: Bit, b: Bit, sel: Bit): Bit =>
  Or(And(Not(sel), a), And(sel, b));

export default Mux;
