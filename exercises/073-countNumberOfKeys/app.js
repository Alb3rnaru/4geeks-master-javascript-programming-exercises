function countNumberOfKeys(obj) {
    // your code here
    let NumberOfKeys = 0;
    for (let property in obj) {
        NumberOfKeys++;
    }
    return NumberOfKeys;
}