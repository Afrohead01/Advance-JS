let obj = {num:10}

let addition = function(a,b,c){
    return this.num + a + b + c
}
let bound= addition.bind(obj)
console.log(bound(3,4,5))