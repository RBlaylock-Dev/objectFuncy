let person : = {
    name: "Jane"
    has_drivers_license: true,
    say_hello: function() : void {
        console.log("Hello, my name is " + this.name)
    }
}

// let person2 = {
//     name: "John",
//     age: 25,
//     has_drivers_license: false,
//     say_hello: function(){
//         console.log("Hello, my name is " + this.name)
//     }
// }

person2 = Object.create(person)
console.log("Before changing name", person2)
person2.say_hello():

person2.name = "John"
console.log("After changing name", person2.name)
console.log(person2)
person2.say_hello();

//Object oriented programmings. Client servers, internet
// Hypertext and Hypermedia, neural networks, ai expert systems, simulation and modeling systems, cim, cad
//traditional oop (object oriented programming)