<img src="C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200204172957027.png" alt="image-20200204172957027" style="zoom:50%;" />



执行1yield语句之后会返回一个语句的执行结果

这里的log函数的返回值是undefined,done表示yield没有执行完毕

<img src="C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200204173507474.png" alt="image-20200204173507474" style="zoom:50%;" />

同步的代码,但是是异步的过程

<img src="C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200204173802225.png" alt="image-20200204173802225" style="zoom:50%;" />

即

<img src="C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200204174137792.png" alt="image-20200204174137792" style="zoom:50%;" />



整个yield的返回值是什么,

默认是undefined

这里打印undefined

<img src="C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200204174322080.png" alt="image-20200204174322080" style="zoom:67%;" />

<img src="C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200204174443952.png" alt="image-20200204174443952" style="zoom:50%;" />

第二次调用的next,把传进去的参数,作为第一个的返回值

也就是先赋值给name,再执行第二条语句



一般第二次next传递的参数,是第一次的next的value值

a = t1.next();

t1.next(a.value)



数组有哪些变异方法?

影响原来数组的就叫变异方法,不影响的就是非变异方法

什么是回调地狱

saga的原理



# demo6

<img src="C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200204182329307.png" alt="image-20200204182329307" style="zoom:50%;" />





这个value值就是promise对象



嵌套在函数的内部

然后还依赖于函数返回的结果



## 递归写法

<img src="C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200204204704418.png" alt="image-20200204204704418" />

<img src="C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200204204704418.png" alt="image-20200204204704418" style="zoom:50%;" />![image-20200204212244531](C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200204212244531.png)

![image-20200204212244531](C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200204212244531.png)

![image-20200204212408728](C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200204212408728.png)

回调地狱![image-20200204212425076](C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200204212425076.png)