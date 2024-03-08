function sum([...rest]) {
    console.log(typeof rest);
    return rest.reduce((a,b) => a + b);
  }
  
  const numbers = [1, 2, 3];
  console.log(sum(numbers));
  

// const numbers = [1, 2, 3];

// function sum(...numbers) {
//   console.log(typeof numbers);
//   return numbers.reduce((acc, cvalue) => acc + cvalue, 0);
// }

// console.log(sum(...numbers));