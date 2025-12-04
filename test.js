
const { sum } = require('./app.js');

// Comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});


test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})


test("One dolar should be 146,26 yen", function() {
    // Importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js');

    // Uso la función como debe ser usada
    const yen = fromDollarToYen(1);

    // Si 1 dolar son 1.07 euros, y 1 euro son 156,6 yen
    const expected = (1 / 1.07) * 156.5;

    // Hago mi comparación (la prueba)
    expect(fromDollarToYen(1)).toBeCloseTo(146.26); 
})

test("One yen should be 0.00556 pounds", function() {
    const { fromYenToPound } = require('./app.js');

    const pounds = fromYenToPound(1);
    const expected = (1 / 156.5) * 0.87;

    expect(fromYenToPound(1)).toBeCloseTo(0.00556);
});