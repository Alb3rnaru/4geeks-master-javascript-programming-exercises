// Write your function here

function select(arr, obj){
    let newObject = {};
    for(let property of arr){
        if(obj[property] != null){
            newObject[property] = obj[property];
        }
    }
    return newObject;
}

var arr = ['a', 'c', 'e'];
var obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};
var output = select(arr, obj);
console.log(output);