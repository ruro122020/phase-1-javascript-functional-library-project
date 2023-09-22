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
