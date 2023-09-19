// Crea una función que reciba una cantidad numérica y regrese el IVA de esta cantidad

function calculateIVA(amount) {
    if (isNaN(parseFloat(amount))) {
        throw new Error('Invalid amount');
    }
    return amount * 0.16;
}

// const amount1 = 100;
// const amount2 = 200;
// const amount3 = 0;
// const result1 = calculateIVA(amount1);
// const result2 = calculateIVA(amount2);
// const result3 = calculateIVA(amount3);

// console.log(result1);
// console.log(result2);
// console.log(result3);

export default calculateIVA;
