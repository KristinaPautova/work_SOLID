const Person = require('./person')

class Student extends Person {
    constructor(name, contact, isActive, dateOfBirth) {
        super(name, contact, isActive, dateOfBirth);
        this.studentGroup = studentGroup;
        this.parents = []
    }

    setStudentGroup(studentGroup) {
        this.studentGroup = studentGroup
    }

    addParent(parent){
        this.parents.push(parent);
    }
}

const stud = new Student()
stud.addParent('MIha');
console.log(stud)