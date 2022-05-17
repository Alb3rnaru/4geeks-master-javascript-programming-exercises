var obj = {
  key: [1, 2, 3, 4, 5]
};

function getOddElementsAtProperty(obj, key) {
    // your code here
    let arrayOfObject = obj[key];
    let result = [];
    if (arrayOfObject == [] || !(Array.isArray(arrayOfObject))){
        return [];
    } else {
        for (let number of arrayOfObject) {
            if (number%2 != 0){
                result.push(number);
            }
        }
    }
    return result;
}

var output = getOddElementsAtProperty(obj, 'key');
console.log(output); // --> [1, 3, 5]