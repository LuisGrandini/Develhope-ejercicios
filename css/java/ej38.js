const isLogged = true;

// check if user is logged
const logged = (log) => {
    return new Promise((resolve, reject) => {
        // if logged return random number
        if (log === true) {
            resolve(Math.random())
        // if not logged return error
        } else {
            reject(new Error("User is not logged"))
        }
})};

// check if number > 0.5
const promesa = (num) => {
    return new Promise((resolve, reject) => {
        // if number > 0.5 return object
        if (num > 0.5) {
            resolve({name: "John", age: 24})
        // if not return error
        } else {
            reject(new Error("Num not high enough"))
        } 
})}

logged(isLogged)
    .then((response) => promesa(response))
    .then((response) => console.log(response))
    .catch((err) => console.error(err))