# Dynamic Programming

- Optimization technique
- Cache values to avoid repeated calculations
- Optimal substructure (tends to be recursive)
- Overlapping subproblems (e.g. makeChange will always have repeated calculations,
  whereas mergeSort will always be different).

### Methods

1. **Top-Down Recursive:** start from the end result then break into smaller pieces,
   cache in case you repeat a previously calculated value.
2. **Bottom-Up Iterative:** Translate recusion into an iterative solution starting
   from the simplest problem.
