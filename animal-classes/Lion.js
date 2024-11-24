const { Animal } = require("./Animal");

class Lion extends Animal {
  constructor({ name, age, species = "Lion", gender }) {
    super({ name, age, species, gender });
    const genderToLower = gender.toLowerCase();
    if (genderToLower === "male" && age > 10) {
      throw new Error("Male lions can not be older than 10 years");
    }
    if (genderToLower === "female" && age > 16) {
      throw new Error("Female lions can not be older than 16 years");
    }
    if (genderToLower !== "male" && genderToLower !== "female") {
      throw new Error("Invalid gender for Lion");
    }
  }
  makeSound() {
    return "Roar!";
  }
  hunt() {
    return `${this.name} is hunting`;
  }
}
