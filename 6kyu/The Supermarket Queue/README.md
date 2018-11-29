# [The Supermarket Queue](https://www.codewars.com/kata/the-supermarket-queue)

There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate 
the total time required for all the customers to check out!

The function has two input variables:

customers: an array (list in python) of positive integers representing the queue. Each integer represents a 
  customer, and its value is the amount of time they require to check out.
n: a positive integer, the number of checkout tills.
The function should return an integer, the total time required.

EDIT: A lot of people have been confused in the comments. To try to prevent any more confusion:

There is only ONE queue, and
The order of the queue NEVER changes, and
Assume that the front person in the queue (i.e. the first element in the array/list) proceeds to a till as soon 
as it becomes free.
The diagram on the wiki page I linked to at the bottom of the description may be useful.
So, for example:

```js
queueTime([5,3,4], 1)
// should return 12
// because when n=1, the total time is just the sum of the times

queueTime([10,2,3,3], 2)
// should return 10
// because here n=2 and the 2nd, 3rd, and 4th people in the 
// queue finish before the 1st person has finished.

queueTime([2,3,10], 2)
// should return 12
```

N.B. You should assume that all the test input will be valid, as specified above.

P.S. The situation in this kata can be likened to the more-computer-science-related idea of a thread pool, 
with relation to running multiple processes at the same time: https://en.wikipedia.org/wiki/Thread_pool

------------------------------------------------------------------------------
## SOLUTION
```js
const queueTime = (customers, n) => {
  let registers = [];

  for (let i = 0; i < n; i++) registers.push(0);

  while (customers.length > 0) {
    let next = registers.indexOf(Math.min.apply(null, registers));
    registers[next] += customers.shift();
  }
  return Math.max.apply(null, registers);
}
```

### NOTES:

#### Steps:
1. Get it visualized, for instance `queueTime([10,2,3,3], 2)`: 

|  tills   |     |     |     |     | total |
|:--------:|-----|-----|-----|-----|-------|
| till 0   | 10  |  -  |  -  |  -  |  10   |
| till 1   | 2   |  3  |  2  |  -  |  8    |
| progress |(10) | (5) | (8) |  -  |  10   |

2. Need to loop through and apply the next number to a queue while keeping track of 
the amount of time taken by other customers in other queues. Until the number is 
reached for a certain queue (take the 10 in the example). 

3. `n` is given as an integer; however, we need to break it into an array based on its 
quantity. 
I made an empty array then used a for loop to push the numbers into it:
```js
let tills = [];
for (let i = 1; i <= n; i++) tills.push(0)
```
4. Go through and implement the table layout in code. I used `Math.min.apply()` so that
it could hit the next available with the corresponding time requirements then put the 
person into the next available slot (`registers[next] += customers.shift()`). 
5. Finally, we need to calculate the maximum time taken by the entire ordeal. I used 
the same method as finding the minimum in step 4 only found the maximum instead.
6. Test it out with `console.log` to make sure everything looks right and to see how 
it would tally up in realtime. 



#### Queues 
* Structure:
  * FIFO (first in, first out)
  * [Helpful explanation on YouTube](https://www.youtube.com/watch?v=bK7I79hcm08)
* **Making a queue:**
  ```js
function Queue() {
  collection = [];
  this.showCollection = () => {
    console.log(collection);
  }
  this.addQueue = (element) => 
    collection.push(element);
  
  this.deQueue = () => 
    collection.shift();
  
  this.frontOfLine = () =>
    collection[0];
  
  this.sizeOfLine = () => 
    collection.length;
  
  this.lineEmpty = () => 
    collection.length === 0;
}

let newQueue = new Queue;
newQueue.addQueue(1);
newQueue.addQueue(3);
newQueue.addQueue(6);
newQueue.addQueue(9);
newQueue.addQueue(14);
newQueue.showCollection(); // [1, 3, 6, 9]
newQueue.deQueue();
newQueue.showCollection(); // [3, 6, 9]
console.info(newQueue.frontOfLine()); // 3
console.info(newQueue.sizeOfLine()); // 4
console.info(newQueue.lineEmpty()) // false
  ```

Vocabulary: 
* `function.apply(thisArg, [argArray])`: method that calls a function with a given `this` value and `arguments`
provided as an array. 
  * `thisArg` (optional): in a non-strict mode function, `null` and `undefined` are replaced by the global object
  * `argArray` (optional): array-like object that specifies the arguments for the function. If no arguments provided,
  `null` or `undefined` should be placed for it.
Example: 
```js
const numbers = [5, 6, 2, 3, 8];

const max = Math.max.apply(null, numbers); 
console.log(max) // output: 8

// append array to another:
const array = ['a', 'b'];
const elements = [3, 4, 5];
array.push.apply(array, elements);
console.info(array); // ['a', 'b', 3, 4, 5];
```
