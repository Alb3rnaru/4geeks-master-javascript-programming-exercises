function getAllKeys(obj) {
  // your code here
  let result = [];
  for (let property in obj){
    result.push(property);
  }
  return result;
}

let output = getAllKeys({name: "Sam", age: 25, hasPets: true});
console.log(output); 