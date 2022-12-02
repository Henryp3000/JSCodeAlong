// alert("Let me Know");
// example 1
// let const var

// let x =12
// const y = 34;

// // sys out
// console.log("anser is" ,x+y);

// example 2
// can reassign a differect time to a variable 
// let x = 12;
// x = "is it still a number";

// example 3
// let x = "10";
// let y = 10;
// console.log(x===y);

// example4
// let x = "10";
// let y = 10;
// console.log(x!=y);

// example5
// let x = "10";
// let y = 10;

// let isitraining =true;
// let nickName = "mikejones";

// console.log(x!=y);

// example5 datatypes 
// anything in double quotes is a string

// let x = "10";
// let y = 10;

// let isitraining =true;
// let nickName = "mikejones";

// console.log(x!=y);

// example function
// function buyCoffee (dollarAmount){
//     let costOfCoffee = 1.00;     // java ex double costOfCoffee = 1.00;
//     let change = dollarAmount - costOfCoffee;
//     return change; 

// }
// console.log(buyCoffee(5.00));

// discount is whatever i decide it to be when i call you function
// jordans 

// function PriceAfterDiscount(dollarAmount){
//     let cost = 100; 
//     let discount 20%;
//     let c = dollarAmount - discount;
//     return newPrice; 
// }
// console.log(PriceAfterDiscount(10,100));

// example function
// function printUserNames(user1,user2){
//     console.log("user 1 is : ",user1 + "user is 2:", user2);


// }

// printUserNames("Henry Pereira", "Nyshia Pereira");


// example objects

// const person = {
//     firstName: "Henry",
//     lastName: "Pereira",
//     age:26,
//     eyecolor: "brown",
//     fullName: function(){
//         return this.firstName + " " + this.lastName;
//     }

// }
// function printPersonName(person){
//     console.log("user 1 is: ", person.firstName);
// }


// }

// printPersonName(person);


// const personFullName = {
//     firstName: "Henry",
//     lastName: "Pereira",
//     age:26,
//     eyecolor: "brown",

// }
// function printPersonName(person){
//     console.log("user 1 is: ", person.firstName + person.lastName);


// }

// printPersonName(person);


// }

// console.log(person.firstName); // object.property name
// console/log(person.fullName);//object anme. method name


// example array

// const whips = ['bmw', 'benz', 'bentley'];
// whips[3] 'bugatti';
// // console.log(whips[1]);

// for(let x = 0; x < whips.length; x++){
//     console.log(whips[x]);

// }

// const bill = [10.0, 45.0, 25.0];
// function printTotal(bill){
//     let total = 0;
//     for(x= 0; x <bill.lenght; x++){
//         total = total +bill[x];
//     }
//     console.log(bill);
//     }

// printTotal(bill);











// Home Work #1
// December 1
// Assign the string value Sam to the username identifier
// // Tutorial //
// Understanding Variables, Scope, and Hoisting in JavaScript

// var username = "sam_shark";

//   // Check if variable is equal to value
//     if (username === "sam_shark") {
//     console.log(true);
//   }

//   // Assignment of various variables
// var name = "Sam";
// var spartans = 300;
// var kingdoms = [ "monkey", "birds", "fish" ];
// var poem = { roses: "red", violets: "blue" }; 
// var success = true;
// var nothing = null;

// // Send spartans variable to the console
// console.log(spartans);

// // Assign value to password variable
// var password = "hunter2";

// // Reassign variable value with a new value
// password = "hello";

// console.log(password);

// // Initialize a global variable
// var creature = "wolf";

// // Initialize a global variable
// var species = "human";
 
// function transform() {
//   // Initialize a local, function-scoped variable
//   var species = "hulk";
//   console.log(species);
// }

// // Log the global and local variable
// console.log(species);
// transform();
// console.log(species);



// var fullMoon = true;

// // // Initialize a global variable
// // let species = "human";

// if (fullMoon) {
//   // Initialize a block-scoped variable
//   let species = "hulk";
//   console.log(`It is a full moon. Lupin is currently a ${species}.`);
// }

// // console.log(`It is not a full moon. Lupin is currently a ${species}.`);

// // // Use var to initialize a variable
// var species = "human";

// if (fullMoon) {
//   // Attempt to create a new variable in a block
//   var species = "hulk";
//   console.log(`It is a full moon. Lupin is currently a ${species}.`);
// }

// console.log(`It is not a full moon. Lupin is currently a ${species}.`);


// // // Attempt to use a variable before declaring it
// console.log(x);

// // // Variable assignment
// var x = 100;


// // // Variable assignment without var
// var x = 100;


// // // The code we wrote
// // console.log(x);
// // var x = 100;

// // // How JavaScript interpreted it
// // var x;
// // console.log(x);
// // x = 100;

// // // Initialize x in the global scope
// // var x = 100;

// function hoist() {
//   // A condition that should not affect the outcome of the code
//   if (false) {
//     var x = 200;
//   }
//   console.log(x);
// }

// // hoist();

// // // Initialize x in the global scope
// // let x = true;

