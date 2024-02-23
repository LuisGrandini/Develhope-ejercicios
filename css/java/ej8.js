function multiplyByTwo(params) {
    function inner() {
        let number = params * 2
        return number
    }
    return inner
}
    
console.log(multiplyByTwo(4)());