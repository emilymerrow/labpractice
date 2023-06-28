// let num = 0;
// do {
//     console.log(num + 'is even');
//     num +=2;
// } while ( num <=10);

// let word = '';
// let words = [];
// while (word !== 'end') {
//     word = prompt('Enter a word ("end" to quit)');
//     if (word !== 'end' ) words.push(word);
//     alert(" You've entered: " + words.join(', '));
// }

// let num = 13;
// do {
//     console.log(num + ' is even');
//     num += 1;
// } while (num <+ 20);

// let colors = ['red', 'white', 'blue'];
// for ( let index = 0; index < colors.length; index++) {
//     console.log(colors[index]);
// }

// Set up a loop that iterates from 1 to 20.
// Inside the loop, check the current number to see if it is divisible by 3 and 5.
// If the number is divisible by both 3 and 5, output 'FizzBuzz'.
// If the number is divisible by 3, output 'Fizz'.
// If the number is divisible by 5, output 'Buzz'.
// If none of the above conditions are met, simply output the number itself.
// Repeat this process for each number in the range from 1 to 20.
// Run the code and observe the output.
// Now, with these instructions, you can attempt to write the code yourself and see if you can successfully implement the FizzBuzz logic. Good luck!


// let div = 8;
// for (i = 1; i < 20; i++) {
//     if ( i % 3 === 0 && i % 5 === 0) {
//         console.log('Fizzbuzz');
//     } else if (i % 3 === 0) {
//         console.log('Fizz');
//     } else if (i % 5 === 0) {
//         console.log('Buzz');
//     } else {
//         console.log(i);
//     }
// }

// Set up a loop that iterates from 1 to 30.
// Inside the loop, check if the current number is divisible by 3.
// If the number is divisible by 3, output 'Fizz'.
// If the number is not divisible by 3, but it is divisible by 5, output 'Buzz'.
// If the number is divisible by both 3 and 5, output 'FizzBuzz'.
// If none of the above conditions are met, simply output the number itself.
// Repeat this process for each number in the range from 1 to 30.
// Run the code and observe the output.


// let num = 22;

// for ( let i = 1; i <= 30; i++) {
//     if (i % 3 === 0) {
//         console.log('Fizz')
//     } else if ( i % 3 != 0 i % 5 === 0) {
//         console.log('Buzz')
//     } else if (i % 3 === 0 && i % 5 === 0 ) {
//         console.log('FizzBuzz')
//     } else {
//         console.log(i)
//     }
// }

// for (let i = 1; i <= 30; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log('FizzBuzz');
//     } else if (i % 3 === 0) {
//       console.log('Fizz');
//     } else if (i % 5 === 0) {
//       console.log('Buzz');
//     } else {
//       console.log(i);
//     }
//   }
  

// Set up a loop that iterates from 1 to 50.
// Inside the loop, check if the current number is divisible by 4.
// If the number is divisible by 4, output 'Fizz'.
// If the number is divisible by 7, output 'Buzz'.
// If the number is divisible by both 4 and 7, output 'FizzBuzz'.
// If none of the above conditions are met, output the number itself.
// Repeat this process for each number in the range from 1 to 50.
// Run the code and observe the output.



// for ( let i = 1; i <= 50; i++) {
//     if ( i % 4 === 0 && i % 7 === 0) {
//         console.log('FizzBuzz')
//     } else if ( i % 4 === 0) {
//         console.log('Fizz')
//     } else if ( i % 7 === 0) {
//         console.log('Buzz')
//     } else {
//         console.log(i)
//     }
// }

// Set up a loop that iterates from 1 to 100.
// Inside the loop, check if the current number is divisible by 3.
// If the number is divisible by 3, output 'Fizz'.
// If the number is divisible by 5, output 'Buzz'.
// If the number is divisible by both 3 and 5, output 'FizzBuzz'.
// If the number is not divisible by 3 or 5, but contains the digit 3, output 'Fizz'.
// If the number is not divisible by 3 or 5, but contains the digit 5, output 'Buzz'.
// If none of the above conditions are met, output the number itself.
// Repeat this process for each number in the range from 1 to 100.
// Run the code and observe the output.

// for (let i = 1; i <= 100; i++) {
//     if ( i % 3 === 0 && i % 5 === 0) {
//         console.log('FizzBuzz')
//     } else if ( i % 3 === 0 ) {
//         console.log('Fizz')
//     } else if ( i % 5 === 0 ) {
//         console.log('Buzz')
//     } else if ( i % 3 != 0 && i % 5 != 0)
// }

//ternary operator

// let message = score > 100 ? " you rock!: " : "keep trying!";

