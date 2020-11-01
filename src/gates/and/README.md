# `and/`

This directory contains all of the `And` gates. These gates provide various And-related functionality. 

## And.ts

This is a basic "And" logic gate. Provided two inputs, it returns ON if and only if both inputs are ON

## And16.ts

This is a slightly more complex version, but performs the same basic check. Given two registers of 16 Bits, Ands them together in bitwise fashion. (Which means that it ands together a[0] and b[0], then a[1] and b[1], and so on). 