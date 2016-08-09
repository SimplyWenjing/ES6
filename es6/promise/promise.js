function timeout (ms) {
	return new Promise ((resolve,reject) => {
		setTimeout(resolve,ms,'done');
	});
}

timeout(100).then ((value) => {
	console.log(value);
});

//用Promise实现Ajax

var getJSON = function (url) {
	var promise = new Promise (function (resolve,reject){
		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = handler;
		xhr.open("GET",url);
		// xhr.responseType = 'json';
		// xhr.setRequestHeader("Accept","application/json");
		xhr.send();
		function handler () {
			if (this.readyState == 4) {
				if (this.status >= 200 && this.status < 300 || this.status == 304) {
					resolve(this.responseText);
				} else {
					reject(new Error (this.statusText));
				}
			}
		};;
	});
	return promise;
};

getJSON("../../../es6/es6/promise/data.json").then(function (json) {
	console.log("sucess:" + json);
},function (error) {
	console.log("error:" + error);
});