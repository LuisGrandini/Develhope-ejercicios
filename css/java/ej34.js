// function printAsyncName(callback, n) {
//     setTimeout(() => console.log("Hello"), 1000);
//     setTimeout(() => console.log(callback), 1000 * n);
// }


// printAsyncName("Luis", 2);

// function printAsyncName(callback, name) {
//     setTimeout(callback, 1000)
//     setTimeout(() => 
//         {console.log(name)}, 2000)
// }

// function printHello() {
//     console.log("Hello");
// }

// printAsyncName(printHello, "Luis")


function printAsyncName(callback, name) {
    setTimeout(() => {
        callback();
         setTimeout(() => 
        {console.log(name)},
         1000);
    }, 1000)
}

function printHello() {
    console.log("Hello");
}

printAsyncName(printHello, "Luis")