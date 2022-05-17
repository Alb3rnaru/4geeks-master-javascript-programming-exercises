// Write your function here

function getLastElementOfProperty(obj, key){
    let arrayOfObject = obj[key];
    
    if (arrayOfObject == [] || !(Array.isArray(arrayOfObject))){
        return undefined;
    } else {
        return arrayOfObject[arrayOfObject.length-1];
    }
}

var obj = {
    key: [1, 2, 4]
  };
  var output = getLastElementOfProperty(obj, 'key');
  console.log(output);