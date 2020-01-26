// There is another way to access state in a component.
/* 
    In the render() method, before the return statement, you can write JavaScript directly.
    For example, you could declare functions, access data from state or props, perform computations on this data, and so on. Then, you can assign any data to variables, which you have access to in the return statement.

    在render函数里面
    在return之前,可以写任何js语句
    在return之前,可以写任何js语句
    在return之前,可以写任何js语句
    方法写到render函数的外面
    方法写到render函数的外面
    方法写到render函数的外面
    方法写到render函数的外面
    方法写到render函数的外面

    render里面适合定义变量

    我靠我靠
    我靠我靠
    我靠我靠
    我靠我靠
    我靠我靠

    然后，您可以将任何数据分配给变量，您可以在return语句中访问这些变量。

    In the MyComponent render method, define a const called name and set it equal to the name value in the component's state.

    Because you can write JavaScript directly in this part of the code, you don't have to enclose this reference in curly braces.
    渲染这个name
    需要用jsx语句渲染,
    jsx允许在react里面写dom和数据
    Next, in the return statement, render this value in an h1 tag using the variable name. Remember, you need to use the JSX syntax (curly braces for JavaScript) in the return statement.
    不需要花括号

    在render函数里面，return之外，需要this
 */
class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: 'freeCodeCamp'
      }
    }
    render() {
      // change code below this line
      const name = this.state.name
      // change code above this line
      return (
        <div>
          { /* change code below this line */ }
          <h1>
          {name}
          </h1>
            
          { /* change code above this line */ }
        </div>
      );
    }
  };
  


{this.state.name}
{name}

// 这两个虽然都可以输出,但是不一样,第二个是jsx语法,第一个是访问的state.的name