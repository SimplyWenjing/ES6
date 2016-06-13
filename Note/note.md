#0、raceur编译器
	Google公司的Traceur（http://github.com/google/traceur-compiler）编译器，可以将ES6代码编译为ES5代码。
	使用方法：直接插入网页
	首先，必须在网页头部加载Traceur库文件
	```
	<script src = "http://google.github.io/traceur-compiler/bin/traceur.js" type="text/javascript"></script>
	<script src="http://google.github.io/traceur-compiler/src/bootstrap.js" type="text/javascript"></script>
	<script>
		traceur.options.experimental = true;
	</script>
	<script type="module">
		//ES6代码
	</script>
	```
	type属性的值是module，这是Traceur用来辨识ES6代码的标识，编译器会自动将所有标记了type=module的代码编译为ES5代码，然后交给浏览器执行
#1、let命令
    ES6新增了let命令，用于声明变量，用let声明的变量，只在let命令所在的代码块内有效。
    let其实是为JavaScript新增了块级作用域。
#2、const命令
    const用来声明常量，一旦声明，其值就不能改变。
    const与let的作用域相同，只在声明所在的块级作用域内有效。
    const声明的常量不可重复声明
#3、数组的解构
	ES6允许按照一定模式，从数组和对象中提取值，对变量进行复制，这被称为解构
	例如 var [a,b,c] = [1,2,3]//本质上属于模式匹配，只要两边的模式相同，左边的变量就会被赋予相应的值。
	注意：解构只能用于数组或者对象。其他原始类型的值都可以转化为相应的对象，但是undefined和null不能转化为对象，所以不能够解构。
	对象的解构：
	数组的元素是按照次序排列的，变量的取值由它的位置决定，而对象的属性没有次序，变量必须与属性同名，才能取到正确的值
	解构的用途：
	（1）交换变量的值
	（2）从函数返回多个值
	```
	function example (){
		return [1,2,3];
	}
	var [a,b,c] = example();
	```
	(3) 函数参数的定义
	```
	funciton f({x,y,z}){
		//...
	}
	f({x:1,y:2,z:3})
	```
	(4) 函数参数的默认值
	```
	jQuery.ajax= function (url,{
		async = true,
		beforeSend = function () {},
		cache = treu,
		complete = function () {},
		crossDomain = false,
		global = true.
		}) {
			//...
		}
	```
#4、for-of 循环
	任何部署了Iterator接口的对象，都可以使用for-of循环遍历。
	我们如何遍历数组中的元素：
	（1） for循环
	```
	for (var index = 0; index < myArray.length; index++) {
  		console.log(myArray[index]);
	}
	```
	（2） forEach方法遍历数组
	```
	myArray.forEach(function (value) {
		console.log(value);
	});
	```
	（3） for-in循环
	```
	for (var index in myArray) { // 千万别这样做！！
	    console.log(myArray[index]);
	}
	```
	这绝对是一个糟糕的选择，为什么呢？
		1）在这段代码中，赋给index的值不是实际的数字，而是字符串“0”、“1”、“2”，此时很可能在无意之间进行字符串算数计算，例如：“2” + 1 == “21”，这给编码过程带来极大的不便。 
		2）作用于数组的for-in循环体除了遍历数组元素外，还会遍历自定义属性。
		举个例子，如果你的数组中有一个可枚举属性myArray.name，循环将额外执行一次，遍历到名为“name”的索引。就连数组原型链上的属性都能被访问到。 
		3）最让人震惊的是，在某些情况下，这段代码可能按照随机顺序遍历数组元素。 
		4）简而言之，for-in是为普通对象设计的，你可以遍历得到字符串类型的键，因此不适用于数组遍历。 
	（4）强大的for-of循环
	```
	for (var value of myArray) {
	    console.log(value);
	}
		1）这是最简洁、最直接的遍历数组元素的语法； 
		2）这个方法避开了for-in循环的所有缺陷 ；
		3）与forEach()不同的是，它可以正确响应break、continue和return语句 ；
		4）for-of循环也可以遍历其它的集合，for-of循环不仅支持数组，还支持大多数类数组对象，例如DOM NodeList对象；
		5）for-of循环也支持字符串遍历，它将字符串视为一系列的Unicode字符来进行遍历。
#5、字符串的扩展
	1)、ES6提供了3中新方法来确定一个字符串是否包含在另一个字符串中：
		（1）contains():返回布尔值，表示是否找到了参数字符串
		（2）startsWith():返回布尔值，表示参数字符串是否在源字符串的头部
		（3）endsWith():返回布尔值，表示参数字符串是否在源字符串的尾部
		例如：
		var s = "Hello world!";
		s.startsWith("Hell");//true
		s.endsWith("!");//true
		s.contains("o");//true

		以上三个函数都支持第二个参数，表示开始搜索的位置
		s.startsWith("o",4);//true
		s.endsWith("e",2);//true
	2）repeat()
		返回一个新的字符串，表示将原字符串重复n次
		"x".repeat(3);//"xxx"
	3) 模板字符串
		模板字符串是增强版的字符串，用反引号（`）标识。它可以当作普通字符串使用，也可以用来定义多行字符串，或者在字符串中嵌入变量。
		//普通字符串
		`Hello World`;
		//多行字符串
		`Hello
		World!`
		//字符串中嵌入变量
		var name = 'Bob',time = "today";
		`Hello ${name},how are you ${time}?`;
		在模板字符串中嵌入变量，需要将变量名写在${}中。

