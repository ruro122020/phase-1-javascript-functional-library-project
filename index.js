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
    for(let i=0; i < newArray.length; i++){
        mappedArray.push(callback(newArray[i]))
    }
    return mappedArray
}

function myReduce(collection, callback, acc){
    let newArray;
    if (!Array.isArray(collection)) {
        newArray = Object.values(collection)
    } else {
        newArray = [...collection]
    }

    let total;
    if(acc === undefined){
        total = newArray[0]
        newArray.shift()
    }else{
        total = acc
    }

    for(let i=0; i < newArray.length; i++){ 
        total = callback(total, newArray[i], newArray)
    }
    return total
}

function myFind(collection, predicate){
    let newArray;
    if (!Array.isArray(collection)) {
        newArray = Object.values(collection)
    } else {
        newArray = [...collection]
    }

    for(let element of newArray){
        if(predicate(element)){
            return element
        }
    }

}
/*
Parameter(s):

a collection (either an object or an array)
a predicate (a callback function that returns true or false)
Return value:

An array
Behavior:

Looks through each value in the collection, returning an array of all the values that pass a truth test (predicate). 
If no matching values are found, it should return an empty array.

Example function call:

myFilter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
=> [2, 4, 6]

myFilter({one: 1, three: 3, five: 5}, function(num){ return num % 2 == 0; })
=> []

This function should iterate through the elements of an array and return all the elements that pass the truth test.
if there is no match retrun an array. if there is a match return an array with all the elements that passed the truth test.

psudo code
check to see what kind of object the collection is. If its an array make a copy of it, if it an object turn it to an array using its
value as the elements in the array
initialize an empty array
iterate through the collection array
    if predicate(element)
        push the element to the empty array
    
return the array

*/

function myFilter(collection, predicate){
    let newArray;
    if (!Array.isArray(collection)) {
        newArray = Object.values(collection)
    } else {
        newArray = [...collection]
    }
    let matchedElements = []
    for(let element of newArray){
        if(predicate(element)){
            matchedElements.push(element)
        }
    }
    return matchedElements
}

/*
Parameter(s):

a collection (either an object or an array)
Return value:

An integer
Behavior:

Return the number of values in the collection.

Example function calls:

mySize({one: 1, two: 2, three: 3});
=> 3

mySize([]);
=> 0

This function should return the size of the array. It should count how many elements the array has and return that number as
an integer. 

psudo code 
check to see if the collection is an object or array. if its an array make a copy of it, if its an object convert it to an 
array and use the values as the elements of the array
*/

function mySize(collection){
    let newArray;
    if(!Array.isArray(collection)){
        newArray = Object.values(collection)
    }else{
        newArray = [...collection]
    }

    return newArray.length
}