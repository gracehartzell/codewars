const callMe = () => {
  callMe();
  callMe();
  callMe("anytime");
};

callMe(); // function gets pushed to call stack


/*
CALL STACK:
  * line 7 gets pushed to CS 
  * Execute function body
  * Line 2 = another function call => Push that function to CS 
  * Execute function body...
  * Line 2 --> Stuck in infinite loop because there's never a return
*/