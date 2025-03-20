// Debouncing 
let count =0 
const getData = () => {
    //calls a API and gets Data
    console.log("Fetching Data ..." + ++count)
}

const debouncedTheFunction = function (fn, d) { // fn is the function that we want to debounce and d is the time in milliseconds

    let timer; // this will store the timer id

    return function() {
        
        let context  = this  // for the context of the function that is calling it here that will 
        let args = arguments // for the arguments that are passed to the function that is calling it

        clearTimeout(timer) // this will clear the timer if the function is called again before the time of the last call

         timer = setTimeout(() => {
             fn.apply(context , args)   
        }, d);
    }

}



const betterGetData = debouncedTheFunction(getData, 300) // this will return a function that will be called after 300 milliseconds of the last call of the function that is passed to it