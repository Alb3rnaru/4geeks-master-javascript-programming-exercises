function getAverageOfElementsAtProperty(obj, key){
  let arrayOfKey = obj[key];
  let average = 0;
  if (!obj.hasOwnProperty(key) || arrayOfKey.length == 0){
      return 0;
  } else {
      for (let item of arrayOfKey){
          average = average + parseInt(item);
      }      
  }
  average = average / arrayOfKey.length;
  return average;
}

var obj = {
  key: [1, 2, 3]
};

//1, 2, 3
var output = getAverageOfElementsAtProperty(obj, 'key');
console.log(output);


