let name = {
    firstName: "anish",
    lastName: "Bhattacharya",
}


/// normal binding using bind method
// let printName = function (){ //name   
//     console.log(this.firstName + " " + this.lastName)
// }

// let fun2 = printName.bind(name)
// fun2()



// poyfill for bind method


// let printName = function (){
//     console.log(this.firstName + " " + this.lastName)
// } 


// Function.prototype.mybind = function (...args) { 
//     console.log(args) // will contain the argumtes that are passed to the mybind method fr example x.mybind(1,2,3) then args will be [1,2,3]
//     let func = this // will point to the funtion that is calling it x.mybind()
//     return function(){
//         func.call(args[0]) // will call the function that is calling it
//     }
// }

// let fun2 = printName.mybind(name , 1 , 2 , 3)
// fun2()  



// now i wanna pass some new Arguments to the function that is return by mybinf function after binding the function with the object



let printName = function (state , country) {
    console.log(this.firstName + " " + this.lastName + " " + state + " " + country)
} 


Function.prototype.mybind = function (...args) {
    console.log(args)
    let func = this
    let params = args.slice(1) // will contain the arguments that are passed to the mybind method
    let self = args[0] // will contain the object that is calling the mybind method
    return function (...args2) {
        func.call(self , ...params , ...args2) // will call the function that is calling it
    }
}


// let fun2 = printName.mybind(name , "WB" , "India")()
// fun2("WB" , "India")