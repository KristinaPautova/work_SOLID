const Person = require('./person')

class Student extends Person {
    constructor(name, contact, isActive, dateOfBirth, studentGroup, parents) {
        super(name, contact, isActive, dateOfBirth);
        this.studentGroup = studentGroup;
        this.parents = parents || []
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

    getParents() {
        return this.parents
    }
}