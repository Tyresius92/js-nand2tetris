# Nand2Tetris

This is my repository for the Nand2Tetris course, available [here](https://www.nand2tetris.org/).

### What the heck is Nand2Tetris?

This course takes you from a single Nand (short for "not and") gate, and brings you to a working Tetris game. In this way, you learn how a computer works, all the way from 1s and 0s.

Since I am not using the course provided code, I've implemented a Nand gate in software [here](https://github.com/Tyresius92/nand2tetris/blob/main/js-nand2tetris/src/gates/Nand.ts).

From there, I built a [Not gate](https://github.com/Tyresius92/nand2tetris/blob/main/js-nand2tetris/src/gates/Not.ts), followed by an [And gate](https://github.com/Tyresius92/nand2tetris/blob/main/js-nand2tetris/src/gates/And.ts).

You proceed, building more and more abstractions on top of the things you've already built, until you have a working general purpose computer.

## Repo Structure

### Provided Code

The standard course materials are provided in the `projects` and `tools` directories. I personally did not use any of these materials as I progressed through the course.

### My Code

Instead, all of my code exists in the `js-nand2tetris` directory.

I chose to implement all assignments in TypeScript, because I felt I already had a reasonable grasp on many of the fundamentals being taught, but also just because I wanted to learn TypeScript.

Each sub-directory within `js-nand2tetris` contains an additional `README.md` file, detailing what exists there, good entry points to explore the code, and generally helping you get oriented quickly.

To ensure correctness, I have practiced Test Driven Development, only writing production code when I have a failing unit test.
