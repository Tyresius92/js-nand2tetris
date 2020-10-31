import Bit from './Bit';
import { Bus16 } from './Bus';

interface AluResult {
  output: Bus16;
  zr: Bit;
  ng: Bit;
}

export default AluResult;
