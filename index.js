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
        newArray = collection
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

console.log(myReduce([1, 2, 3], function(acc, val, collection) { return acc + val; }, 10));

console.log(myReduce({one: 1, two: 2, three: 3}, function(acc, val, collection) { return acc + val; }));
