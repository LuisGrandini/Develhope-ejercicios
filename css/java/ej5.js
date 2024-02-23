const person1 = {
    firstName: "John",
    lastName: "Doe",
    age: 25,
  };
  
  const person2 = person1;
  
  // Modify the property `firstName` of the `person2` in "Simon".

  person2.firstName = "Simon"
  
  console.log(person1);
  console.log(person2);

  // Since person2 is equal to person1 any change from one of them, the other mirrors the change.