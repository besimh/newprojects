//for loops

console.log("count from 0 to 6 whith for loops")
for(var count = 0; count < 6; count++) {
	console.log(count);
}


console.log("another example")
for(var i = 0; i <16; i+=8) {
	console.log(i);
}

console.log("another example")
for(var i = 0; i <=16; i+=8) {
	console.log(i);
}


console.log("another example")
var str = "ahceclwlxo";
for(var i = 1; i < str.length; i+=2) {
	console.log(str[i]);
} //var i = 1 (fillojme prej shkronjes 1, numerojme cdo te dyten shkronje (i+=2)

console.log("another example")
var str = "vvvmvovtvhvevrvfvuvcvkvevr";
for(var i = 3; i < str.length; i+=2) {
	console.log(str[i]);
}   //dmth var i = 3 (fillojme prej te shkronja e 3 e cila eshte m,
    // dhe i+=2 (numerojme cdo te dyten shkronje)


/*Exercise 1 Print all numbers between -10 and 19*/
console.log("printing all numbers between -10 and 19");
for(var i = -10; i <= 19; i++) {
	console.log(i);
}


/*Exercise 2 Print all even numbers between 10 and 40*/
console.log("printing all even numbers between 10 and 40");
for(var i = 10; i <= 40; i+=2) {
	console.log(i);
}



/*Exercise 3 Print all odd numbers between 300 and 333*/
console.log("printing all odd numbers between 300 and 333");
for(var i = 300; i <= 333; i++) {
	if(i % 2 !== 0) {
	console.log(i);	
	}
}


/*Exercise 4 Print all numbers divisible by 5 and 3 between 5 and 50*/
console.log("printing all numbers divisible by 5 and 3 between 5 and 50");
for(var i = 5; i <= 50; i++) {
	if(i % 5 === 0 && i % 3 === 0) {
	console.log(i);	
	}
}