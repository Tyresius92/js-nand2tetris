# `gates/`

This directory contains all gates implemented in the course. These range from the basic `Nand` gate all the way up to an `ArithmeticLogicUnit`, which handles both bitwise and arithmetic operations on a 16-bit bus. 

## Where do I begin?

Quickly take a peek into the `types/` directory, and look at `Bit.ts`. This is just what it sounds like, an enum that defines a bit. `Bit`s can be either `ON (1)` or `OFF (0)`. 

From there, start at the most elementary of all the gates: `Nand`. This gate is considered "given" by the course, and everything else is built on top of it. 

Next up: `Not`, `And`, and `Or`. These will give you a bit of the flavor of how the various gates are set up. 

After that, you can just start poking into some of the other files. I recommend taking a look at the unit tests in the `__tests__` directory of each folder. These have the added benefit of providing some documentation of the expected behavior, aside from the READMEs. 

Finally, after all of that, take a look at the `ArithmeticLogicUnit`. This is kind of the centerpiece of everything. A single gate that takes in two inputs and a set of "option" bits, and outputs 1 of 18 potential calculations. Very fancy. 

Much of what comes later is built on top of the ALU. 

## `Nand.ts`

This is short for `Not And`. It returns the result of `And`ing together two inputs, then negating the result. For the purposes of this course, it is considered "given by god" or similar. 

## `ArithmeticLogicUnit.ts`

This handles a whole host of calculations, and is the result of a fair amount of work. It is the culmination of two projects. 

Full documentation of the inputs and outputs can be found in the unit tests, or on page 36-38 of [this document](https://b1391bd6-da3d-477d-8c01-38cdf774495a.filesusr.com/ugd/44046b_89c60703ebfc4bf39acef13bdc050f5d.pdf). 

A slightly less scary looking link is [this one](https://www.nand2tetris.org/project02), but it requires that you click through to `Chapter 2` on that page, which is just the thing I direct linked the first time. You do you.
