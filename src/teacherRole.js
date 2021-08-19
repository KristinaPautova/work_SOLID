class TeacherRole {
    constructor(subject,teacher) {
        this.subject = subject;
        this.teacher = teacher;
    }

    setSubject(subject) {
        this.subject = subject;
    }

    getSubject() {
       return this.subject
    }

    setTeacher(teacher) {
        this.teacher = teacher;
    }

    getTeacher() {
        return this.teacher
    }
}