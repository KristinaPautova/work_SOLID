const Book = require('../src/book');
const Subject = require('../src/subject')
const StudentGroup = require('../src/studentGroup')
const Position = require('../src/position')
const Teacher = require('../src/teacher')
const Parent = require('../src/parent')
const Student = require('../src/student')
const TeacherRole = require('../src/teacherRole')
const Person = require('../src/person')

const AlgebraBook = new Book('algebraFive', 'algebra')
AlgebraBook.setName('higher mathematics')
AlgebraBook.getName()
console.log(AlgebraBook);

////////////////////

const English = new Subject("English", 5, 1, ["study english"], '50$');
English.setName('Eng');
English.getName();
English.setLevel(10);
English.getLevel();
English.setHours(2);
English.getHours();
English.setBook(["strong English"]);
English.addBook("light Englsh")
English.getBook();
English.setQuote("70$");
English.getQuote();
console.log(English);

///////////////////////

const Lawyers = new StudentGroup(3,'L-3-18',["class supervisor",'teacher english','teacher math'],['Dariy Bocharnikova','Alina Nukeeva']);
Lawyers.setLevel(4);
Lawyers.getLevel();
Lawyers.setGroupNumber('L-4-18');
Lawyers.getGroupNumber();
Lawyers.addStudent('Polina Shlyhina');
Lawyers.getStudents();
Lawyers.addTeacherRole('teacher physics');
Lawyers.getTeacherRoles()
console.log(Lawyers)

///////////////////////

const Math = new Position('Math','Nataly Vasilevna');
Math.setQuote('Physics');
Math.getQuote();
Math.setName('Nataly Prohova');
Math.getName();

//////////////////////

const Biology = new Teacher('20$', 'Prepod',['Anatomy','Biologi'],['Lawyers','Accountant'])
Biology.setSalaries('30$');
Biology.getSalaries();
Biology.setPosition('head teacher');
Biology.getPosition();
console.log(Biology)


//////////////////////

const Pautov = new Parent('Father');
Pautov.setWhoWork('Mather');
Pautov.getWhoWork();
console.log(Pautov)


/////////////////////

const People = new Student('Lawyers',['Tata']);
People.setStudentGroup('Kristina Pau');
People.getStudentGroup();
People.addParent('Jon')
People.getParent()
console.log(People);


//////////////////////

const TeachR = new TeacherRole('Russian','Varvara Gold');
TeachR.setSubject('Literature');
TeachR.getSubject();
TeachR.setTeacher('Varvara Silver');
TeachR.getTeacher();

/////////////////////

Lawyers.addStudent(People.getStudentGroup())
console.log(Lawyers)

/////////////////////

Lawyers.addTeacherRole(Biology.getPosition())
console.log(Lawyers)
