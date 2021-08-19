const Person = require('./person')

class Student extends Person {
    constructor(studentGroup, parents,name, contact, isActive, dateOfBirth ) {
        super(name, contact, isActive, dateOfBirth);
        this.studentGroup = studentGroup;
        this.parents = parents || []
        this.name = name;
    }

    setStudentGroup(studentGroup) {
        this.studentGroup = studentGroup
    }

    getStudentGroup() {
        return this.studentGroup
    }

    addParent(parent) {
        this.parents.push(parent);
    }

    getParent() {
        return this.parents
    }
}

module.exports = Student