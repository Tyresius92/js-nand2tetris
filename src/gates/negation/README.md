# `negation/`

The files in this directory relate to negation, either bitwise or algebraic. 

## `Not.ts`

This is bit-wise negation on a single bit. If the input is `ON`, then output is `OFF`, and vice versa. 

## `Not16.ts`

Similar to `Not`, but works on a 16 bit register. Each bit in the register is negated individually. 0110 becomes 1001. 

## `TwosComplement.ts`

Given any 16 bit register, gives back the TwosComplement representation. If it gets the binary value of 2, it returns the binary value of -2, in a Twos Complement system. 

## `IsNeg16.ts`

Returns whether or not a number in a 16 bit register is negative, using a Twos Complement system. In other words, it returns `ON` if the first bit of the register is `ON`, and `OFF` otherwise. 