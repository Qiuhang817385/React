原来的都是hash router来实现

基于location-hash  #

现在的改成broswer-router

es5的history对象

相比redux也有一些方式

比如事件订阅

或者protypes生成全局环境

<img src="C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200128192257266.png" alt="image-20200128192257266" style="zoom:50%;" />![image-20200128192323788](C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200128192323788.png)



<img src="C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200128192334091.png" alt="image-20200128192334091" style="zoom:50%;" />

在安装react-router-dom的时候就已经安装了react-router

依赖于react-router

react-router-dom包含react-router

将包含的东西再次导出,加上一个react-dom



## 组件介绍

<img src="C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200128200907247.png" alt="image-20200128200907247" style="zoom:50%;" />

location.hash兼容性比较好,但是带了一个#号

browserRouter不配置服务器的话,直接修改地址栏里面的东西会报错



练习使用hashrouter

上线必须用browserrouter

## 导入方式

<img src="C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200128211312296.png" alt="image-20200128211312296" style="zoom:50%;" />

## router组件

<img src="C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200128212602102.png" alt="image-20200128212602102" style="zoom:50%;" />

把route当成父组件

给子组件会传递3个对象

![image-20200128213436506](C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200128213436506.png)

这个就是练习使用的hashrouter



## 补充,如果webpack配置了reactDom,provider就不用再导入,否则需要导入

<img src="C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200128213811133.png" alt="image-20200128213811133" style="zoom:50%;" />