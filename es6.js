class Person {
  constructor(name) {
    this.name = name;
  }
  sayName() {
    console.log(this.name);
  }
}

let p = new Person('Nicholas');
p.sayName(); // "Nicholas"
