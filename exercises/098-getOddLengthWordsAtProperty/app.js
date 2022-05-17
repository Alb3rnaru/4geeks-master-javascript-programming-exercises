// Write your function here

function getOddLengthWordsAtProperty(obj, key){
    let arrayOfObject = obj[key];
    let result = [];
    if (arrayOfObject == [] || !(Array.isArray(arrayOfObject))){
        return [];
    } else {
        for (let word of arrayOfObject) {
            if (word.length%2 != 0){
                result.push(word);
            }
        }
    }
    return result;
}

var obj = {
    key: ['It', 'has', 'some', 'words']
};
  var output = getOddLengthWordsAtProperty(obj, 'key');
  console.log(output); 