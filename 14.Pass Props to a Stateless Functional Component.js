// it's time to look at another feature very common in React: props.
/* 
    In React, you can pass props, or properties, to child components. 
    为子组件传递属性或者值
    Say you have an App component which renders a child component called Welcome which is a stateless functional component
    有一个app组件,子组件Welcome是一个无状态组件
    You can pass Welcome a user property by writing:

    <App>
        <Welcome user='Mark' />
    </App>

    You use custom HTML attributes created by you and supported by React to be passed to the component
    使用自定义自己创建的HTML属性来传递给组件

    In this case, the created property user is passed to the component Welcome
    这样可以把user传递给子组件welcome
    Since Welcome is a stateless functional component, it has access to this value like so:
    它可以这样访问这个值:

    const Welcome = (props) => <h1>Hello, {props.user}!</h1>

    It is standard to call this value props and when dealing with stateless functional components,
    这是调用这个属性和处理无状态组件的标准做法

    you basically consider it as an argument to a function which returns JSX
    但是类里面可能有点不一样
    With class components, you will see this is a little different.
 */

/* 
There are Calendar and CurrentDate components in the code editor. When rendering CurrentDate from the Calendar component, pass in a property of date assigned to the current date from JavaScript's Date object. Then access this prop in the CurrentDate component, showing its value within the p tags. Note that for prop values to be evaluated as JavaScript, they must be enclosed in curly brackets, for instance date={Date()}.
 */

//  这里面还不能使用this.props,当然可能是因为这个是个无状态组件,直接参数.date


const CurrentDate = props => {
return (
    <div>
      {/* change code below this line */}
        <p>The current date is: {props.date}</p>
      {/* 原来是这样调用 */}
      {/* change code above this line */}
    </div>
);
};

class Calendar extends React.Component {
    constructor(props) {
    super(props);
    }
    render() {
        return (
            <div>
            <h3>What date is it?</h3>
            {/* change code below this line */}
                        <CurrentDate date={Date()} />
            {/* change code above this line */}
            </div>
        );
}
}

//   What date is it?
// The current date is: Sun Jan 05 2020 00:27:57 GMT+0800 (中国标准时间)
