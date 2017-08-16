console.log("linked main.js");

var fruits = ["apple", "banana", "cherry", "peach"];

// 1A: Write a function called outputFruitOld that consoles every fruit in a fruit array.

function outputFruitOld(array){
	for(var i = 0; i < array.length; i++) {
		console.log("Fruit from 1A", array[i]);
	}
}

outputFruitOld(fruits);

// 1B: Rewrite using forEach array method

// using callback function
fruits.forEach(listFruits);

function listFruits(fruit, index, array){
	console.log("Fruit from 1B:", fruit);
	console.log("index", index);
	console.log("array", array);
}

// using anonymous function

fruits.forEach(function(item){
	console.log(item);
});

// 2A: Write a function called backwardFruitsOld that reverses the letters in each word in the fruits array.

function backwardFruitsOld(array){
	var newArray = [];
	for(var i = 0; i < array.length; i++){
		newArray.push(array[i].split('').reverse().join(''));
	}
	return newArray;
}

console.log(backwardFruitsOld(fruits));

// 2B: Rewrite using map array method

var secondNewArray = fruits.map(function(fruit){
	return fruit.split('').reverse().join('')
});

console.log(secondNewArray);
console.log(fruits);

//with a callback function

function splitter(item){
	return item.split('').reverse().join('');
}

console.log("Using the splitter function", fruits.map(splitter));


// 3A: Write a function called fiveLettersOnlyOld that only returns fruits that have 5 letters.

function fiveLettersOnlyOld(array){
	var newArray = [];
	for(var i = 0; i < array.length; i++){
		if(array[i].length === 5){
			newArray.push(array[i]);
		}
	}
	return newArray;
}

console.log(fiveLettersOnlyOld(fruits));

// 3B: Rewrite using filter array method

var filteredFruits = fruits.filter(function(fruit){
	if(fruit.length === 5){
		return true;
	}
});

console.log("filtered Fruits:", filteredFruits);

var numbers = [0, 1, 2, 3, 4];



// 4A: Write a function called addzOld that returns the sum of an array.

function addzOld(array){
	var sum = 0;
	for(i = 0; i < array.length; i++){
		sum += array[i];
	}
	return sum;
}

console.log("doing the adding of numbers:", addzOld(numbers));


// 4B: Rewrite using reduce array method

var summation = numbers.reduce(function(accumulation, currentValue){
	return accumulation + currentValue;
})

console.log(summation);

