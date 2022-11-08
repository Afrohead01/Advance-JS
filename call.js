let obj = {num:10}

let addition = function(a){
    return this.num + a
}

console.log(addition.call(obj,5))