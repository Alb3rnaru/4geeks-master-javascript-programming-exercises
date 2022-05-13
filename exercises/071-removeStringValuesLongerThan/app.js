function removeStringValuesLongerThan(num, obj) {
    // your code here
    for (let property in obj) {
        if (obj[property].length > num){
            delete obj[property];;
        }
    }
    return obj;
}
