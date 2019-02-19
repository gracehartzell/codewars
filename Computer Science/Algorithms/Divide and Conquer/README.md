# Divide and Conquer

Recursive technique for taking a larger problem and breaking it into subproblems
and doing work on subproblems to reach some goal.

## Recursive calls to a subset of a problem

0. Recognize base case
1. Divide: Break problem down during each call
2. Conquer: Do work on each subset
3. Combine solutions

### Example: Binary Search

- Search for a value in a **sorted** array by cutting the side of the search in half.
  **Logarithmic time: cutting dataset in half every time**
