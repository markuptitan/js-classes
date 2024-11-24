class Animal {
  constructor({ name, age, species, gender }) {
    this.name = name;
    this.age = age;
    this.species = species;
    this.gender = gender;
    genderToLowerCase = gender.toLowerCase();
    this.prefix =
      genderToLowerCase === "male"
        ? "he"
        : genderToLowerCase === "female"
        ? "She"
        : "it";
  }
  getName() {
    return this.name;
  }
  getAge() {
    return this.age;
  }
  getDetails() {
    return `The pet's name is ${this.name} and ${this.prefix} is ${this.age} ${
      this.age === 1 ? "year" : "years"
    } old`;
  }
  makeSound() {
    return `sound...`;
  }
  getSpecies() {
    return this.species;
  }
}

module.exports = { Animal };
