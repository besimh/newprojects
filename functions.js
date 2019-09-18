// 1. Write a function isEven() which takes a single numeric argument and returns true if the number is even, and false othervise
/*function isEven(num) {
	if(num % 2 ===0) {
		return true;
	}
	else {
		return false;
	}
}*/

//shorter way
function isEven(num) {
	return num % 2 === 0;
}



// 2. Write a function factorial() which takes a single numeric argument and returns the factorial of that number
// 1 x 2 x 3 x 4
function factorial(num) {
	//define a result variable
	var result = 1;
	//calculate factorial and sotre value in result
	for(var i = 2; i <= num; i++){
		result = result * i; // we can shorter this line to: result *= i;
	}
	//return the result variable
	return result;
}

// or we can do backwards 4 x 3 x 2 x 1
/*function factorial(num) {
	var result = num;
	for(var i = num-1; i >= 1; i--){
		result = result * i; // we can shorter this line to: result *= i;
	}
	return result;
}*/


// 3. Write a function kebabToSnake() which takes a single kebab-cased string argument and returns the snake_cased version
// Basically, replace "-"s with "_"s

kebabToSnake("hello-world"); //"hello_world"
kebabToSnake("dogs-are-awesome"); //dogs_are_awesome"
kebabToSnake("blah-blah"); //"blah_blah"

function kebabToSnake(str) {
	//replace all "-" with "_"
	var newStr = str.replace(/-/g, "_"); //ckado qe eshte ne mes dy // replace me ate qe eshte ne thonja DHE g e ka rolin e global, pa g nuk bon!
	//return str
	return newStr
}

