// Write your solution in this file!
const employee = {
  name: "Sam",
  streetAddress: "11 Main Street",
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
  return Object.assign({}, employee, { [key]: value });
};
  
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;

  return employee;
};

function deleteFromEmployeeByKey(driver, key) {
  const newObj = object.assign({}, driver);
  delete newObj[key];
  return newObj;
};
  
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];

    return employee;
  };