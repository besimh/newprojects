console.log("connected");

// printReverse
function printReverse(arr){
    for(var i = arr.length - 1; i >= 0; i--){
        console.log(arr[i]);
    }
}
printReverse([2,4,7,3,5,8]);


// isUniform
function isUniform(array){
    var first = array[0];
    for(var i = 1; i < array.length; i++){
        if(array[i] !== first){
            return false;
        }
    }
    return true;
}


/*
function isUniform(array) {
    for(var i = 0; i < array.length - 1; i++) {
        if(array[i] !== array[i+1]) {
            return false;
        }
    }
    return true;
}
*/



// sumArray()
function sumArray(array){
    var total = 0;
    array.forEach(function(element){
        total += element;
    });
    return total;
}



// max()
function max(array){
    var max = array[0];
    for(var i = 1; i < array.length; i++){
        if(array[i] > max){
            max = array[i];
        }
    }
    return max;
}
