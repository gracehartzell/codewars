const callMeInfinite = () => {
  callMeInfinite();
  callMeInfinite();
  callMeInfinite("anytime");
};

// callMeInfinite(); // function gets pushed to call stack

/*
CALL STACK:
  * line 7 gets pushed to CS 
  * Execute function body
  * Line 2 = another function call => Push that function to CS 
  * Execute function body...
  * Line 2 --> Stuck in infinite loop because there's never a return
*/

let tracker = 0;
const callMe = (arg) => {
  tracker++;
  if (tracker === 3) {
    tracker = 0;
    return `loops! ARG: ${arg}`;
  }
  return callMe("anytime");
};

console.log(callMe());

/*
FIRST CALL: 
* function put on call stack:

  let tracker = 0; 
  const callMe = (arg) => {         // arg: "undefined" (hasn't hit the "anytime" arg)
    tracker++; // tracker now = 1
    if (tracker === 3) {            // condition is currently false
      tracker = 0;
      return `loops! ARG: ${arg}`; 
    }
    return callMe("anytime");
  };

SECOND TIME:

  let tracker = 0;
  const callMe = (arg) => {         // arg now = "anytime"
    tracker++;                      // tracker now = 2
    if (tracker === 3) {            // still false ==> called again
      tracker = 0;
      return `loops! ARG: ${arg}`;
    }
    return callMe("anytime");
  };

THIRD TIME:

  let tracker = 0;                  // tracker = 2 
  const callMe = (arg) => {         // arg still = "anytime"
    tracker++;                      // tracker finally = 3
    if (tracker === 3) {
      tracker = 0;
      return `loops! ARG: ${arg}`;  // will now get returned
    }
    return callMe("anytime");
  };


*/