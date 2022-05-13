function getElementsAfter(array, n) {
  // your code here
  let result = [];
  for (i=n+1; i<array.length; i++){
    result.push(array[i]);
  }
  return result;
}
