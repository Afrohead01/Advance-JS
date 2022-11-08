let obj = {num:10}

let addition = function(a,b,c){
    return this.num + a + b + c
}
let arr = [3,4,5]
console.log(addition.apply(obj,arr))