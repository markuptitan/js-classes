class Person {
  constructor({ name, age, gender }) {
    this.name = name;
    this.age = age;

    if (typeof gender === "string") {
      const lowerGender = gender.toLowerCase();
      this.prefix =
        lowerGender === "male"
          ? "He"
          : lowerGender === "female"
          ? "She"
          : "They";
    } else {
      this.prefix = "They";
    }

    this.isSingularThey = this.prefix === "They";
    this.gender = gender;
  }

  greet() {
    return `Hello, my name is ${this.name}.`;
  }

  getDetails() {
    const verb = this.isSingularThey ? "are" : "is";
    return `${this.prefix} ${verb} ${this.age} years old.`;
  }
}

module.exports = { Person };
