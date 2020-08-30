const cat = {
	name: 'kitty',
	age: 7,
	owners: {
		names: ['bob', 'lisa'],
		address: '244 21st st',
		phone: '555-555-5555'
	},
	likes: ['fish', 'sleeping', 'treats'],
	ownersNames: function() {
		return this.owners.names.join(' and ');
	}
};

// let dogs = [
//   {name: 'rover', age: 5, owners: ['Jim', 'Bob']},
//   {name: 'buster', age: 5, owners: ['Jim', 'Bob']},
//   {name: 'max', age: 5, owners: ['Jim', 'Bob']}
// ];


console.log(cat.ownersNames());