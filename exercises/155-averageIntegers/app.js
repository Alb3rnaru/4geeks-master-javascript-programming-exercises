function average(array_of_numbers) {
  // process array of numbers
  return (sum(array_of_numbers)/array_of_numbers.length);
}

function sum(numbers) {
    let result = 0;
    for (let number of numbers){
      result = result + number;
    }
    return result;
}