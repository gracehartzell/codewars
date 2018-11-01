### Pillars
There are pillars near the road. The distance between the pillars is the same and the width of the pillars is the same. Your function accepts three arguments:

1. number of pillars (≥ 1);
2. distance between pillars (10 - 30 meters);
3. width of the pillar (10 - 50 centimeters).

Calculate the distance between the first and the last pillar in centimeters (without the width of the first and last pillar).

**Solution**
```js

```


### Basic Mathematical Operations
Your task is to create a function that does four basic mathematical operations.

The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation.

**Solution**
```js
function basicOp(operation, value1, value2) {
  return eval(`${value1} ${operation} ${value2}`);
}
```

### Century From Year
The first century spans from the year 1 up to and including the year 100, The second - from the year 101 up to and including the year 200, etc.

Task :
Given a year, return the century it is in.

**Solution**
```js
function century(year) {
    if (year % 100 === 0) {
        return ((Math.floor(year / 100) * 100) / 100);
    }
    else {
    return ((Math.floor(year / 100) * 100) / 100) + 1;
    }
  };
```