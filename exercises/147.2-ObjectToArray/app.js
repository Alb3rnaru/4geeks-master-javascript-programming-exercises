function listAllValues(obj) {
  // your code here
  let result = [];
  for (let property in obj){
    result.push(obj[property]);
  }
  return result;
}

let output = listAllValues({name: "Krysten", age: 33, hasPets: false});
console.log(output);