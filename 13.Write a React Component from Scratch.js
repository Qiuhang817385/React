// Write a React Component from Scratch
// 从头开始编写React组件
// the case and punctuation(标点符号) matter
// 大小写和标点符号很重要
// 还要确保调用组件的构造函数。
// Make sure to call the constructor for your component, too.

class MyComponent extends React.Component{
    render(){
        return(
            <div>
                <h1>My First React Component!</h1>
            </div>
        )
    }
}
// 书写一个自己的React组件
ReactDOM.render(<MyComponent/>,document.getElementById("challenge-node"))