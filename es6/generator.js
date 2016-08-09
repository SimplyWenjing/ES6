function* helloWorldGenerator () {
	yield 'hello';
	yield 'world';
	return 'ending';
}

var hw = helloWorldGenerator();
hw.next();
hw.next();
hw.next();

function* foo() {
	yield 1;
	yield 2;
	yield 3;
	yield 4;
	yield 5;
	return 6;
}

for( let v of foo()) {
	console.log(v);
}