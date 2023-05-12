const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(num_array) {
	let sum = 0;
  for (let i = 0; i < num_array.length; i++){
    sum += num_array[i];
  }
  return sum;
};

const multiply = function(num_array) {
  let sum = num_array[0];
  for (let i = 1; i < num_array.length; i++){
    sum *= num_array[i];
  }
  return sum;
};

const power = function(num1, pow) {
	return num1 ** pow;
};

const factorial = function(num) {
  if (num <= 0){
    return 1;
  }
  return num * factorial(num - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