// function hoist() {
//   // Initialize x in the function scope
//   if (3 === 4) {
//     let x = false;
//   }
//   console.log(x);
// }

// // hoist();

// // // Attempt to overwrite a variable declared with var
// var x = 1;
// var x = 2;

// console.log(x);

// // // Attempt to overwrite a variable declared with let
// // let y = 1;
// // let y = 2;

// // console.log(y);

// // // Assign value to const
// const SPECIES = "human"; 

// // // Attempt to reassign value
// // SPECIES = "hulk";

// console.log(SPECIES);

// // // Declare but do not initialize a const
// // const TODO;

// // console.log(TODO);

// // // Create a CAR object with two properties
// const CAR = {
// 	color: "blue",
// 	price: 15000
// }

// // // Modify a property of CAR
// CAR.price = 20000;

// console.log(CAR);














// Homework #2
// Understanding Objects in JavaScript

// Initialize object constructor with new Object
// const objectConstructor = new Object();

// // Initialize object
// const henry = {
// 	name: "henry",
// 	race: "dwarf",
// 	weapon: "axe",
// 	greet: function() {
// 		return `Hi, my name is ${this.name}!`;
// 	},
// };
// console.log(henry);
// console.log(henry.weapon);
// console.log(henry.greet());

// // Add new age property to henry

// henry.age = 100;
// console.log(henry.age);

// // Add new fight method to henry
// henry.fight = function() {
// 	return `Henry attacks with an ${this.weapon}.`;
// }
// console.log(henry.fight());



// // Update weapon from axe to battle axe
// henry.weapon = "battle axe";
// console.log(henry);


// // Remove weapon from henry
// console.log(delete henry.weapon);

// console.log(henry);

// // Get keys and values of gimli properties
// for (let key in henry) {
//     console.log(key.toUpperCase() + ':', henry[key]);
//   }

// // Iterate through properties of gimli
// for (let key in henry) {
//     console.log(henry[key]);
    
//   }
//    // Initialize method on henry object to return property keys
// Object.keys(henry);
  
  











// HomeWork #3
// Understanding Arrays in JavaScript

// Assign the five oceans to five variables
// const ocean1 = "Pacific";
// const ocean2 = "Atlantic";
// const ocean3 = "Indian";
// const ocean4 = "Arctic";
// const ocean5 = "Antarctic";

// // Assign the five oceans
// let oceans = [
// 	"Pacific",
// 	"Atlantic",
// 	"Indian",
// 	"Arctic",
// 	"Antarctic",
// ];
// // Print out the first item of the oceans array
// console.log(oceans[0]);


// // Initialize array of shark species with array constructor
// let sharks = new Array(
// 	"Hammerhead",
// 	"Great White",
// 	"Tiger",
// );

// console.log(sharks);

// // Initialize array of mixed datatypes
// let mixedData = [
// 	"String",
// 	null,
// 	7,
// 	[
// 		"another",
// 		"array",
// 	],
// ];

// let seaCreatures = [
// 	"octopus",
// 	"squid",
// 	"shark",
// 	"seahorse",
// 	"starfish",
// ];
// console.log(seaCreatures.length);
// console.log(seaCreatures.indexOf("seahorse"));
// console.log(seaCreatures.indexOf("cuttlefish"));

// console.log(seaCreatures[1]);
// const lastIndex = seaCreatures.length - 1;

// console.log(seaCreatures[lastIndex]);
// console.log(seaCreatures[10]);


// let nestedArray = [
// 	[
// 		"salmon",
// 		"halibut",
// 	],
// 	[
// 		"coral",
// 		"reef",
// 	]
// ];

// console.log(nestedArray[1][0]);

// seaCreatures[5] = "whale";

// console.log(seaCreatures);

// seaCreatures[7] = "pufferfish";

// console.log(seaCreatures);

// console.log(seaCreatures[6]);

// // Append lobster to the end of the seaCreatures array
// seaCreatures.push("lobster");

// console.log(seaCreatures);

// // Append dragonfish to the beginning of the seaCreatures array
// seaCreatures.unshift("dragonfish");

// console.log(seaCreatures);

// seaCreatures.splice(7, 1);

// console.log(seaCreatures);

// let firstArray = seaCreatures.slice(0, 7);
// let secondArray = seaCreatures.slice(8, 10); 

// console.log(firstArray.concat(secondArray));

// console.log(seaCreatures);

// // Remove the last item from the seaCreatures array
// seaCreatures.pop();

// console.log(seaCreatures);

// // Remove the first item from the seaCreatures array
// seaCreatures.shift();

// console.log(seaCreatures);

// // Assign manatee to the first item in the seaCreatures array
// seaCreatures[0] = "manatee";

// console.log(seaCreatures);

// // Replace seahorse with sea lion using splice method
// seaCreatures.splice(3, 1, "sea lion");

// console.log(seaCreatures);

// // Create an array of shellfish species
// let shellfish = [
// 	"oyster",
// 	"shrimp",
// 	"clam",
// 	"mussel",
// ];

