class StudentGroup {
    constructor(level,groupNumber,student,teacher) {
        this.level = level;
        this.groupNumber = groupNumber;
        this.student = student;
        this.teacher = teacher
        this.teacherRoles = [];
        this.students = [];
    }

    setLevel(level){
        this.level = level;
    }

    setGroupNumber(groupNumber){
        this.groupNumber = groupNumber
    }

    setStudents(student){
        this.student = student
    }

    setTeacherRoles(teacher){
        this.teacher = teacher
    }

    addStudent(student) {
        this.students.push(student);
    }

    addTeacherRole(teacher){
        this.teacherRoles.push(teacher)
    }
}