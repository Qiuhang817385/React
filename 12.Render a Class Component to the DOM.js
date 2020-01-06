// 类和正常的函数都可以作为组件来使用
// You may remember using the ReactDOM API in an earlier challenge to render JSX elements to the DOM

//  The process for rendering React components will look very similar
// so the rendering was done for you behind the scenes.
// 所以渲染是在幕后为你完成的。
//  none of the React code you write will render to the DOM     without making a call to the ReactDOM API.
//  而不需要调用ReactDOM API。
// Here's a refresher on the syntax:这里是语法复习:

// ReactDOM.render(componentToRender, targetNode).
// The first argument is the React component that you want to render.
// The second argument is the DOM node that you want to render that component within.

// React components are passed into ReactDOM.render() a little differently than JSX elements
// React组件被传递到ReactDOM.render()，这与JSX元素略有不同
//  For JSX elements, you pass in the name of the element that you want to render
// you need to use the same syntax as if you were rendering a nested component, for example
// ReactDOM.render(<ComponentToRender />, targetNode).
class TypesOfFood extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h1>Types of Food:</h1>
          {/* change code below this line */}
  <Fruits/><Vegetables/>
          {/* change code above this line */}
        </div>
      );
    }
  };
  
  // change code below this line
//   原来,渲染的是一个JSX语法
  ReactDOM.render(<TypesOfFood/>,document.getElementById("challenge-node"))