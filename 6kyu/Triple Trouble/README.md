# [Triple Trouble](https://www.codewars.com/kata/triple-trouble-1)

Write a function, `tripledouble(num1,num2)`, which takes numbers `num1` and `num2` and returns
`1` if there is a straight triple of a number at any place in `num1` and also a straight double 
of the same number in `num2`. If this isn't the case, return `0`.

**Examples**
```js
tripledouble(451999277, 41177722899) == 1 // num1 has straight triple 999s and 
                                          // num2 has straight double 99s

tripledouble(1222345, 12345) == 0 // num1 has straight triple 2s but num2 has only a single 2

tripledouble(12345, 12345) == 0

tripledouble(666789, 12345667) == 1
```

------------------------------------------------------------------------------
## SOLUTION
```js
const tripledouble = (num1, num2) => {
  for (let i = 0; i < 10; i++) {
    if (new RegExp(`${i}{3}`).test(num1) && new RegExp(`${i}{2}`).test(num2)) return 1;
  }
  return 0;
}
```

### NOTES:
* I do not like how the function name is not camelCase but I'll deal...

#### Steps:
1. Loop through first set of numbers (`num1`) and search for a triple number
  * With RegEx, this could be `/\d{3}/g`
  * I'm contemplating pushing the digit into an array to then compare to `num2`
2. Loop through second set of numbers {`num2`} and see if match with double of `num1` digit exists. 

---
Just kidding on all of that. I played around with it and the code became way too messy so I 
restarted it with a new plan:
1. Put it all inside of a `for loop` since we're looking for a matching number-- why not check
both numbers at once? 
2. Quick way to check for a sequence of characters that define a pattern? **RegExp**
3. Within the loop, `test` `if` there's a match with the `RegExp` on the first number. 
We also need to do the same thing only with the second number (changing the number of 
occurrences, of course). To make sure something passes with two conditions, we use `&&`.
4. Bust out of that loop since all we need to do with it is determine if the sequences
exist. If the conditions aren't met, we want to return `0`.

