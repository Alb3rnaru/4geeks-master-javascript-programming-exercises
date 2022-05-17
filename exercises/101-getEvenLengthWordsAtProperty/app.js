var obj = {
  key: ['a', 'long', 'game']
};
function getEvenLengthWordsAtProperty(obj, key) {
    // your code here

      let arrayOfObject = obj[key];
      let result = [];
      if (arrayOfObject == [] || !(Array.isArray(arrayOfObject))){
          return [];
      } else {
          for (let word of arrayOfObject) {
              if (word.length%2 == 0){
                  result.push(word);
              }
          }
      }
      return result;
}

var output = getEvenLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['long', 'game']