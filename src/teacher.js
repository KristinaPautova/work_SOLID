const Person = require('./person')

class Teacher extends Person {
    constructor(salaries, position, subjects, studentGroup,name, contact, isActive, dateOfBirth) {
        super(name, contact, isActive, dateOfBirth);
        this.salaries = salaries;
        this.position = position;
        this.subjects = subjects || [];
        this.studentGroup =  studentGroup || [];
    }

    setSalaries(salaries) {
        this.salaries = salaries;
    }

    getSalaries() {
        return this.salaries;
    }

    setPosition(position) {
        this.position = position;
    }

    getPosition() {
        return this.position
    }
}

module.exports = Teacher;