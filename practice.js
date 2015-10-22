//Once you complete a problem, open up Chrome and check the answer in the console.



//Create a function called isTyler that accepts name as it's only argument.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

  //Code Here

var name = 'Tyler';

  var isName = function (name) {
  	if (name === 'Tyler'){
  		return true;
  	} else {
  	return false;
  }
};

//Next problem



//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.

var getName = function() {
  var name = prompt("What is your name?");
  return name;
};

getName();

//Next Problem



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

var welcome = function(){
	alert("Welcome " + getName());
}

welcome();


//Next problem




//What is the difference between arguments and parameters?


parameter - when we’re defining a function/variable, creates the variable inside the function

argument - when we’re actually calling the function

They refer to the same thing, just at different times.


//Next problem



//What are all the falsy values in JavaScript and how do you check if something is falsy?


undefined, false, 0, '', null, NaN
 You check it with an IF statement and the material within the parentheses is what is being tested as falsy or truthy.


//Next Problem



//Create a function called myName that returns your name
var name = 'seth';
var myName = function() {
	return name;
}

//Now save the function definition of myName into a new variable called newMyName

var newMyName = myName();

//Now alert the result of invoking newMyName

alert(newMyName);

//Next problem



//Create a function called outerFn which returns an anonymous function which returns your name.
var name = 'seth'

var outerFn = function(){
	return function(){
		return name;
}
}

//Now save the result of invoking outerFn into a variable called innerFn.

var innerFN = outerFn();

//Now invoke innerFn.

innerFn();