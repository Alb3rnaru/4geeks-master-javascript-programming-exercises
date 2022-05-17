function isRotated(str1, str2) {
    // your code here
    for (let i=0; i<str1.length; i++){
        for (let j=0; j<str2.length; j++){
            if (str1[i] == str2[j]){
                if (j == 0){
                str2 = str2.substr(1, str2.length);
                } else {
                str2 = str2.substr(0, j-1) + str2.substr(j+1, str2.length);
                }
                break;
            }
        }
    }
    if (str2.length == 0){
        return true;
    } else return false;
    //return str1.substr(1, str1.length);
}

console.log(isRotated('hello world', 'orldhello w')) // => true
console.log(isRotated('hello world', 'omrel wp')) // => false