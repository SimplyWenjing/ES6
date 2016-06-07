//测试for-of循环
var map = new Map();
map.set ('name','vicky');
map.set('age','24');

for(let [key,value] of map) {
	console.log(key + ":" + value);
}