// // Set up a loop that iterates from 1 to 100.
// // Inside the loop, use the conditional (ternary) operator to check the number for divisibility by 3 and 5.
// // If the number is divisible by both 3 and 5, assign the value "FizzBuzz" to a variable.
// // If the number is only divisible by 3, assign the value "Fizz" to the variable.
// // If the number is only divisible by 5, assign the value "Buzz" to the variable.
// // If none of the above conditions are met, assign the number itself to the variable.
// // Output the value of the variable.
// // Repeat this process for each number in the range from 1 to 100.
// // Run the code and observe the output.
//  for ( let i = 1; i <= 100; i++) {

//  let output = (i % 3 === 0 && i % 5 === 0 ) ? 'FizzBuzz' :
//            (i % 3 === 0 ) ? 'Fizz' :
//            (i % 5 === 0 ) ? 'Buzz' :
//            i;
 
//            console.log(output);
//  }

// for (let i = 1; i <= 100; i++) {
//     let output = (i % 3 === 0 && i % 5 === 0) ? 'FizzBuzz' :
//                  (i % 3 === 0) ? 'Fizz' :
//                  (i % 5 === 0) ? 'Buzz' :
//                  i;
    
//     console.log(output);
//   }

// Instructions:

// Set up a loop that iterates from 1 to 100.
// Inside the loop, use the conditional (ternary) operator to check the number for divisibility by 2, 3, and 5.
// If the number is divisible by 2, assign the value "Even" to a variable.
// If the number is divisible by both 3 and 5, assign the value "FizzBuzz" to the variable.
// If the number is only divisible by 3, assign the value "Fizz" to the variable.
// If the number is only divisible by 5, assign the value "Buzz" to the variable.
// If none of the above conditions are met, assign the number itself to the variable.
// Output the value of the variable.
// Repeat this process for each number in the range from 1 to 100.
// Run the code and observe the output.
  
// let loggedInUsername = 'Em';

// function setWelcomeMessage(username) {
//     return `Welcome ${username} !`
// }
// // console.log(setWelcomeMessage(loggedInUsername), "<--");

// let loggedInUsername = 'brad';

// const chatRoomUser = [];

// function adduserToChatroom(username) {
//     const capitalizedUsername = capitalizedName
//     return chatRoomUser.unshift(username)
// }




//  const setLoggedInUser = function(username) {
//     loggedInUsername = capitalizedName(username);
//     console.log(loggedInUsername, "<----loggedinusername")

//  }
//  console.log(setLoggedInUser('eEmiLy'), "<---setLoggedInUser")

 
// function capitalizedName (name) {
//     return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
// }

// console.log(capitalizedName(name));


console.log('js is loaded')
//defining an object literal
//key value pairs
//you use the objects key to get or set a value inside the object

const person = {
    name: 'Em'
}

onsole.log('js file is loaded'); // <- I look for this message in the chrome console to confirm
// this javascript file is being executed


// We have some app, and after a person logs in, 
// we want to display a Welcome message.

// after the login 

let loggedInUserName = 'brad';
// chatroom 
// store all the users in the chatroom
const chatRoomUsers = [];


// Write a function that takes in a username,
// Capitalizes the first letter,
// and then adds the username to the chatRoomUsers array!
function addUserToChatRoom(username){
	// capitalize the first letter 
	// const capitalizedUsername = capitalizeFirstLetter(username)
	// return chatRoomUsers.unshift(capitalizedUsername)

	// or adding a user to the beginning of the array!
	chatRoomUsers.unshift(capitalizeFirstLetter(username))

}


// People are logging in to the chat room
addUserToChatRoom('brad');
addUserToChatRoom('kate');
addUserToChatRoom('julia');
addUserToChatRoom('stever');

console.log(chatRoomUsers)


// write a function that uses takes a username, and returns a welcome message

// defining the function
function setWelcomeMessage(username){
	return `Welcome ${username}`
}

console.log(setWelcomeMessage(loggedInUserName), " <-  setWelcomeMessage");

// function expression

const setLoggedInUser = function(username){
	loggedInUserName = capitalizeFirstLetter(username);
	console.log(loggedInUserName, " <--- loggedInUsername")
}

console.log(setLoggedInUser('jimmmmm'), " <--- setLoggedInUser");


// Write a function that will take in a name and return the name with the first letter capitalized, 
// and everything else lowercase
function capitalizeFirstLetter(username) {
		// grab the first letter and uppercase it, and add it to the rest of the word after index 0
    return username.charAt(0).toUpperCase() + username.slice(1).toLowerCase();
}

// How to capitalize the first letter in a string in javascript?