var obj = {
    name: 'Sam',
    age: 20
  }

function removeStringValues(obj) {
    // your code here
    for (let property in obj) {
        if (typeof(obj[property]) === typeof(" ")){
            delete obj[property];
        }
    }
    return obj;
}

removeStringValues(obj);
console.log(obj); // { age: 20 }