const Person = require('./person')

class Teacher extends Person {
    constructor(salaries,position,subjects,studentGroup) {
        super(name, contact, isActive, dateOfBirth);
        this.subjects = [];
        this.studentGroup = [];
        this.salaries = salaries;
        this.position = position;
    }

    setSalaries(salaries) {
        this.salaries = salaries;
    }

    setPosition(position) {
        this.position = position;
    }
}
