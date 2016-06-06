#0、raceur编译器
	Google公司的Traceur（http://github.com/google/traceur-compiler）编译器，可以将ES6代码编译为ES5代码。
	<font color="green">使用方法</font>
	###直接插入网页
	首先，必须在网页头部加载Traceur库文件
	<script src = "http://google.github.io/traceur-compiler/bin/traceur.js" type="text/javascript"></script>
	<script src="http://google.github.io/traceur-compiler/src/bootstrap.js" type="text/javascript"></script>
	<script>
		traceur.options.experimental = true;
	</script>
	<script type="module">
		//ES6代码
	</script>
	**type属性的值是module，这是Traceur用来辨识ES6代码的标识，编译器会自动将所有标记了type=module的代码编译为ES5代码，然后交给浏览器执行**
#1、let命令
    ####ES6新增了let命令，用于声明变量，用let声明的变量，只在let命令所在的代码块内有效。
    ####let其实是为JavaScript新增了块级作用域。
#2、const命令
    ####const用来声明常量，一旦声明，其值就不能改变。
    ####const与let的作用域相同，只在声明所在的块级作用域内有效。
    ####const声明的常量不可重复声明