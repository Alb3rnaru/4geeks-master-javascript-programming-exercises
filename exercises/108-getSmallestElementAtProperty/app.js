var obj = {
  key: []
};
function getSmallestElementAtProperty(obj, key) {
    // your code here
    let arrayOfObject = obj[key];
    let smallest = 1000000000;
    if (arrayOfObject == [] || !(Array.isArray(arrayOfObject))){
        return [];
    } else {
        for (let number of arrayOfObject) {
            if (number < smallest){
                smallest = number;
            }
        }
    }
    if (smallest == 1000000000){
      return [];
    }
    return smallest;
}
var output = getSmallestElementAtProperty(obj, 'key');
console.log(output); // --> 1