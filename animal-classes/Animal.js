class Animal {
  constructor({ name, age, species }) {
    this.name = name;
    this.age = age;
    this.species = species;
  }
  getName() {
    return this.name;
  }
  getAge() {
    return this.age;
  }
  getDetails() {
    return `The pet's name is ${this.name} and it is ${this.age} ${
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
