function joinElements(array, joinString) {
  function recurse(index, resultSoFar) {
    resultSoFar += array[index];

    if (index === array.length - 1) {
      return resultSoFar;
    } else {
      return recurse(index + 1, resultSoFar + joinString);
    }
  }

  return recurse(0, "");
}

console.log(joinElements(["s", "cr", "t cod", " :) :)"], "e"));

/*
// variable joinElements() declared in global scope:

FIRST CALL:
 * (0, "") get passed in first

  function joinElements(array, joinString) {                     // args: (0, "")   
    function recurse(index, resultSoFar) {                           
      resultSoFar += array[index];                               // look into parent scope for first value ("s")

      if (index === array.length - 1) {                          // keep going until base case is met, i.e. end of array
        return resultSoFar;
      } else {                                                   // go into recursive case since base isn't met
        return recurse(index + 1, resultSoFar + joinString);     // NEW PUSH TO CALL STACK! args: (1, "se") (from parent: joinString = "e")
      }
    }

    return recurse(0, "");
  }

SECOND CALL:

  function recurse(index, resultSoFar) {                         // args: (1, "se")
    resultSoFar += array[index];                                 // look into parent scope for 2nd value ("secr")

    if (index === array.length - 1) {                            // keep going until base case is met, i.e. end of array
      return resultSoFar;
    } else {                                                     // Back into recursive case
      return recurse(index + 1, resultSoFar + joinString);       // NEW PUSH TO CALL STACK! args: (2, "secre")
    }
  }

...until end of array; finally returns: "​​​​​secret code :) :)​​​​​" 


******** Accumulation happens because we're accumulating values (adding things together, i.e. resultSoFar + joinString)
******** then passing accumulated values down into the recursion each time

*/
