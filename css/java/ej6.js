function printName(params) {
    let hollowName = "Hello John"
    function inner(params) {
        return hollowName
    }
    return inner
}

console.log(printName()());