// // Loop through the length of the array
// for (let i = 0; i < shellfish.length; i++) {
//   console.log(i, shellfish[i]);
// }

// // Create an array of aquatic mammals
// let mammals = [
// 	"dolphin",
// 	"whale",
// 	"manatee",
// ];

// // Loop through each mammal
// for (let mammal of mammals) {
// 	console.log(mammal);
// }


// HomeWork #4
// For Loops, For...Of Loops and For...In Loops in JavaScript


// Initialize a for statement with 5 iterations
for (let i = 0; i < 4; i++) {
	// Print each iteration to the console
	console.log(i);
}

// Set initial variable to 0
let i = 0;

// Manually increment variable by 1 four times
console.log(i++);
console.log(i++);
console.log(i++);
console.log(i++);

// let i = 0;

i < 4;

i++

// Initialize a for statement with 5 iterations
for (let i = 0; i < 4; i++) {
	console.log(i);
}

// Declare variable outside the loop
let h = 0;

// Omit initialization and condition
for (; ; h++) {
	if (i > 3) {
		break;
	}
	console.log(h);
}

for (; ;) {
	if (h > 3) {
		break;
	}
	console.log(h);
	i++;
}
// Initialize empty array
let arrayExample = [];

// Initialize loop to run 3 times
for (let i = 0; i < 3; i++) {
	// Update array with variable value
	arrayExample.push(i);
	console.log(arrayExample);
}

// Declare array with 3 items
let fish = [ "flounder", "salmon", "pike" ];

// Initalize for loop to run for the total length of an array
for (let i = 0; i < fish.length; i++) {
	// Print each item to the console
	console.log(fish[i]);
}
const shark = {
	species: "great white",
	color: "white",
	numberOfTeeth: Infinity
}
// Print property names of object
for (attribute in shark) {
	console.log(attribute);
}

// Print property values of object
for (attribute in shark) {
	console.log(shark[attribute]);
}
// Print names and values of object properties
for (attribute in shark) {
	console.log(`${attribute}`.toUpperCase() + `: ${shark[attribute]}`);
}
//For..Of loop

// Initialize array of shark species
let sharks = [ "great white", "tiger", "hammerhead" ];

// Print out each type of shark
for (let shark of sharks) {
	console.log(shark);
}

// Loop through both index and element
for (let [index, shark] of sharks.entries()) {
	console.log(index, shark);
}

// Assign string to a variable
let sharkString = "sharks";

// Iterate through each index in the string
for (let shark of sharkString) {
	console.log(shark);
}






// HomeWork
// How To Define Functions in JavaScript


// function nameOfFunction() {
// 	// Code to be executed
// }

// // Initialize greeting function
// function greet() {
// 	console.log("Hello, World!");
// }

// // Invoke the function
// greet();

// Initialize greeting function
function greet() {
	console.log("Hello, World!");
}

// Invoke the function
greet();



// Initialize custom greeting function
function greet(name) {
	console.log(`Hello, ${name}!`);
}

// Invoke greet function with "Sammy" as the argument
greet("Henry");

// Initialize add function
function add(x, y) {
	return x + y;
}

// Invoke function to find the sum
add(9, 7);

//Function Expressions
// Assign add function to sum constant
const sum = function add(x, y) {
	return x + y;
}

// Invoke function to find the sum
console.log(sum(20, 5));

// Assign function to sum constant
const sum2 = function(x, y) {
	return x + y;
}

// Invoke function to find the sum
console.log(sum2(100, 3));



// Define multiply function
const multiply = (x, y) => {
	return x * y;
}

// Invoke function to find product
console.log(multiply(30, 4));

// Define square function
const square = x => {
	return x * x;
}

// Invoke function to find product
console.log(square(8));

// Define square function
const square2 = x => x * x;

// Invoke function to find product
console.log(square2(10));









// HomeWork
// Understanding Classes in JavaScript




// Initializing a function with a function expression
const x = function() {}
// Initializing a class with a class expression
const y = class {}

console.log(Object.getPrototypeOf(x));

console.log(Object.getPrototypeOf(y));


// Initialize a constructor from a function
const constructorFromFunction = new x();

console.log(constructorFromFunction);

// Initialize a constructor from a class
const constructorFromClass = new y();

console.log(constructorFromClass);



// Initializing a constructor function
function Hero(name, level) {
	this.name = name;
	this.level = level;
}

// Adding a method to the constructor
Hero.prototype.greet = function() {
	return `${this.name} says hello.`;
}

// Initializing a class definition
class Hero {
	constructor(name, level) {
		this.name = name;
		this.level = level;
	}

	// Adding a method to the constructor
	greet() {
		return `${this.name} says hello.`;
    }
}
const hero1 = new Hero('Varg', 1);
console.log(hero1);

function Hero(name, level) {
	this.name = name;
	this.level = level;
}

// Adding a method to the constructor
Hero.prototype.greet = function() {
	return `${this.name} says hello.`;
}

// Creating a new constructor from the parent
function Mage(name, level, spell) {
	// Chain constructor with call
	Hero.call(this, name, level);

	this.spell = spell;
}


