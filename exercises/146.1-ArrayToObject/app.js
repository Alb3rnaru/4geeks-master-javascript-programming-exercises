function transformFirstAndLast(array) {
  // your code here
  let result = {};
  result[array[0]] = array[array.length-1];
  return result;
}

let output = transformFirstAndLast(['Kevin', 'Bacon', 'Love', 'Hart', 'Costner', 'Spacey'])
console.log(output);