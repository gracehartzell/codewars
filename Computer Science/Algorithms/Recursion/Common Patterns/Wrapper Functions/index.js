// Using CLOSURE WITH RECURSION
const wrapperFnLoop = (start, end) => {
  function recurse(i) {
    console.log(`looping from ${start} to ${end}`);

    if (i < end) {
      recurse(i + 1);
    }
  }
  recurse(start);
};
wrapperFnLoop(1, 3);

// Regular recursion: 
const memoFnLoop = (i, end) => {
  console.log(`looping from ${i} to ${end}`);

  if (i < end) {
    memoFnLoop(i + 1, end);
  }
};

memoFnLoop(1, 3);
