// Write your function here


function getNthElementOfProperty(obj, key, nth){
    let arrayOfObject = obj[key];
    
    if (arrayOfObject == [] || !(Array.isArray(arrayOfObject))){
        return undefined;
    } else {
        return arrayOfObject[nth];
    }
}

var obj = {
    key: [1, 2, 4]
  };
  var output = getNthElementOfProperty(obj, 'key', 1);
  console.log(output);