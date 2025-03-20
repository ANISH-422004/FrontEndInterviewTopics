let name = {
    firstName: 'John',
    lastName: 'Doe'
}

function PrintName(...newArgs) {
    console.log(newArgs);
    console.log(`${this.firstName} ${this.lastName}`);
}

// polyfill
Function.prototype.myBind = function (...args) {
    let func = this; // will point to the function that is calling this method
    let params = args.slice(1); // get the parameters to pass to the function
    console.log(args)
    return function (...newArgs) {
        // newArgs are the arguments passed to the returned function when it is called
        func.apply(args[0], [...params, ...newArgs]);
    }
}

let person = {
    firstName: 'John',
    lastName: 'Doe'
}

let printName = PrintName.myBind(person);
printName("hi" , "hellow"); // John Doe
