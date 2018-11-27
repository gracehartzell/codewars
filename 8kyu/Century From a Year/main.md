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