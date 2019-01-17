# Heap Sort

![](heap_sort.gif)

- Comparison-based technique based on binary heap data structure.
- Find maximum element and place at the end until sorted.
- Unstable

## Heap

- A binary tree with rules!
  - **Shape:** Must be a complete binary tree (no unbalanced grandchildren!)
  - **Order:** Must abide by the `heap-order property`. Of which there is either a maximum or a minimum heap.
    - **Max:** Root node is larger than all other nodes; parents must be larger than children
    - **Min:** Root node must be smaller than all other nodes; parents, smaller than children.

## Sorting Steps:

1. Build a max heap from all of the data (sometimes done as `buildMaxHeap()`)
2. Once sorted (largest value at root of heap, every parent > child), swap the largest value with the item at the end of the heap (bottom right-most value)
3. Re-sort the heap until the heap-order property is restored. Continue! 

### Big-O

**Time-Complexity:**

|                  |     Best      |         Worst |       Average |
| ---------------- | :-----------: | ------------: | ------------: |
| Time Complexity  | `O (n log n)` | `O (n log n)` | `O (n log n)` |
| Space Complexity |    `O (1)`    |               |

### Use Cases:

- Garbage collection

---

Similar to: selection sort

**SOURCES:**

- Vaidehi Joshi: [_Learning to Love Heaps_](https://medium.com/basecs/learning-to-love-heaps-cef2b273a238)
- Vaidehi Joshi: [_Heapify All The Things With Heap Sort_](https://medium.com/basecs/heapify-all-the-things-with-heap-sort-55ee1c93af82)
