# Remove Duplicate Words

Your task is to remove all duplicate words from string, leaving only single (first) words entries.

### SOLUTION
```js
function removeDuplicateWords(str) {
    let strArray = str.split(' ');
    let filteredArray = [];

    for (let i = 0; i < strArray.length; i++) {
        if(filteredArray.indexOf(strArray[i]) === -1) {
            filteredArray.push(strArray[i]);
        }
    };
   
    return filteredArray.join(' ');
};
``` 

I didn't have too much difficulty with this one but I know that the way I did it is very rudimentary. When I looked 
through other solutions (when they became unlocked after submitting my final solution), the majority of the solutions 
used methods that I'm not familiar with. 

