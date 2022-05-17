var obj = {
  key: [2, 1, 5]
};

function getSquaredElementsAtProperty(obj, key) {
    // your code here
    let arrayOfObject = obj[key];
    let result = [];
    if (arrayOfObject == [] || !(Array.isArray(arrayOfObject))){
        return [];
    } else {
        for (let number of arrayOfObject) {
            result.push(number*number);
        }
    }
    return result;
}

var output = getSquaredElementsAtProperty(obj, 'key');
console.log(output); // --> [4, 1, 25]