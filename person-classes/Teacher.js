const { Person } = require("./Person");

class Teacher extends Person {
  constructor({ name, age, gender, subject, yearsOfExperience }) {
    super({ name, age, gender });

    if (typeof subject !== "string" || subject.trim() === "") {
      throw new Error("Subject must be a non-empty string.");
    }

    if (
      typeof yearsOfExperience !== "number" ||
      yearsOfExperience < 0 ||
      !Number.isInteger(yearsOfExperience)
    ) {
      throw new Error("Years of experience must be a non-negative integer.");
    }

    this.subject = subject;
    this.yearsOfExperience = yearsOfExperience;
  }

  teach() {
    const verb = this.isSingularThey ? "teach" : "teaches";
    return `${this.prefix} ${verb} ${this.subject}.`;
  }

  getDetails() {
    const verb = this.isSingularThey ? "are" : "is";
    return `${super.getDetails()} ${this.prefix} ${verb} teaching ${
      this.subject
    } and has ${this.yearsOfExperience} years of experience.`;
  }
}

module.exports = { Teacher };
