const input = [8, 6, 7, 5, 3, 0, 9];
const strs = ['Eren', 'Mikasa', 'Armin', 'Annie'];

const forEachLoop = (arr, cb) => {
  for (let i = 0; i < arr.length; i++) {
    cb(arr[i]);
  };
  return arr;
};
