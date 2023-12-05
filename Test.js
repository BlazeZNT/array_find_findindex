function myFind(arr, callback) {
	for (let i = 0; i < arr.length; i++) {
		console.log(arr[i]);
		// if (arr[i] === callback(arr[i], i, [arr])) {
		if (callback(arr[i], i, [arr]) === true) return arr[i];
	}
}

hoho = myFind([1, 2, 3, 4, 5, 58, 98, 99, 150], function (val) {
	return val > 91;
});

function myFindIndex(arr, callback) {
	for (let i = 0; i < arr.length; i++) {
		// if (i === callback(arr[i], i, [arr])) {
		if (callback(arr[i], i, [arr]) === true) return i;
	}
	return -1;
}

sisi = myFindIndex([1, 2, 3, 4, 5, 58, 98, 99, 150], function (val, i) {
	return val > 200;
});
