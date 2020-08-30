const person = {
	name: 'Alice',
	age: 20,
	city: 'Victoria',
	friends: ['Bob', 'Lisa', 'Sally'],
	job: 'Developer'
};


for (const x in person) {
	console.log(x, person[x])
}