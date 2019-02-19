const heapify = (heap, i, max) => {
  let index, leftChild, righChild;

  while (i < max) {
    index = i;
    leftChild = 2 * i + 1;
    righChild = leftChild + 1;

    if (leftChild < max && heap[leftChild] > heap[index]) index = leftChild;
    if (righChild < max && heap[righChild] > heap[index]) index = righChild;
    if (index == i) return;
    swap(heap, i, index);
    i = index;
  }
};

const swap = (array, firstItemIndex, lastItemIndex) => {
  let tmp = array[firstItemIndex];
  array[firstItemIndex] = array[lastItemIndex];
  array[lastItemIndex] = tmp;
};

const buildMaxHeap = array => {
  let i;
  i = array.length / 2 - 1;
  i = Math.floor(i);

  while (i >= 0) {
    heapify(array, i, array.length);
    i -= 1;
  }
  return array;
};

const heapSort = array => {
  buildMaxHeap(array);

  lastElement = array.length - 1;

  while (lastElement > 0) {
    swap(array, 0, lastElement);
    heapify(array, 0, lastElement);
    lastElement -= 1;
  }
  return array;
};

module.exports = heapSort;
