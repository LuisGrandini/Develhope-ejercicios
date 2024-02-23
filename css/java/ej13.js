// function calculateAverageAge(persons) {
//   let index = 0
//     let suma = persons.reduce((total,persons) => {
//       return total + persons.age
//     },index)
//     let promedio = suma/persons.length
//     return promedio
//   }
  
function calculateAverageAge(persons) {
  let amountOfPersons = persons.length;
  let ageSum = 0;
  ageSum + persons.forEach(persons => {
    ageSum += persons.age;
    console.log('ageSum',ageSum);
  });
  return ageSum/amountOfPersons
}

  const persons = [
    { name: 'Paul', age: 16 },
    { name: 'George', age: 17 },
    { name: 'Lucas', age: 21 },
    { name: 'Marco', age: 32 },
    { name: 'Peter', age: 18 },
    { name: 'Carl', age: 13 },
    { name: 'Simon', age: 24 },
    { name: 'Mark', age: 15 },
    { name: 'Sandra', age: 34 },
    { name: 'Alice', age: 28 }
  ];


const average = calculateAverageAge(persons);
console.log(persons);
console.log(average);