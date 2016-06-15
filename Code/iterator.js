function makeIterator (array) {
	var nextIndex = 0;
	return {
		next: function () {
			return nextIndex < array.length ? {value:array[nextIndex++],done:false}:{value:undefined,done:true};
		}
	}
}

var array = [1,2,3,'a','b'];
for( var a in array) {
	console.log(a);
}
for( var a of array) {
	console.log(a);
}