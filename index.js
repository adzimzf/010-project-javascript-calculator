const inputA = prompt('input number-1?');
const inputB = prompt('input number-2?');
let choose = prompt('Your choose? 1.Addition 2.Substraction 3.Multiplication 4.Division');

switch (choose) {
    case '1':
        const resultAddition = parseInt(inputA) + parseInt(inputB);
        alert('Addition ' + inputA + '+' + inputB + '=' + resultAddition);
        break;
    case '2':
        const resultSubstraction = parseInt(inputA) - parseInt(inputB);
        alert('Substraction ' + inputA + '-' + inputB + '=' + resultSubstraction);
        break;
    case '3':
        const resultMultiplication = parseInt(inputA) * parseInt(inputB);
        alert('Multiplication ' + inputA + 'x' + inputB + '=' + resultMultiplication);
        break;
    case '4':
        const resultDivison = parseInt(inputA) / parseInt(inputB);
        alert('Substraction ' + inputA + '/' + inputB + '=' + resultDivison);
        break;
    default:
        alert('Please Try Again');
}


