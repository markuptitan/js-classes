class Person {
  constructor({ name, age, gender }) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.prefix =
      gender.toLowerCase() === "male"
        ? "He"
        : gender.toLowerCase() === "female"
        ? "She"
        : "They";
  }

  greet() {
    return `Hello, my name is ${this.name}.`;
  }
  getDetails() {
    return `${this.prefix} is ${this.age} years old.`;
  }
}

module.exports = { Person };
