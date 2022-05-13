function computePower(num, exponent) {
  // your code here
  let result = num;
  for (i=1; i<exponent; i++){
    result *= num;
  }
  return result;
}