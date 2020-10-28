# `gates/`

This directory contains all gates implemented in the course. These range from the basic `Nand` gate all the way up to an `ArithmeticLogicUnit`, which handles both bitwise and arithmetic operations on a 16-bit bus. 

## Where do I begin?

Quickly take a peek into the `types/` directory, and look at `Bit.ts`. This is just what it sounds like, an enum that defines a bit. `Bit`s can be either `ON (1)` or `OFF (0)`. 

From there, start at the most elementary gates, in this order: `Nand`, `Not`, `And`, and `Or`. These will give you a bit of the flavor of how these are set up. 

After that, you can just start poking into some of the other files. I recommend taking a look at the unit tests in the `__tests__` directory. These have the added benefit of providing some documentation of the expected behavior. 

## TODOs

I want to organize these gates into subdirectories that group them roughly by type (`And` and `And16` together, `Mux` with `Mux4Way16` and the other variants together, and so on). That way I can document them more carefully. Will do this before I move onto project 3. 