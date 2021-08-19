# Models
## Person
### Props
name, contact, isActive, dateOfBirth
### Methods
setName, getName, setContact, getContact, ...etc

## Parent
### Props
Extend props name, contact from Person class </br>
whoWork
### Methods
setWhoWork

## Student
### Props
Extend props name, contact, isActive, dateOfBirth from Person class </br>
studentGroup, parents - array
### Methods
setStudentGroup, addParent

## Teacher
### Props
Extend props all props from Person class </br>
subjects - array, studentGroup - array, salaries, position
###Methods
setSalaries, setPosition


## Teacher Role
### Props
subject, teacher
### Methods
setSubject, setTeacher

## Book
### Props
subject, name
### Methods
setName

## Subject
### Props
name, level, hours, books, quote </br>
books is an array
### Methods
addBook method is adding book to the books array </br>
setName, setLevel, setHours, setBooks, setQuote

## Position
### Props
quote, name
### Methods
setQuote, setName

## StudentGroup
### Props
level, groupNumber, teacherRoles and students are arrays
### Methods
setLevel, setGroupNumber, setStudents, setTeacherRoles, addStudent, addTeacherRole