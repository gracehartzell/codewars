# [Alphabet War](https://www.codewars.com/kata/alphabet-war/train/javascript)
Write a function that accepts `fight` string consists of only small letters and return who wins the fight. When the left side
wins return `Left side wins!`, when the right side wins return `Right side wins!`, in other case return `Let's fight again!`.
```js
// LEFT SIDE LETTERS AND POWER:
 w - 4
 p - 3 
 b - 2
 s - 1

 // RIGHT SIDE LETTERS AND POWER:
 m - 4
 q - 3 
 d - 2
 z - 1

```

**FIRST SOLUTION:**
(someone actually marked this as a best practice and I'm laughing)
```JS
function alphabetWar(fight) {
    let left = 0;
    let right = 0;

    for (i = 0; i < fight.length; i++) {
        (fight[i] === 'w')
        ? left += 4
        : (fight[i] === 'p')
        ? left += 3
        : (fight[i] === 'b')
        ? left += 2
        : (fight[i] === 's')
        ? left += 1
        : (fight[i] === 'm')
        ? right += 4
        : (fight[i] === 'q')
        ? right += 3
        : (fight[i] === 'd')
        ? right += 2
        : (fight[i] === 'z')
        ? right += 1
        : left += 0;
    }
    return (left > right) 
      ? `Left side wins!`
      : (left < right)
      ? `Right side wins!`
      : `Let's fight again!`
}

```
**Notes:**
* My first thought for getting the values to register is to put them in objects and then loop through the objects. That 
said, I'm not really sure that that would help get it done. 
* I ended up going with a really shoddy nested ternary and I'm not proud of myself for doing so but I couldn't think of 
anything else right now. After submitting my own, I looked at the other solutions and man do I feel dumb. So I'm going to
take that as a learning point for me to get a lot better with higher order functions because that would've saved so many
lines of code. On a separate hand, I think mine is a lot more readable than a lot of the HOF solutions... 
* Jokes aside, I redid it (no, I didn't use other people's solutions. I used my brain):
**BETTER SOLUTION:**
```js
function alphabetWar(fight) {
  const values = {'w': 4, 'p': 3, 'b': 2, 's': 1, 'm': -4, 'q': -3, 'd': -2, 'z': -1};
  let result = 0;
  fight.split('').map((t) => result += values[t] ? values[t] : 0  );
    return (result < 0 ? 'Right side wins!' : (result > 0) ? 'Left side wins!' : 'Let\'s fight again!' )
}
```
