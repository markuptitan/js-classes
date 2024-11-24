const { Animal } = require("./Animal");

class Lion extends Animal {
  constructor({ name, age, species }) {
    super({ name, age, species });
  }
}
