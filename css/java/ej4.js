let suma = 0
function sumUntil(params) {
    for (let index = 1; index <= params; index++) {
        
        suma = suma + index
    }
    return suma
}

console.log(sumUntil(5));