const rec = (num) => {
	if (num < 10) {
		console.log(num);
		rec(num + 1);
	} else {
		console.log('end');
	}
	
	
};

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

rec(1);
