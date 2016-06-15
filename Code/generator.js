function* helloWorldGenerator () {
	yield 'hello';
	yield 'world';
	return 'ending';
}

var hw = helloWorldGenerator();
hw.next();
hw.next();
hw.next();