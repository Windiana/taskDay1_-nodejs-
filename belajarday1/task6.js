var tripleAndFilter = arr =>{
    return arr.map(function(value){
        return value * 3;
    }).filter(function(value){
        return value % 5 === 0;
    })
}
console.log("ok")
