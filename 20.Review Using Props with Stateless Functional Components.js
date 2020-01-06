// 回顾无状态组件的props
/* 

无状态函数和无状态组件
无状态函数和无状态组件
无状态函数和无状态组件
无状态函数和无状态组件
无状态函数和无状态组件
    These components act like pure functions.
    一个纯函数

    They accept props as input and return the same view every time they are passed the same props
    接受并且返回相同的props
    它们接受props作为输入，每次传递相同的props时都返回相同的视图

    terminology 术语

    A stateless functional component 
    一个无状态函数就是接收props并且返回JSX
    一个无状态函数就是接收props并且返回JSX
    一个无状态函数就是接收props并且返回JSX
    is any function you write which accepts props and returns JSX.
    是一个你自己写的函数可以接受props和返回JSX,就是视图
    A stateless component, on the other hand, is a class that extends React.Component, 
    无状态组件是一个类,
    but does not use internal state (covered in the next challenge).
    但是不会使用内部的状态
    Finally,
    有状态组件包含内部自身的状态
    a stateful component is a class component that does maintain its own internal state.
    You may see stateful components referred to simply as components or React components.
    您可能会看到有状态组件被简单地称为组件或React组件。
    referred    被称作为

    A common pattern is to try to minimize statefulness and to create stateless functional components wherever possible. 
    一个通用模式是,尽可能创建无状态组件,最小化有状态组件
    This helps contain your state management to a specific area of your application
    这有助于将状态管理包含到应用程序的特定区域
    contain  a to b
    把a包含到b

    making it easier to follow   how changes to state affect its behavior.
    把 状态更改怎么影响行为    的跟踪   变得更加简单



    The code editor has a CampSite component that renders a Camper component as a child. Define the Camper component and assign it default props of { name: 'CamperBot' }. Inside the Camper component, render any code that you want, but make sure to have one p element that includes only the name value that is passed in as a prop. Finally, define propTypes on the Camper component to require name to be provided as a prop and verify that it is of type string.

    这个任务厉害了

 */

class CampSite extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <Camper/>
        </div>
      );
    }
  };
  // change code below this line
  
  class Camper extends React.Component{
    constructor(props){
      super(props);
    }
    render(){
      return(
        <p>{this.props.name}</p>
      )
    }
  }
  Camper.defaultProps = {
    name:'CamperBot'
  }
  Camper.propTypes = {
    name:PropTypes.string.isRequired
  }
  
// 第二种答案,就是一个纯函数,这里return加不加括号都可以
// 第二种答案,就是一个纯函数,这里return加不加括号都可以
// 第二种答案,就是一个纯函数,这里return加不加括号都可以
// 第二种答案,就是一个纯函数,这里return加不加括号都可以
// 第二种答案,就是一个纯函数,这里return加不加括号都可以
// 第二种答案,就是一个纯函数,这里return加不加括号都可以
  const Camper=(props)=>{
    return (<div><p>
    {props.name}
    </p></div>)
  };
  Camper.defaultProps = {
    name: 'CamperBot'
  }
  Camper.propTypes = {
    name:PropTypes.string.isRequired
  }