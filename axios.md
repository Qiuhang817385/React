roadhog是dva的webpack环境



jq-ajax的麻烦之处

转码器,自动把js对象转换成urlencode数据

还要指定编码



比fetch更少的是axios

![image-20200128122945511](C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200128122945511.png)

![image-20200128123043046](C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200128123043046.png)

![image-20200128123056292](C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200128123056292.png)



## 实验1

![image-20200128123123046](C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200128123123046.png)







## 什么时候使用props

爹传儿子的时候使用

redux里面的store变化链接进来才用

也就是父子组件传值的时候才使用props



## 在react当中怎么获取dom

分为虚拟dom和真实dom

虚拟dom:this.refs

而真实dom,三种方法都可以e.target,getelement,或者thisref

state和props相同点:都是仅仅可读的

<img src="C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200128131118852.png" alt="image-20200128131118852" style="zoom:50%;" /> 



## 带参数请求,写法1和写法2

<img src="C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200128131740262.png" alt="image-20200128131740262" style="zoom:50%;" />

如果加上name=jarry

mockjs是拦截不到的

写法2

<img src="C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200128131855702.png" alt="image-20200128131855702" style="zoom:50%;" />![image-20200128142519327](C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200128142519327.png)

## post方法带请求参数

和jq不一样

jq默认把js对象转成urlencode数据,而axios默认发送接收的都是json

![image-20200128142519327](C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200128142519327.png)



axios把js对象转换成json字符串

所以mock的哪一方,接到的option是字符串,需要转成js对象再写入值当中

<img src="C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200128144347000.png" alt="image-20200128144347000" style="zoom: 50%;" />

## 登录实例

<img src="C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200128145034184.png" alt="image-20200128145034184" />

## 请求多个接口

![image-20200128150923011](C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200128150923011.png)

显示不同的新闻,新闻在不同的服务器上面

## 第二种写法

<img src="C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200128182055280.png" alt="image-20200128182055280" style="zoom:50%;" />

1.axios.get

2.axios({

​	url:

})

如果需要urlencode格式来发送,那么需要参数做处理

<img src="C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200128182145858.png" alt="image-20200128182145858" style="zoom:50%;" />

也支持这样的写法



# 疑惑点区别

urlencode数据和json数据和js对象

## restful请求风格

![image-20200128182707280](C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200128182707280.png)

## 跨域解决方式

![image-20200128182930469](C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200128182930469.png)





## react属性延展

<img src="C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200128183027016.png" alt="image-20200128183027016" style="zoom:50%;" />

需要做一些配置

什么是属性延展

把我们的自身对象延展成组件的属性值对

<img src="C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200128183539119.png" alt="image-20200128183539119" style="zoom:67%;" />

<img src="C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200128183621596.png" alt="image-20200128183621596" style="zoom:67%;" />

this里面的所有东西都在里面了

传输的变多了,写起来省事

在react-router当中用的比较多

重名会覆盖

<img src="C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200128183925414.png" alt="image-20200128183925414" style="zoom:67%;" />