# Call Stack Walkthrough

1. Push the called function onto stack
2. Execute function body

**until...**

- another function is called:
  - Pause the current execution and start at step 1.
- a return is hit:
  - Pop the current function off the stack
  - Resume executing previous function. 
