let nums = [3,5,5,6,12,10,14,4,13,8];


const std = (arr) => {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	console.log('SUM:', sum);
	let mean = sum / arr.length;
	console.log('MEAN:', mean);
	console.log(arr);
	for (let i = 0; i < arr.length; i++) {
		let dist = arr[i] - mean;
		arr[i] = Math.pow(dist, 2);
	}
	console.log(arr);

	sum = 0;
	mean = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	console.log(arr, sum)
	mean = arr.length / sum;
	console.log(mean)
	return Math.sqrt(mean);
};

console.log(std(nums));
