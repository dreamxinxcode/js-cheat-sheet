let array = [1, 2, 3, 4, 5];

const forEach = (arr, callback) => {
	for (let i = 0; i < arr.length; i++) {
		arr[i] = callback(arr[i]);
	}
};

console.log('Before ->', array);

forEach(array, (x) => {
	return x * 2;
});

console.log('After ->', array);
