function sumDigits(num) {
    // your code here
    let result = 0;
    let number = 0;
    num = num.toString();
    if (num[0] == '-'){
        number = -1 * parseInt(num[1]);
        result += number;
        for (let i=2; i<num.length; i++){
            result = result + parseInt(num[i]);
        }
    } else {
      for (let number of num){
        result = result + parseInt(number);
      }
    }
    return result;
}
var output = sumDigits(-316);
console.log(output); // --> 4

var output = sumDigits(1148);
console.log(output); // --> 24