const dog = {
	name: 'Inu',
	age: 5,
	breed: 'Shiba' 
};

const keys = Object.keys(dog);

for (key of keys) {
	console.log(key);
}
