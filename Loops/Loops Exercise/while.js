/*Exercise 1 Print all numbers between -10 and 19*/
console.log("printing all numbers between -10 and 19");
var num = -10;
while(num <= 19) {
	console.log(num);
	num ++;
}


/*Exercise 2 Print all even numbers between 10 and 40*/
console.log("printing all even numbers between 10 and 40");
var num = 10;
while(num <= 40) {
	console.log(num);
	num +=2;
}



/*Exercise 3 Print all odd numbers between 300 and 333*/
console.log("printing all odd numbers between 300 and 333");
var num = 300;
while(num <= 333) {
	if(num % 2 !== 0){
	 console.log(num);	
	}
	num +=1;
}


/*Exercise 4 Print all numbers divisible by 5 and 3 between 5 and 50*/

console.log("printing all numbers divisible by 5 and 3 between 5 and 50");
var num = 5;
while(num <= 50) {
	if(num % 5 === 0 && num % 3 === 0) {
		console.log(num);
	}
	num ++;	
}

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







