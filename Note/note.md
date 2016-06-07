#0、raceur编译器
	Google公司的Traceur（http://github.com/google/traceur-compiler）编译器，可以将ES6代码编译为ES5代码。
	使用方法：直接插入网页
	首先，必须在网页头部加载Traceur库文件
	<script src = "http://google.github.io/traceur-compiler/bin/traceur.js" type="text/javascript"></script>
	<script src="http://google.github.io/traceur-compiler/src/bootstrap.js" type="text/javascript"></script>
	<script>
		traceur.options.experimental = true;
	</script>
	<script type="module">
		//ES6代码
	</script>
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
	function example (){
		return [1,2,3];
	}
	var [a,b,c] = example();
	(3) 函数参数的定义
	funciton f({x,y,z}){
		//...
	}
	f({x:1,y:2,z:3})
	(4) 函数参数的默认值
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
#4、for-of 循环
	任何部署了Iterator接口的对象，都可以使用for-of循环遍历。
	我们如何遍历数组中的元素：
	（1） for循环
	for (var index = 0; index < myArray.length; index++) {
  		console.log(myArray[index]);
	}
	（2） forEach方法遍历数组
	myArray.forEach(function (value) {
		console.log(value);
	});
	（3） for-in循环
	for (var index in myArray) { // 千万别这样做！！
	    console.log(myArray[index]);
	}
	这绝对是一个糟糕的选择，为什么呢？
		1）在这段代码中，赋给index的值不是实际的数字，而是字符串“0”、“1”、“2”，此时很可能在无意之间进行字符串算数计算，例如：“2” + 1 == “21”，这给编码过程带来极大的不便。 
		2）作用于数组的for-in循环体除了遍历数组元素外，还会遍历自定义属性。举个例子，如果你的数组中有一个可枚举属性myArray.name，循环将额外执行一次，遍历到名为“name”的索引。就连数组原型链上的属性都能被访问到。 
		3）最让人震惊的是，在某些情况下，这段代码可能按照随机顺序遍历数组元素。 
		4）简而言之，for-in是为普通对象设计的，你可以遍历得到字符串类型的键，因此不适用于数组遍历。 
	（4）强大的for-of循环
	for (var value of myArray) {
	    console.log(value);
	}
	这是最简洁、最直接的遍历数组元素的语法； 
	这个方法避开了for-in循环的所有缺陷 ；
	与forEach()不同的是，它可以正确响应break、continue和return语句 ；
	for-of循环也可以遍历其它的集合，for-of循环不仅支持数组，还支持大多数类数组对象，例如DOM NodeList对象；
	for-of循环也支持字符串遍历，它将字符串视为一系列的Unicode字符来进行遍历。
