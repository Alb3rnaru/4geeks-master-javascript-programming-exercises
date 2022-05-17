var obj = {
 key: ['Jamil', 'Albrey']
};
function getElementOfArrayProperty(obj, key, index) {
    // your code here
    let arrayOfObject = obj[key];
    let smallest = 1000000000;
    if (arrayOfObject == [] || !(Array.isArray(arrayOfObject))){
        return undefined;
    } else {
        return arrayOfObject[index];
    }
}

var output = getElementOfArrayProperty(obj, 'key', 0); 
console.log(output);