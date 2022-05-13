var obj1 = {
    a: 1,
    b: 2
};
var obj2 = {
    b: 4,
    c: 3
};

function extend(obj1, obj2) {
    // your code here
    for (let property in obj2){
        if (obj1.hasOwnProperty(property)){
            continue;
        } else {
            obj1[property] = obj2[property];
        }
    }
    return obj1;
}
