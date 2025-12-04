const sum = (a,b) => {
    return a + b
}



let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}
function fromDollarToYen(dollars) {
    let euros = dollars / oneEuroIs.USD;  
    return euros * oneEuroIs.JPY;         
}


function fromYenToPound(yen) {
    let euros = yen / oneEuroIs.JPY;  
    return euros * oneEuroIs.GBP;      
}
// Solo un registro en consola para nosotros
console.log(sum(7,3))


module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }

