# Bumps in the Road:

Your car is old, it breaks easily. The shock absorbers are gone and you think it can handle about 15 more bumps 
before it dies totally.

Unfortunately for you, your drive is very bumpy! Given a string showing either flat road ("_") or bumps ("n"), 
work out if you make it home safely. 15 bumps or under, return "Woohoo!", over 15 bumps return "Car Dead".

### SOLUTION
``` javascript
    let xCount = 0;
    let letter = x.indexOf('n');

    while ( letter !== -1) {
        xCount++
        letter = x.indexOf('n', letter + 1);
    }

    if (xCount > 15) {
        return "Car Dead"
    }
    else {
        return "Woohoo!"
    }
}
```

I passed all tests on the first try; however, I did have some trouble remembering the process for finding the 
number of times a character appears in a string and did refer to notes I'd taken previously. My goal is to come 
back to this later and complete it in one line.
