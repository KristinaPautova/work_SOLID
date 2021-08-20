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
const ClassSchool = new StudentGroup(3,'A',[TeachR],[Child]);
const Supervisor = new Position('Math','Nataly');
const Instructor = new Teacher('20$', 'class supervisor',[English],[ClassSchool],"Miha", "+99678988787",'true','12.10.1975')
const Papa = new Parent('Home work', 'Jon','+996700879098');
const Mama = new Parent('Saleswoman','Tata',"+996700090089");
const Child = new Student('Kris',"+996700189000",true,'21.11.1999','A',[Mama,Papa]);
const TeachR = new TeacherRole('Russian','Varvara Gold');

ClassSchool.addStudent(Child)
ClassSchool.addTeacherRole(Instructor)