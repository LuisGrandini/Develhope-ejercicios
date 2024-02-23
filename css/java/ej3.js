// let sum = (a,b) => {return a + b};
// let subtract = (a,b) => {return a - b};
//let multiply = (a,b) => {return a * b};
//let divide = (a,b) => {return a / b};
//let log = (value) => {console.log(value);};

let sum = (a,b) => {
    let suma = a+b;
    return suma
}

let subtract = (a,b) => {
    let resta = a-b
    return resta
}

let multiply = (a,b) => {
    let multiplicar = a * b;
    return multiplicar
}

let divide = (a,b) => {
    let dividir = a / b;
    return dividir
}

let log = (value) => {
    let imprimir = console.log(value);
    return imprimir
}
//log(divide(subtract(multiply(sum(2, 4),sum(5,2)),2),5))

log(divide(subtract(multiply(sum(2,4),sum(5,2)),2),5))