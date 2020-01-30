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

### 给子组件会传递3个对象

这点是很重要的,如果在home组件当中再次进行跳转,那么就需要用到route当中的方法

这些方法,被传入到home组件的props当中

route是这些组件的父组件,而父组件传递子组件只能通过props

可以在子组件的render当中打印this.props,查看这三个属性<img src="C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200128215211464.png" alt="image-20200128215211464" style="zoom:50%;" />

<img src="C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200128214959504.png" alt="image-20200128214959504" style="zoom:50%;" />

### history的push方法相当于location.href,用于动态切换路由

![image-20200128213436506](C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200128213436506.png)

这个就是练习使用的hashrouter



## 补充,如果webpack配置了reactDom,provider就不用再导入,否则需要导入

<img src="C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200128213811133.png" alt="image-20200128213811133" style="zoom:50%;" />





## react-router功能

通过地址栏变化切换不同组件或者组件的状态,可以传递数据

<img src="C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200128220254633.png" alt="image-20200128220254633" style="zoom:50%;" />![image-20200128221304332](C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200128221304332.png)

## 组件属性

<img src="C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200128221318162.png" alt="image-20200128221318162" style="zoom:50%;" />

strict

<img src="C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200128221457686.png" alt="image-20200128221457686" style="zoom:50%;" />

同时使用,一般不用

<img src="C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200128221614532.png" alt="image-20200128221614532" style="zoom:50%;" />



## route组件的3种渲染方式

<img src="C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200128223642448.png" alt="image-20200128223642448" style="zoom:50%;" />

临时的操作点,render使用的时机

就比如,在组件当中进行路由跳转的判断,只是一个临时的状态.

重定向判断给其他组件传数据



### 补充

rest结构,属性延展

<img src="C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200128224744576.png" alt="image-20200128224744576" style="zoom:50%;" />

上面的是es6支持

下面的是react支持



### 抽离babel配置文件

<img src="C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200128225802594.png" alt="image-20200128225802594" style="zoom:50%;" />