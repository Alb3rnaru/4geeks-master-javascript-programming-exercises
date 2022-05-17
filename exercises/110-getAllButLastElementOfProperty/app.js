var obj = {
  key: [1, 2, 3]
};
function getAllButLastElementOfProperty(obj, key) {
    // your code here
    let arrayOfObject = obj[key];
    if (arrayOfObject == [] || !(Array.isArray(arrayOfObject))){
        return [];
    } else {
        arrayOfObject.pop();
    }
    return arrayOfObject;
}

var output = getAllButLastElementOfProperty(obj, 'key');
console.log(output); // --> [1,2]