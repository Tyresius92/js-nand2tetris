import { Bit } from './types';

const { ON, OFF } = Bit;

// For the purposes of this course, Nand is considered foundational,
// so I can implement it however I want
// All other functions MUST be implemented as functions of Nand
// and functions built on Nand
const Nand = (a: Bit, b: Bit): Bit => (a === ON && b === ON ? OFF : ON);

export default Nand;
