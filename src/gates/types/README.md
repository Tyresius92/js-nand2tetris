# `types/`

This directory contains a few shared base types. 

### Bit

This is a representation of a bit. 1/0, on/off, active/inactive, true/false; Take your pick. 

I've chosen to use `ON`/`OFF` in this representation. 

### Bus

This is an array of 16 `Bit`s

### AdderResult

This is a shared interface type for the Adder gates. Most of the simpler gates return `Bit`s or arrays of `Bit`s, but the adders need to return `Bit`s that represent specific things, and returning an array with a "the first element is the sum, the second is the carry" convention seemed less clean. 

### AluOptions

This is part of the input arguments to the Arithmetic Logic Unit.

### AluResult

This defines the output shape of the Arithmetic Logic Unit. 



