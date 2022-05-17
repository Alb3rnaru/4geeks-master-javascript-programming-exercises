function transformEmployeeData(employees) {
  // your code here
  let result = [];
  let dataOfEmployee = {};
  for (let employee of employees) {
    for (let data of employee){
      dataOfEmployee[data[0]] = data[1]; 
    }
    result.push(dataOfEmployee);
    dataOfEmployee = [];
  }
  return result;
}

// let output = transformEmployeeData([[['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']]]);
// console.log(output);

output = transformEmployeeData([[['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk'], ['tshirtSize', 'M']],[['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']]]);
console.log(output);