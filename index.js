function myEach(array, callback){
    let newArray
    if(!Array.isArray(array)){
        newArray = Object.values(array)
    }else{
        newArray = array
    }

    for(let element of newArray){
        callback(element)
    }
    return array
}


