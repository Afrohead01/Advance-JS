class Student{
    static count = 0;
constructor(Name, age, phoneNumber, marks){
    this.Name = Name
    this.age = age
    this.phoneNumber = phoneNumber
    this.marks = marks
    Student.studentCount()
}
 static studentCount(){
    return(Student.count++)
}
}

Student.prototype.findEligibleOrNot = function findEligibleOrNot(){
if(this.marks > 40){
console.log(this.Name + ' is eligible')
}
else{
    console.log(this.Name + ' is not eligible')
}
}
const Student1 = new Student('Subham', 26, 7019084674, 100)
const Student2 = new Student('Didhiti', 25, 8600986747, 35)
const Student3 = new Student('Kaushik', 26, 872742323, 43)
const Student4 = new Student('Sumen', 26, 32323233534, 53)
const Student5 = new Student('Arkadyuti', 26, 8121221, 5)

console.log(Student1)
console.log(Student2)
console.log(Student3)
console.log(Student4)
console.log(Student5)
console.log(Student.studentCount())
Student1.findEligibleOrNot()
Student2.findEligibleOrNot()
Student3.findEligibleOrNot()
Student4.findEligibleOrNot()
Student5.findEligibleOrNot()