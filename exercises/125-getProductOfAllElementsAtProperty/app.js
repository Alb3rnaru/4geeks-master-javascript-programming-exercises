var obj = {
  key: [1, 2, 3, 4]
};

function getProductOfAllElementsAtProperty(obj, key) {
    // your code here
    let arrayOfKey = obj[key];
    let result = 1;
    if (!obj.hasOwnProperty(key) || arrayOfKey.length == 0 || !Array.isArray(arrayOfKey)){
        return 0;
    } else {
        for (let item of arrayOfKey){
            result *= item;
        }      
    }

    return result;
}
var output = getProductOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 24