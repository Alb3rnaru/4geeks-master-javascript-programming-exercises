
var obj = {
  key: [1000, 11, 50, 17]
};

function getEvenElementsAtProperty(obj, key) {
    // your code here
    let arrayOfObject = obj[key];
    let result = [];
    if (arrayOfObject == [] || !(Array.isArray(arrayOfObject))){
        return [];
    } else {
        for (let number of arrayOfObject) {
            if (number%2 == 0){
                result.push(number);
            }
        }
    }
    return result;
}
var output = getEvenElementsAtProperty(obj, 'key');
console.log(output); // --> [1000, 50]