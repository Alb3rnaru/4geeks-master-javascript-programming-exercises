function search(array, value) {
  // your code here
  let start = 0;
  let end = array.length -1;
  while (start <= end) {
    let middle = Math.floor((start + end) / 2);

    if (array[middle] === value) {
        // found the key
        return middle;
    } else if (array[middle] < value) {
        // continue searching to the right
        start = middle + 1;
    } else {
        // search searching to the left
        end = middle - 1;
    }
  }
  return null;
}

var arr = [1, 3, 16, 22, 31, 33, 34]
console.log(search(arr, 30)); // => 4