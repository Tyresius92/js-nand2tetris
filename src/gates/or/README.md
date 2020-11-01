# `or/`

This directory contains gates related to `Or` logic. 

## `Or.ts`

Simple `Or` logic. Returns `ON` if at least one of the input `Bit`s is `ON`. 

## `Or8Way.ts`

Slightly more complex - Returns `ON` if any one or more of the 8 input `Bit`s is `ON`.

## `Or16.ts`

Returns the `Or`ed value of two 16 `Bit` registers. `Or`s the first two bits together, then the next two, and so on. 

## `Xor.ts`

Returns `ON` if and only if exactly one of the input `Bit`s is `ON`. 