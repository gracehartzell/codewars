# Merge Sort

- Divide and conquer algorithm
- Splits unsorted array in two, then continues until sorted using recursion
- It's easier to sort two smaller, sorted lists than a single massive unsorted.

## Sorting Steps:

1. **Divide:** break down the array into smaller pieces until each item is by itself.

- `1 list -> 2 lists -> 4 lists -> 8 lists`

2. **Conquer:** sort the smaller bits and start to recombine

- `8 (sorted) lists -> 4 lists -> 2 lists -> 1 sorted list`

### Big-O

**Time-Complexity:**

|                  |     Best      |         Worst |       Average |
| ---------------- | :-----------: | ------------: | ------------: |
| Time Complexity  | `O (n log n)` | `O (n log n)` | `O (n log n)` |
| Space Complexity |               |               |       `O (n)` |


