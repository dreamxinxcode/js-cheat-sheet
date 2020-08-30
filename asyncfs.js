const fs = require('fs');

const data = fs.readFile('.config/bspwm/bspwmrc', { encoding: 'utf8' }, (err, data) => {
	console.log(data);
	let str = 'bspwm';
	if (data.includes(str)) {
		console.log('Found:', str);
	} else {
		console.log(str, 'not found')
	}
});
//console.log(typeof data);


//let str = 'Hello';
//if (data.includes(str)) {
//	console.log('found')
//}
