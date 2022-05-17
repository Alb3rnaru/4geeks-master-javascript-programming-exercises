function isIsogram(text) {
  // add each char to a set
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
  // note: a set drops dup values
  // thus, to see if all the chars were unique,
  // check length of text and the size of the set
  text = text.toLowerCase();
  while (text.length != 0){
    let letterHelp = text[0];
    if (text.length == 1){
      return true;
    } else {
      for (let i=1; i<text.length; i++){
        if (letterHelp == text[i]){
          return false;
        }
      }
      text = text.substr(1, text.length);
    }
  }
}

console.log(isIsogram("Camile")) // => true
console.log(isIsogram("Camille")) // => false