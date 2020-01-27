import React from 'react'
// state(M)改变,底下显示this.state.message改变v改变,
// 在input输入内容,v变化.改了M,最后同步到V,
// react是mvc也是mvvm框架？？mvvm是双向数据绑定,只关注数据,不关注dom
// MVVM

// react把事件处理重新封装,不是原生js事件,react event.js重新封装
class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.state = {
      message: ''
    }
  }
  handleKeyUp (e) {
    let val = e.target.value;
    this.setState({
      // message: val.trim()
      // 获取dom元素的值
      message: this.refs.myInput.value.trim()
    })
  }
  render () {
    return (
      <div>
        <input ref="myInput" type="text" onChange={this.handleKeyUp} />
        <p>
          {this.state.message}
        </p>

      </div>
    )
  }

}
export default App;