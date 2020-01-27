import React, { Component } from 'react'

export default class AutoTime extends Component {
  constructor(props) {
    super(props);
    this.state = {
      minutes: 0,
      sec: 0,
      hours: 0
    }
  }
  showTime () {
    let timer = new Date();
    this.setState(() => {
      return {
        minutes: timer.getMinutes(),
        sec: timer.getSeconds(),
        hours: timer.getHours()
      }
    })
  }
  componentDidMount () {
    // 必须使用this
    // 必须使用this
    // 必须使用this
    // 必须使用this
    // 必须使用this
    this.showTime();
    // 在计时器里面调this.showTime,this的指向变成计时器的指向,变成了window,就会报错
    // window.setInterval(showTime(), 1000)
    // 解决办法

    // setInterval原本默认的this是window,现在可以改成了这个组件的this


    // setInterval(function () {
    //   this.showTime();
    // }.bind(this), 1000);
    // 使用es6的写法
    setInterval(() => {
      this.showTime()
    }, 1000);
  }

  render () {
    let { hours, minutes, sec } = this.state;
    return (
      <div>
        {/* 时:{this.props.hours}分:{this.props.minutes}秒:{this.props.sec} */}
        时:{hours}分:{minutes}秒:{sec}
      </div>
    )
  }
}
// AutoTime.defaultProps = {
//   minutes: 0,
//   sec: 0,
//   hours: 0
// };
