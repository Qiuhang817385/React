![image-20200129135130045](C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200129135130045.png)



## 私有路由



### 数据传递

<img src="C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200129142303985.png" alt="image-20200129142303985" style="zoom:50%;" />![image-20200129142756344](C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200129142756344.png)

### link组件

![image-20200129142756344](C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200129142756344.png)

to的值相当于href

### demo7

<img src="C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200129144229171.png" alt="image-20200129144229171" style="zoom:50%;" />

<img src="C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200129144045290.png" alt="image-20200129144045290" style="zoom:50%;" />

这里的history是h5新增的

不是es3里面的history

<img src="C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200129144550903.png" alt="image-20200129144550903" style="zoom:50%;" />![image-20200129184953250](C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200129184953250.png)

## 传递的值,到子组件的props的location对象当中

<img src="C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200129185006773.png" alt="image-20200129185006773" style="zoom:50%;" />



每次单击link

其实就是往history对象当中添加东西

每次都会添加会报警告

这个时候写replace就相当于替换而不是再添加

<img src="C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200129185434348.png" alt="image-20200129185434348" style="zoom:50%;" />

## 组件传值

<img src="C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200129185505883.png" alt="image-20200129185505883" style="zoom:50%;" />

## 怎么通过路由来进行数据传递

1.location

2.路由配置	:形参数据

<img src="C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200129190200629.png" alt="image-20200129190200629" style="zoom:50%;" />

2.2第二种方式传递

link

![image-20200129190250951](C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200129190250951.png)

子组件接收

![image-20200129190309536](C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200129190309536.png) 

路由

<img src="C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200129190948425.png" alt="image-20200129190948425" />

![image-20200129191049714](C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200129191049714.png)

专门操作search数据

<img src="C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200129191152616.png" alt="image-20200129191152616" style="zoom:50%;" />

code<img src="C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200129191242264.png" alt="image-20200129191242264" style="zoom:50%;" />



## nav-link组件

<img src="C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200129192130055.png" alt="image-20200129192130055" style="zoom:50%;" />

默认样式是active

## switch组件,两种解决方案

第一种:exact精准匹配

第二种:switch

<img src="C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200129193219670.png" alt="image-20200129193219670" style="zoom:50%;" />![image-20200129194227893](C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200129194227893.png)

## redirect重定向组件

<img src="C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200129193219670.png" alt="image-20200129193219670" style="zoom:50%;" />![image-20200129194227893](C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200129194227893.png)

1.有的地址发生了更改,连接地址没有更改,使用重定向

2.登录验证,登录成功或者失败,重定向--这种是纯组件形式来实现

也可以使用history.push跳转--这种是js方式来实现

<img src="C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200129195536771.png" alt="image-20200129195536771" style="zoom:50%;" />

<img src="C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200129195716301.png" alt="image-20200129195716301" style="zoom:50%;" />



# 路由的高阶组件

<img src="C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200129195852094.png" alt="image-20200129195852094" style="zoom:50%;" />

如果想要跳转或者传递数据,那么必须传递location,match和history

但是路由必须放到route里面,这个route父组件

现在的问题,组件没有放到路由表当中

但是还想用着三个对象

<img src="C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200129200353465.png" alt="image-20200129200353465" style="zoom:50%;" />

## prompt组件

![image-20200129202630464](C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200129202630464.png)

一般不用

## 配置式路由

<img src="C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200129202723917.png" alt="image-20200129202723917" style="zoom:50%;" />![image-20200129202940247](C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200129202940247.png)

## 定制式路由了解

<img src="C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200129203100034.png" alt="image-20200129203100034" style="zoom:67%;" />

子路由