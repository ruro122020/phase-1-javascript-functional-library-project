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

/*
Looks through each value in the collection, returning the first one that passes a truth test (predicate) 
or undefined if no value passes the test.The function should return as soon as it finds an acceptable element,
without traversing the rest of the collection.

The function should iterate through each element in the array. 
Return the first element that passes the truth test(condition) and 
if no value passes the test return undefined. 

psudo code 
iterate through the newArray 
    if callback(element)
        return element
*/
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
