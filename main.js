//YOUR CODE GOES HERE
function getFirstName(person) {
  return person.firstName;
}

function getLastName(person) {
  return person.lastName;
}

function getFullName(person) {
  return `${person.firstName} ${person.lastName}`;
}

function setFirstName(person, newFirstName) {
  person.firstName = newFirstName;
  return person;
}

function setAge(person, newAge) {
  person.age = newAge;
  return person;
}

function giveBirthday(person) {
  if (person.hasOwnProperty('age')) {
    person.age += 1;
  } else {
    person.age = 1;
  }
  return person;
}

function marry(person1, person2) {
  person1.married = true;
  person2.married = true;
  person1.spouseName = getFullName(person2);
  person2.spouseName = getFullName(person1);
}

function divorce(person1, person2) {
  person1.married = false;
  person2.married = false;
  delete person1.spouseName;
  delete person2.spouseName;
}

const person1 = { firstName: 'John', lastName: 'Doe', married: false };
const person2 = { firstName: 'Alice', lastName: 'Smith', married: false };
console.log(getFirstName(person1)); 
console.log(getLastName(person2)); 
console.log(getFullName(person1)); 
setFirstName(person1, "Michael") 
setAge(person1, 45);
console.log(person1); 
giveBirthday(person1);
giveBirthday({ firstName: 'Baby', lastName: 'Doe' }); 
marry(person1, person2);
console.log(person1);
console.log(person2);
divorce(person1, person2);
console.log(person1); 
console.log(person2); 







/****************************/




// Our code here. Don't touch!
if (typeof getFirstName === 'undefined') {
    getFirstName = undefined
  }
  if (typeof getLastName === 'undefined') {
    getLastName = undefined
  }
  if (typeof getFullName === 'undefined') {
    getFullName = undefined
  }
  if (typeof setFirstName === 'undefined') {
    setFirstName = undefined
  }
  if (typeof setAge === 'undefined') {
    setAge = undefined
  }
  if (typeof giveBirthday === 'undefined') {
    giveBirthday = undefined
  }
  if (typeof marry === 'undefined') {
    marry = undefined
  }
  if (typeof divorce === 'undefined') {
    divorce = undefined
  }
  module.exports = {
    getFirstName,
    getLastName,
    getFullName,
    setFirstName,
    setAge,
    giveBirthday,
    marry,
    divorce,
  }







