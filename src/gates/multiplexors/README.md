# `multiplexors/`

This directory contains several multiplexors. A multiplexor takes in 2 or more inputs, and selects between them based on one or more selection bits. 

## `Mux.ts`

The most basic form of the multiplexor. Takes in 2 `Bit`s, and outputs one of them based on the value of the selection bit. 

## `Mux16.ts`

Similar to the basic Mux - it just takes in two 16 `Bit` registers instead of 2 `Bit`s

## `Mux4Way16.ts`

This guy takes in four 16 bit registers and outputs one of them, based on the selection bits. 

## `Mux8Way16.ts`

Same song, different verse. Eight 16 bit registers, three selection `Bit`s, and one output. 