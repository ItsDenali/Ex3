//------------------------------------------------------
// Exercise 3.1 ----------------------------------------
//------------------------------------------------------

let arrays = [[1, 2, 3], [4, 5], [6]];


export function flattening(inputList)  {
    return inputList.reduce((ae1, ae2) => ae1.concat(ae2))
}
console.log(flattening(arrays))




//------------------------------------------------------
// Exercise 3.2 ----------------------------------------
//------------------------------------------------------

export function loop(value, test, body, update) {
    while (test(value)) {
        value = body(value)
        update(value)
    }
}

loop(3, n => n > 0, n => n - 1, console.log)




//------------------------------------------------------
// Exercise 3.3 ----------------------------------------
//------------------------------------------------------

function everyLoop (array, test) {
    let returnValue = true
    for (let item of array) {
        returnValue = returnValue && test(item)
    }
    return returnValue
}

console.log(everyLoop([1, 3, 5], n => n < 10));
console.log(everyLoop([2, 4, 16], n => n < 10));
console.log(everyLoop([], n => n < 10));




//------------------------------------------------------
// Exercise 3.4 ----------------------------------------
//------------------------------------------------------

export function everySome(array, test) {
    return !array.some(item => {
        console.log("Applying the titest to " + item + " with result " + test(item) + ".")
         if (!test(item))   {
         console.log("An item that doesn't match the test has been found.")
         }
        return !test(item)
    })
}

console.log(everySome([1, 3, 5], n => n < 10));
console.log(everySome([2, 4, 16], n => n < 10));
console.log(everySome([], n => n < 10));