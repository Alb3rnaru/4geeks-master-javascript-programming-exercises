function convertObjectToList(obj) {
  // your code here
  let result = [];
  let help = [];
  for (let property in obj){
    help[0] = property;
    help[1] = obj[property];
    result.push(help);
    help = [];
  }
  return result;
}

let output = convertObjectToList({name: "Holly", age: 35, role: "producer"});
console.log(output);