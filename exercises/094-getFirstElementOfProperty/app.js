// Write your function here

function getFirstElementOfProperty(obj, key){
    let arrayOfObject = obj[key];
    
    if (arrayOfObject == [] || !(Array.isArray(arrayOfObject))){
        return undefined;
    } else {
        return arrayOfObject[0];
    }
}

var obj = {
    key: [1, 2, 4]
  };
  var output = getFirstElementOfProperty(obj, 'key');
  console.log(output);