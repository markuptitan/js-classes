const { Person } = require("./Person");

class Student extends Person {
  constructor({ name, age, gender, grade }) {
    super({ name, age, gender });
    const gradeRegex =
      /^(11th|12th|13th|1st|2nd|3rd|[4-9]th|[1-9]\d*1st|[1-9]\d*2nd|[1-9]\d*3rd|[1-9]\d*[04-9]th)$/;
    if (!gradeRegex.test(grade)) {
      throw new Error(
        'Invalid grade format. It should be a number followed by two letters, e.g., "1st", "12th".'
      );
    }
    this.grade = grade;
  }
  study() {
    return `${this.name} is studying.`;
  }
  getDetails() {
    return `${super.getDetails()} ${this.prefix} is doing ${this.grade} grade.`;
  }
}
let spha = new Student({
  name: "Spha",
  age: "22",
  gender: "male",
  grade: "12th",
});
console.log(spha.study());

module.exports = { Student };
