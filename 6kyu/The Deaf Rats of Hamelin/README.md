# [The Deaf Rats of Hamelin](https://www.codewars.com/kata/the-deaf-rats-of-hamelin)

## Story 
The Pied Piper has been enlisted to play his magical tune and coax all the rats out of town.

But some of the rats are deaf and are going the wrong way!

## Kata Task 
How many deaf rats are there?

##Legend
`P` = The Pied Piper
`O~` = Rat going left
`~O` = Rat going right

## Example
1. ~O~O~O~O P has 0 deaf rats
2. P O~ O~ ~O O~ has 1 deaf rat
3. ~O~O~O~OP~O~OO~ has 2 deaf rats

----------------------------------------------------------
## Solution
```js
const countDeafRats = town => {
 const [ left, right ] = town.split('P');
 const newRatChain = left + right.split('').reverse().join('');
 const matches = (newRatChain.match(/O~|~O/gi)||[]).filter(rat=> rat === 'O~');
 return matches.length;
}
```