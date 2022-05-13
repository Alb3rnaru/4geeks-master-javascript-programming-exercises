function removeArrayValues(obj) {
    // your code here
    for (let property in obj) {
        if (Array.isArray(obj[property])){
            delete obj[property];;
        }
    }
    return obj;
}