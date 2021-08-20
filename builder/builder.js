const Book = require('../src/book');
const Subject = require('../src/subject')
const StudentGroup = require('../src/studentGroup')
const Position = require('../src/position')
const Teacher = require('../src/teacher')
const Parent = require('../src/parent')
const Student = require('../src/student')
const TeacherRole = require('../src/teacherRole')


const AlgebraBook = new Book('algebraFive', 'algebra')
const English = new Subject("English", 5, 1, [AlgebraBook], '50$');
const ClassSchool = new StudentGroup(3,'A');
const Supervisor = new Position('Math','Nataly Vasilevna');
const Instructor = new Teacher('20$', 'class supervisor',['Anatomy'],['Lawyers'])
const Papa = new Parent('Home work');
const Mama = new Parent('Saleswoman');
const Child = new Student();
const TeachR = new TeacherRole('Russian','Varvara Gold');

ClassSchool.addStudent(Child)
ClassSchool.addTeacherRole(Instructor)