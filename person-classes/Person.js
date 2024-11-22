class Person {
  constructor({ name, age, gender }) {
    if (gender !== "male" && gender !== "female") {
      throw new Error("Gender must be male or female");
    }
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  greet() {
    return `Hello, my name is ${this.name}.`;
  }
  getDetails() {
    return `${this.name} is a ${this.age}-year-old ${
      this.gender === "male" ? "boy" : "girl"
    }.`;
  }
}

module.exports = { Person };
