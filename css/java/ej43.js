const user = {
    id: 1,
    name: "John",
    age: 25,
  };

function savingUser(userObject) {
  const userString = JSON.stringify(userObject);
  localStorage.setItem("user", userString)
}  

function gettingData() {
    const newObj = localStorage.getItem("user");
    const newData = JSON.parse(newObj)
}

savingUser(user);
gettingData();