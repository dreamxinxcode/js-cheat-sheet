let arr = ['eggs', 'water', 'frogs', 'tea'];

for (let i of arr) {
	console.log('for-of', i);
}

for (let i in arr) {
	console.log('for-in', arr[i]);
}

for (let i = 0; i < arr.length; i++) {
	console.log('c-style', arr[i]);
}