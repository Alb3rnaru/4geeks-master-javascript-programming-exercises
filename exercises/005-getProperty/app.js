
function getProperty(obj, key) {
  // your code here
  console.log(obj[key]);
  if (obj[key] == '') {
    return undefined;
  } else {
    return obj[key];
  }
}