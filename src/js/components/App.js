
import React, { Component } from 'react'
import $ from 'jquery';
// 使用mock.js
// 联调的时候需要删除这个mockjs
import './mock/dataMock';
import Img1 from './../../img/1.gif';
export default class componentName extends Component {
  constructor() {
    super();
    this.state = {
      txt: "",
      data: [],
      dataMock: [],
      imgShow: { display: 'block' },
      infoShow: { display: 'none' }
    }
  }
  componentDidMount () {
    // 实验1,get方法请求字符串html
    $.ajax({
      url: "mock/data.html",
      type: "GET",
      dataType: "html",
      // 这里改成箭头函数
      success: (data) => {
        // 这里的this也需要修改
        // this.setState is not a function
        this.setState(() => ({
          txt: data
        }))
      }
    });
    // 实验2,静态get方法请求字符串json数据
    $.ajax({
      url: "mock/data.json",
      type: "GET",
      dataType: "json",
      // 这里改成箭头函数
      success: (data) => {
        // 这里的this也需要修改
        // this.setState is not a function
        this.setState(() => ({
          data: data.data
        }))
      }
    });
    // 实验3,静态get方法请求mockjs数据
    $.ajax({
      url: "/dignosis",
      type: "GET",
      dataType: "json",
      // 这里改成箭头函数
      success: (data) => {
        // 这里的this也需要修改
        // this.setState is not a function
        this.setState(() => ({
          dataMock: data.data,
          imgShow: { display: 'none' },
          infoShow: { display: 'block' }
        }))
      }
    });
  }
  render () {
    let { data, dataMock, imgShow, infoShow } = this.state;
    return (
      <div>
        文本:{this.state.txt}
        <br />
        {/* 数据:{data} */}
        <ul>
          {data.map((item, key) => {
            return (
              <li key={key}>{item.id},{item.name},{item.age},{item.sex}</li>
            )
          })}
        </ul>
        <br />
        {/* loading */}
        <img src={Img1} alt="1" style={imgShow} />
        <ul style={infoShow}>
          {dataMock.map((item, key) => {
            return (
              <li key={key}>{item.id},{item.name},{item.age},{item.sex}</li>
            )
          })}
        </ul>
      </div>
    )
  }
}
