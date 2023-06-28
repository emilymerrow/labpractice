const person = {
	name: 'Jim',
	isOnline: false
}


function setOnlineStatus(user){
	user.isOnline = !user.isOnline; // ! operator flips booleans, true to false, false to true
	return user
}

function displayWelcomeMessage(user){
	return `Welcome to aol instant messanger ${user.name}`
}


function displayOnlineStatus(user){
	// ternary statement is this syntax
	return user.isOnline ? `${user.name} is online` : `${user.name} is offline`
}