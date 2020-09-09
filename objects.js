let dog = {
  name: 'Rover',
  age: 5,
  breed: 'Shiba',
  owners: {
    names: ['Bob', 'Alice'],
  },
  ownersNames: function() {
		return this.owners.names.join(' and ');
	},
  bark() {
    console.log('Bark!');
  }
};


// Dot notaton
dog.name; // Rover


// Square bracket notation
dog['name']; // Rover


// Call a method
dog.bark(); // Bark!


// Loop over object
for (let property in dog) {
  console.log(property, dog[property]);
}

// name Rover
// age 5
// breed Shiba
// owners { names: [ 'Bob', 'Alice' ] }
// ownersNames [Function: ownersNames]
// bark [Function: bark]


// Check if object has a property
dog.hasOwnProperty('name');     // true
dog.hasOwnProperty('eyeColor'); // false


// Add an object to an object
let users = {
	user1: {
		id: "userRandomID",
    	email: "user@example.com",
    	password: "purple-monkey-dinosaur"
	}
};

users.user2 = {id: 1, email: 'me@gmail.com', password: '123123'};

console.log(users)