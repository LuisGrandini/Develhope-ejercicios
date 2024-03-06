// function printAsyncName(print,n) {
//     let hola = setInterval(print, n);
//     setTimeout(() => clearInterval(hola), n);
// }


// printAsyncName(() => console.log("Hola"),1000);
// printAsyncName(() => console.log("Luis"),2000);

function printAsyncName(name) {
    setTimeout(() => console.log("Hello"), 1000);
    let nombre = setInterval(name, 2000);
    setTimeout(() => clearInterval(nombre), 2000);
}


printAsyncName(() => console.log("Luis"));