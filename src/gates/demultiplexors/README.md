# `demultiplexors/`

This directory contains a number of demultiplexor gates. A demultiplexor takes in a single value, and one or more "selector" bits. Based on the value of the selection bit(s), it outputs the input to a particular output path. 

## `Dmux.ts`

The most basic form of the demultiplexor. Given an input `in` and a selection bit `sel`, sends input to output `a` if `sel` is `OFF`, and to `b` if `sel` is `ON`

## `DMux4Way.ts`

Performs a similar job to `DMux`, but takes in two selection bits, and could output to one of four channels. 

## `DMux8Way.ts`

You guessed it - this does the same thing. Just 3 input bits, and 8 possible output bits. 