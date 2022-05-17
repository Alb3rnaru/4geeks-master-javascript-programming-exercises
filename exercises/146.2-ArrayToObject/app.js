function fromListToObject(arrays) {
  // your code here
  let result = {};
  for (let array of arrays) {
    result[array[0]] = array[1];
  }
  return result;
}

let output = fromListToObject([['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]]);
console.log(output) // => { make: 'Ford', model: 'Mustang', year: 1964 }