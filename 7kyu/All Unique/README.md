# All unique

Write a program to determine if a string contains all unique characters. Return true if it does and false otherwise. 
The string may contain any of the 128 ASCII characters.

**FIRST SOLUTION (11 SEPT 2018):**
```js
function hasUniqueChars(str){
    
    for(let i=0; i < str.length; i++){
        let temp = str[i];

        for(let j = i+1; j <= str.length - 1; j++) {
            if (temp === str[j]) {
                return false;
            }
        };  
    };            
    return true;
};
```
After looking at other solutions, I decided to look into *Array.prototype.every()* since that is frequently used and 
I'm not familiar with it. I plan to do my next solution for this problem using that method (when I fully understand it, 
of course.)
