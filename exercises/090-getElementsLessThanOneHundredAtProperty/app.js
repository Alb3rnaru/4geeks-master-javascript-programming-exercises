// Write your function here

function getElementsLessThan100AtProperty(obj, key){
    let newArray = [];

    if (!(Array.isArray(obj[key]) || obj[key].length == 0)){
        return [];
    } else {
        for (let number of obj[key]){
            if (number < 100){
                newArray.push(number);
            }
        }
    }
    return newArray;
}


var obj = {
    key: [1000, 20, 50, 500]
  };
  var output = getElementsLessThan100AtProperty(obj, 'key');
  console.log(output);