class StudentGroup {
    constructor(level,groupNumber,student,teacher) {
        this.level = level;
        this.groupNumber = groupNumber;
        this.student = student;
        this.teacher = teacher
        this.teacherRoles = [];
        this.students = [];
    }

    setLevel(level) {
        this.level = level;
    }

    getLevel() {
        return this.level
    }

    setGroupNumber(groupNumber) {
        this.groupNumber = groupNumber;
    }

    getGroupNumber() {
        return this.groupNumber;
    }

    setStudents(student) {
        this.student = student;
    }

    addStudent(student) {
        this.students.push(student);
    }

    getStudents() {
        return this.students
    }

    setTeacherRoles(teacher) {
        this.teacher = teacher
    }


    addTeacherRole(teacher) {
        this.teacherRoles.push(teacher)
    }

    getTeacherRoles() {
        return this.teacherRoles
    }

}