const person = {
    name: 'John Doe',
    age: 30,
}

person.sayHello = function () {
    console.log("Hello, I am " + this.name)
}

    console.log(person)
person.sayHello()