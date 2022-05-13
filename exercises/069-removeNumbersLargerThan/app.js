var obj = {
    a: 8,
    b: 2,
    c: 'montana'
}
function removeNumbersLargerThan(num, obj) {
    // your code here
    for (let property in obj) {
        if (obj[property] > num){
            delete obj[property];;
        }
    }
    return obj;
}