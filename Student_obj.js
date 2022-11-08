let Student = {age:10}

let addition = function(){
    return this.age
}
let bound= addition.bind(Student)
console.log(bound())