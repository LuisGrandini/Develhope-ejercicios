function repeatHello(callback) {
    const id = setInterval(callback, 1000);
    setTimeout(() => {
        clearInterval(id)
    },5100);
}

repeatHello(() => {console.log("Hello")})

//por que el callback funtion tiene que ser arrow function?