const number = 15;

const promesa = new Promise((resolve, reject) => {
    if (number > 10) {
        resolve(number)
    } else {
        reject(number)
    }
});

promesa
    .then((response) => {
        console.log(response);})  
    .catch((error) => {
        console.error("Promesa recahazada", error)
    })