#6、数值的扩展
	(1) Number.isFinite() 和 Number.isNaN()
		用来检查Infinite和NaN这两个特殊值
		这两个方法仅对数值有效，对于飞数值一律返回false。
		Number.isFinite("25");//false
		isFinite("25");//true
	(2) Number.parseInt() ,Number.parseFloat()
		ES6将全局方法parseInt()和parseFloat()移植到了Number对象上，这样做的目的是逐步减少全局方法，使语言逐步模块化。
	(3) Math的扩展
		Math.trunc() //用于去除一个数的小数部分，返回其整数部分
#7、数组的扩展
	(1) Array.of()//用于将一组值转换为数组
		Array.of(1,2,3) //[1,2,3]
	(2) find() //用于找出第一个符合条件的数组元素，它的参数是一个回调函数，所有数组元素依次遍历该回调函数，直到找出第一个返回值为true的元素，然后返回该元素，否则返回undefined。

	[1,,5,10,15] .find(function (value,index,arr) {
		return value > 9;
		}) //10
		findIndex()//返回第一个符合条件的数组元素的位置，如果所有元素都不符合，则返回-1
	(3) fill() //使用给定值填充一个数组
	**(4) 数组推导**
	数组推导：允许直接通过现有数组生成新数组。
	var a1 = [1,2,3,4];
	var a2 = [for (i of a1) i*2];//[2,4,6,8]
	for of 后面还可以附加if语句，用来设定循环的限制条件
	var years = [2000,2004,2008,2012,2016];
	[for (year of years) if (year >2007)];//[2008,2012,2016]
	[for (year of years) if(year>2007&& year<2013)];//[2008,2012]
#8、函数的扩展
	（1） 为函数的参数设置默认值。
		function Point (x=0,y=0) {
			this.x = x;
			this.y = y;
		}
		任何带有默认值的参数，都被是为可选参数，不带默认值的参数，则被视为必需参数
	（2）rest参数
	ES6引入了rest参数（...变量名），用于获取函数的多于参数，rest参数后面不能再有其他参数，否则会报错。
	function add(...values){
		let sum = 0;
		for(var value of values) {
			sum +=value;
		}
		return sum;
	}
	add(2,5,3);//10
	（3）扩展运算符...
	扩展运算符好比rest参数的逆运算，将一个数组转换为用逗号分隔的参数序列。
	var a=[1];
	var b=[2,3];
	var c=[4,5,6];
	var d=[0,...a,...b,...c];
	console.log(d);//[0,1,2,3,4,5,6];
	（4）箭头函数=>
	var f = v => v;
	等同于：
	var f = function (v) {
		return v;
	};
	var f = () => 5;
	等同于：var f = function (){
		return 5;
	}
	简化函数：
	[1,2,3].map(function(x){
		return x*x;
		});
	//箭头函数写法
	[1,2,3].map(x=>x*x);
	注意：
	函数体内的this对象，绑定定义时所在的对象，而不是使用时所在的对象；
	不可以当作构造函数，即不可以使用new命令，否则报错；
	不可以使用arguments对象，该对象在函数体内不存在；
	由于this在箭头函数中被绑定，所以不能用call（），apply（），bind（）修改this指向
#8、Set 和 Map
	（1） Set类似于数组，不过其成员值都是唯一的，没有重复的值。
		  Set本身是一个构造函数，用来生成Set数据结构。
		  例如： 
		  	var s = new Set();
		  	[2,3,4,5,5,2,2].map(x => s.add(x));
		  	for(i of s ){
		  		console.log(i);//2,3,4,5
		  	}
		  	//可以用数组对set进行初始化
		  	var items = new Set([1,2,2,2,2,3]);
		  	console.log(items.size);//3
		  Set结构的方法：
		  	add(value);delete(value);has(value);clear():清除所有成员
		  Set结构的属性：
		  	Set.prototype.constructor:构造函数，默认就是Set函数
		  	Set.prototype.size:返回Set的成员总数
		  	//去除数组中重复元素
		  	function dedupe (array) {
				return Array.from(new Set(array));
		  	}
	（2） Map结构，类似于对象，也是键值对的集合，但是，“键”的范围不限定于字符串，对象也可以当作键。
		  例如：
		  	var m = new Map();
		  	o = {
		  		p:"Hello World!";
		  	}
		  	m.set(o,"content");
		  	console.log(m.get(o));//content
		  Map的属性：
		  size:返回成员总数；
		  Map的方法:
		  set(key,value);get(key);has(key);delete(key);clear()
		  Map的遍历
		  map.keys():返回键名的遍历器
		  map.values():返回键值的遍历器
		  map.entries():返回所有成员的遍历器