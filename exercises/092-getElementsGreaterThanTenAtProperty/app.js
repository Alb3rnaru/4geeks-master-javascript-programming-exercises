// Write your function here

function getElementsGreaterThan10AtProperty(obj, key){
    let newArray = [];

    if (!(Array.isArray(obj[key]) || obj[key].length == 0)){
        return [];
    } else {
        for (let number of obj[key]){
            if (number > 10){
                newArray.push(number);
            }
        }
    }
    return newArray;
}

var obj = {
    key: [1, 20, 30]
  };
  var output = getElementsGreaterThan10AtProperty(obj, 'key');
  console.log(output); 