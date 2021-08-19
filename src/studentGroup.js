class StudentGroup {
    constructor(level,groupNumber, teacherRoles, students) {
        this.level = level;
        this.groupNumber = groupNumber;
        this.teacherRoles = teacherRoles || [];
        this.students =  students || [];
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

    setStudents(students) {
        this.students = students;
    }

    addStudent(student) {
        this.students.push(student);
    }

    getStudents() {
        return this.students
    }

    setTeacherRoles(teacherRoles) {
        this.teacherRoles = teacherRoles
    }

    addTeacherRole(teacherRole) {
        this.teacherRoles.push(teacherRole)
    }

    getTeacherRoles() {
        return this.teacherRoles
    }

}