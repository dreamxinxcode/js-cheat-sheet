const myFunc = (callback) => {
	console.log('myFunc');
	callback();
};

myFunc(() => {
	console.log('in the cb');
});
