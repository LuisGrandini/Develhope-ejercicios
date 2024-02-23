// function adultFilter(persons) {
//     let mayorEdad = []
//     for (let index = 0; index < persons.length; index++) {
//         if (persons[index].age>=18) {
//             mayorEdad.push(persons[index].name)
//         }
        
//     }return mayorEdad
//   }
  
function adultFilter(persons) {
    let adults = persons.filter((persons) => persons.age > 17)
    return adults
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
  
  adultFilter(persons)
  const adults = adultFilter(persons);
  console.log(persons);
  console.log(adults);