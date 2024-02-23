function printName(params) {
    let hollowName = "Hello John"
    function inner(params) {
        setTimeout(() => {
            console.log(hollowName);
        }, 1000);
        return hollowName
    }
    return inner
}

printName()()