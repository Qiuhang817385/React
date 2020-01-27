![image-20200126125348931](C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200126125348931.png)

## 关键字冲突

![image-20200126131034580](C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200126131034580.png)

![image-20200126131237443](C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200126131237443.png)



![image-20200126131310741](C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200126131310741.png)

htmlfor defaultvalue classname



## 样式

![image-20200126131427667](C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200126131427667.png)

## map

![image-20200126131504029](C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200126131504029.png)



![image-20200126131535169](C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200126131535169.png)

map返回新数组











react组件es5的话其实就是函数



而ReactDom,第一个参数实际就是调用这个组件函数



![image-20200126135022343](C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200126135022343.png)

# es5的16不支持

![image-20200126135104019](C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200126135104019.png)

![image-20200126135136337](C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200126135136337.png)

## 只有props

 



## 父子组件传值的本质

![image-20200126135810000](C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200126135810000.png)

![image-20200126135841115](C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200126135841115.png)

![image-20200126135855051](C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200126135855051.png)





## 无状态组件的特性

组件不会被实例化

组件没有本身的this

this.ref或者this.state都不能访问

组件无法访问声明周期当中的方法

输入和输出不会被改变

![image-20200126143052185](C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200126143052185.png)





### 初始化组件的es5方式

单单学习使用,react16不支持

![image-20200126143400723](C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200126143400723.png)





## 生命周期方法

![image-20200126152552059](C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200126152552059.png)

对比新的视频来看



但是总的来说生命周期分成3个阶段







15的生命周期方法

例子,learning

the demo has outdated







## ES6当中的继承

本质

es6组件生命周期

![image-20200127152802361](C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200127152802361.png)

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<script type="text/javascript">
	//new 和 super干的事情
	//new创建了一个{}.并且{}.sno = sno
		//而super是 {}.父 = 父,都是调用了构造器的方法
		//extends则是继承方法,原型拷贝
		// 人类
		class Person{
			 constructor(name,age,sex){
			//constructor =  function(name,age,sex){
                 this.name=name;
                 this.age=age;
                 this.sex=sex;
			 }
			 eat(){
			 	alert("吃");
			 }
		}


		//学生类继承自Person类
		//extends 继承父类所有方法 原型拷贝
		  class Student extends Person{
	         constructor(sno,sdept,name,age,sex){
	         	super(name,age,sex);//继承父类所有属性
	         	//super();调用父类的constructor构造器方法
					//也就是{}.name = name 
				//而下面的new 就是{}.sno = sno
	         	this.sno=sno;
	         	this.sdept=sdept;
	         }
	         study(){
	         	alert("学习");
	         }
		  }
		  //new 的话会调用创建对象这个方法,调用student构造器的方法
		    // new {}
		    // Student.constructor() 初始化对象的属性
			
		  //const s1=new  Object Student("1001","计算机","tom",19,"男");
		  const s1=new   Student("1001","计算机","tom",19,"男");
	</script>
</head>
<body>
	
</body>
</html>



React.Component 
		   组件所有的属性:
		          this.props
		          this.state
		          this.refs

es5的11个变成了es6的9个

​		9个生命周期方法:
​		      初始化:3  

ES6 getDefaultPorps没啥用-->组件类的属性defaProps,getInitialSTate没有

<div name="">属性名和属性值

​		      更新:5
​		      卸载:1

		      所有的React组件的属性和生命周期方法，都继承自React.Component类
	
		      所有React组件的父类都是Component类
		      如果用户自定义组件，写了和Component类中同名的方法，子类覆盖了父类方法，


 # 改动

proptypes

![image-20200127160940934](C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200127160940934.png)

现在已经从react当中,分离了出去,需要重新装prop-types库

写法没有改变

![image-20200127161225129](C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200127161225129.png)

![image-20200127161239047](C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200127161239047.png)

![image-20200127162208155](C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200127162208155.png)

![image-20200127162351279](C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200127162351279.png)

## prop-types可以进行组件通信

![image-20200127162527720](C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200127162527720.png)