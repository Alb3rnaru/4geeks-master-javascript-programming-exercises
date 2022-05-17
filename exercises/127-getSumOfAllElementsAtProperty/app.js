var obj = {
    key: [4, 1, 8]
};

function getSumOfAllElementsAtProperty(obj, key) {
    // your code here
    let arrayOfKey = obj[key];
    let result = 0;
    if(!obj.hasOwnProperty(key) || arrayOfKey.length == 0 || !Array.isArray(arrayOfKey)){
        return 0;
    } else {
        for (let number of arrayOfKey){
         result += number;
        }
        return result;
    }
}
var output = getSumOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 13