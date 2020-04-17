function format_name(name) {
	let arr = name.split(' ');
	let p = [];
	for (let i = 0; i < arr.length; i++) {
		p.push(arr[i][0].toUpperCase() + arr[i].slice(1).toLowerCase());
	}
	console.log(p.join(' '));
}

format_name('brit hasE');
