function myEach(array, callback) {
    let newArray
    if (!Array.isArray(array)) {
        newArray = Object.values(array)
    } else {
        newArray = array
    }

    for (let element of newArray) {
        callback(element)
    }
    return array
}


function myMap(collection, callback) {
    let newArray;
    if (!Array.isArray(collection)) {
        newArray = Object.values(collection)
    } else {
        newArray = [...collection]
    }

    const mappedArray = []
    for (let i = 0; i < newArray.length; i++) {
        mappedArray.push(callback(newArray[i]))
    }
    return mappedArray
}

function myReduce(collection, callback, acc) {
    let newArray;
    if (!Array.isArray(collection)) {
        newArray = Object.values(collection)
    } else {
        newArray = [...collection]
    }

    let total;
    if (acc === undefined) {
        total = newArray[0]
        newArray.shift()
    } else {
        total = acc
    }

    for (let i = 0; i < newArray.length; i++) {
        total = callback(total, newArray[i], newArray)
    }
    return total
}

function myFind(collection, predicate) {
    let newArray;
    if (!Array.isArray(collection)) {
        newArray = Object.values(collection)
    } else {
        newArray = [...collection]
    }

    for (let element of newArray) {
        if (predicate(element)) {
            return element
        }
    }

}

function myFilter(collection, predicate) {
    let newArray;
    if (!Array.isArray(collection)) {
        newArray = Object.values(collection)
    } else {
        newArray = [...collection]
    }
    let matchedElements = []
    for (let element of newArray) {
        if (predicate(element)) {
            matchedElements.push(element)
        }
    }
    return matchedElements
}



function mySize(collection) {
    let newArray;
    if (!Array.isArray(collection)) {
        newArray = Object.values(collection)
    } else {
        newArray = [...collection]
    }

    return newArray.length
}

/*
Parameter(s):

an array
an integer (optional)
Return value:

A single element OR an array
Behavior:

Returns the first element of an array. Passing n will return the first n elements of the array.

Example function calls:

myFirst([5, 4, 3, 2, 1]);
=> 5

myFirst([5, 4, 3, 2, 1], 3);
=> [5, 4, 3]

This function will take in an array and an integer as an optional argument.
This function should return a single element OR an array.
What this means is that if an integer is passed as the second argument, return that amount of elements from the passed in array
if there is no integer passed return the first element of the array

psudo code
check to see if the array is an object or an array. if object convert it to an array with the values as its elements.
if array make a copy of the array.

check to see if an integer was passed
    initialize empty array
    if integer exist
        iterate through the array n amount of times
            push the number to the empty array 
    otherwise return the first number of the array

*/
function myFirst(collection, n) {
    let newArray;
    if (!Array.isArray(collection)) {
        newArray = Object.values(collection)
    } else {
        newArray = [...collection]
    }

    if (n) {
        let nthNumbers = []
        for (let i = 0; i < n; i++) {
            nthNumbers.push(newArray[i])
        }
        return nthNumbers
    }else{
       return newArray[0]
    }
}

/*
Parameter(s):

an array
an integer (optional)
Return value:

A single element OR an array
Behavior:

Returns the last element of an array. Passing n will return the last n elements of the array.

Example function calls:

myLast([5, 4, 3, 2, 1]);
=> 1

myLast([5, 4, 3, 2, 1], 3);
=> [3, 2, 1]

This function should take in an array and an optional number.
It should return the last nth number of the array if a number is passed
It should return the last number of the array if a number is NOT passed

psudo code
first check if the array is an object, if object conver to array with values as its elements. if array make copy of array.

if 'n' number was passed 
        slice the array by subtracting the length of the array by the 'n' number
otherwise return the last element of the array
*/
function myLast(collection, n){
    let newArray;
    if (!Array.isArray(collection)) {
        newArray = Object.values(collection)
    } else {
        newArray = [...collection]
    }

    if(n){
       return newArray.slice(newArray.length - n)
    }else{
        return newArray[newArray.length - 1]
    }
}