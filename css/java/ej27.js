const person = {
    id: 1,
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 25
  };
  
  // const id = person.id;
  // const personInfo = {
  //   ...person
  // };
  
  // const personInfo = {
  //   firstName: person.firstName,
  //   lastName: person.lastName,
  //   age: person.age
  // };

  // delete personInfo.id 
  
  const {id, ...personInfo} = person


  console.log(id, personInfo);