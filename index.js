console.log('Greetings! It\'s a Version: 1.0.0');

function reversePolishNotation(value) {
  const operatorsValue = value.split(' ');
  const calculatedValues = [];

  operatorsValue.forEach(operatorValue => {
    if (!isNaN(operatorValue)) {
        calculatedValues.push(parseFloat(operatorValue));
    } else {
      const secondValue = calculatedValues.pop();
      const firstValue = calculatedValues.pop();

      switch (operatorValue) {
        case '+':
          calculatedValues.push(firstValue + secondValue);
          break;
        case '-':
          calculatedValues.push(firstValue - secondValue);
          break;
        case '*':
          calculatedValues.push(firstValue * secondValue);
          break;
        case '/':
          calculatedValues.push(firstValue / secondValue);
          break;
        default:
          throw new Error('Invalid operator');
      }
    }
  });

  return calculatedValues.pop();
}

module.exports = reversePolishNotation;
