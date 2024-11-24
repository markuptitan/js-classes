const { Animal } = require("./Animal");

class Wolf extends Animal {
  constructor({ name, age, gender, species = "Gray Wolf", rank }) {
    super({ name, age, gender });
    const genderToLower = gender.toLowerCase();
    if (genderToLower === "male" && age > 16) {
      throw new Error("Male wolves can not be older than 16 years.");
    }
    if (genderToLower === "female" && age > 14) {
      throw new Error("Female wolves can not be older than 14 years.");
    }
    if (rank === "alpha" && age < 3) {
      throw new Error("Alpha wolves must be at least 3 years old.");
    }
    this.rank = rank;
  }
  makeSound() {
    return "Howl!";
  }
  hunt() {
    return `${this.name} hunts.`;
  }
}

module.exports = { Wolf };
