// propTypes
/* 
Use PropTypes to Define the Props You Expect
    使用proptype定义您期望的Props

    React provides useful type
checking features to verify that components receive props of the correct type
    组件接收到类型正确的props

    For example, your application makes an API call to retrieve data that you expect to be in an array, which is then passed to a component as a prop. You can set propTypes on your component to require the data to be of type array. This will throw a useful warning when the data is of any other type.

    比如应用做了API回调,来接收一个数组数据,然后你想把数组数据作为prop传递给下一个组件
    这个时候就可以用它来检查数据
    It's considered a best practice to set propTypes when you know the type of a prop ahead of time
    提前知道prop的数据类型是最好的,如果需要设置propTypes

    You can define a propTypes property for a component in the same way you defined defaultProps.
    定义方式和定义defaultProps的方式一样

    Here's an example to require the type function for a prop called handleClick
    这里有一个,请求handleClick的prop

    ????????????
    MyComponent.propTypes = { handleClick: PropTypes.func.isRequired }

    the PropTypes.func part         checks that handleClick is a function
    the PropTypes.func这个告诉react,handleClick是一个函数
    Adding isRequired tells React that handleClick is a required property for that component.
    isRequired告诉react,必须要传递一个handleClick
    You will see a warning if that prop isn't provided.


    Also notice that func represents function

    func代表函数
    Among the seven JavaScript primitive types
    7种基本数据类型
    function and boolean (written as bool) are the only two that use unusual spelling
    PropTypes.array,

    PropTypes.bool,
    PropTypes.func,

    PropTypes.number,
    PropTypes.object,
    PropTypes.symbol,
    PropTypes.string,

     // A React element.
  optionalElement: PropTypes.element,
    optionalMessage: PropTypes.instanceOf(Message),
    prop是一个类

    In addition to the primitive types, there are other types available.
    除了检查基本数据类型,还可以检查其他类型
    For example, you can check that a prop is a React element
    可以检查是不是一个react元素

 */

/* 
    Note: As of React v15.5.0, PropTypes is imported independently from React, like this: import PropTypes from 'prop-types';
    注:在React v15.5.0版本中，PropTypes是独立于React导入的，如下所示:从‘prop-types’导入PropTypes;

    import PropTypes from 'prop-types';
  */

  // 注意这里的话不需要加s

 const Items = (props) => {
    return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
  };
  
  // change code below this line
  Items.propTypes = {
    quantity:PropTypes.number.isRequired
  }
  // change code above this line
  
  Items.defaultProps = {
    quantity: 0
  };
  
  class ShoppingCart extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return <Items />
    }
  };
  