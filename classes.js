



// let animal = new animal(name: "Doggie", age: 3)
// // let animal = new animal();
// console.log(animal);
// animal.sound()

class Person {
    constructor(name,age,hairColor){
        this.name = name
        this.age = age
        this.hairColor = hairColor
    }

    sayHello() {
        console.log("Hello my name is " + this.name)
    }
}

let person = new Person{ name: "Robert", age: 31, hairColor: "Brown"};
let person2 = new Person{name: "John", age: 25, hairColor: "Purple"}
console.log(person);
person.sayHello()


//inheritance in programming
class animal {
    constructor(name,age){
        this.name = name
        this.age = age

    }
    //constructor allows you to pass in arguments
    // name = "Animal"
    // age = 8
    sound() {
    console.log("Animal sound")
}
}

class Dog extends animal{
    constructor(name, age, breed){
        super(name, age)
        this.breed = breed
    }

    sound() {
        console.log("woof woof")
    }
}
//if you want your inherited class to hangle it use extends keyword and use super to call the parent class



class Cat extends animal{
    constructor(name, age, hairColor){
        super(name, age)
        this.hairColor = hairColor
    }
}

let dog = new Dog{ name: "Doggie", age: 3, breed: "Bulldog"};
let cat = new Cat{name: "Kitty", age: 2, hairColor: "White"};
console.log(dog)
dog.sound()

// Today we will cover destructuring objects and arrays. We will also cover spread operator looping through objects string formatting



//destructuring objects
let {name, age} = person;
console.log(name)

const {PI} = Math;
console.log(PI);

let {city} = person;
console.log(city);
console.log(waffles); //if property doesn't exist it will return undefined
// with destucturing objects you use {} when destructuring arrays you use []
let arr = [1,2];
let [x, y] = arr;

//spread operator ...
let p2 = {
    ...person,
    name: "Waffles"
}

console.log(p2)


let arr = [1,2,3];
let arr2 = [...arr, 4,5,6];
console.log(arr2)

let todos = [
    {
        id:1,
        title: "Learn JavaScript",
        completed: false
    },
    {
        id:2,
        title: "Learn React",
        completed: false
    },
    {
        id:3,
        title: "Learn Node",
        completed: false
    }

]

let newState = [
    ...todos,
    {
        id:4,
        title: "Learn Redux",
        completed: false
    }
]

function hello({name = "World", age = 25}) {
    console.log(name);
    console.log(age);
}

hello(person);

let person = {
    name: "John Doe",
    age: 25,
    city: "New York"
}

for (let property in person){
    console.log(prop)
    console.log(person[prop])
}

let p2 = Object.create(person);
console.log(p2);
p2.state = "NY";
console.log(p2);

// for in loop through everything including the prototype
for (let prop in p2){
    console.log(prop)
}

//for of loop through only the object itself
for (let prop of Object.keys(p2)){
    console.log(prop)
}

//use object.keys to loop through all but the inherited stuff. 

//string formatting
let name = "John Doe";
let age = 25;
let sent = `Hello, ${name} I am ${age} years old`;

let str = `

        This
               hello
                    ${name}
                            waffles
                            
                            
                            `

console.log(str);


//Template literals are multi line available as well not just single line use. 