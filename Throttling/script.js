function throttle(fn, limit) {

    let flag = false

    return function () {
        if (!flag) {
            fn()
            flag = true
            setTimeout(() => {
                flag = false
            }, limit)
        }
    }
}

let clickFunction = () => {
    console.log("Button Clicked")
}

let throttledFunction = throttle(clickFunction, 2000) // this will return a function that will be called after 2 seconds of the last call of the function that is passed to it


const button = document.querySelector("button")

button.addEventListener("click", throttledFunction)