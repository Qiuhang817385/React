
import React, { Component } from 'react';
import axios from 'axios';
// 使用mock.js
// 联调的时候需要删除这个mockjs 
import '../components/mock/dataMockPost'
import '../components/mock/dataMock'
import '../components/mock/data'
import Img1 from './../../img/1.gif';

export default class componentName extends Component {
  constructor() {
    // 继承的是3个属性
    super();
    this.state = {
      txt: "123",
      data: [],
      data2: [],
      dataMock: [],
      imgShow: { display: 'block' },
      infoShow: { display: 'none' },
      formShow: { display: 'block' },
      msg: ""
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
  }
  componentDidMount () {
    // 实验1,
    axios.get("/dignosis")
      // 带参数
      // axios.get("/dignosis",{{params:{name:"susan"}}})
      .then((res) => {
        console.log(res.data.data);
        this.setState({
          data: res.data.data,
          imgShow: { display: 'none' },
          infoShow: { display: 'block' }
        })
      })
      .catch((e) => {
        console.log('====================================');
        console.log(e.message);
        console.log('====================================');
      });
    // 实验2,post
    axios.post("/data.php", {
      name: "赵四",
      age: 111
    })
      .then((res) => {
        console.log(res.data.data);
        this.setState({
          data2: res.data.data,
          imgShow: { display: 'none' },
          infoShow: { display: 'block' }
        })
      })
      .catch((e) => {
        console.log('====================================');
        console.log(e.message);
        console.log('====================================');
      });
    // 实验3登录验证
  }
  handleFocus () {
    this.setState({
      msg: "",
    })
  }
  handleClick () {
    let userName = this.refs.userName.value.trim();
    let pwd = this.refs.pwd.value.trim()
    axios.post("check.php", {
      userName,
      pwd
    })
      .then((res) => {
        console.log(res.data.data);
        if (res.data.status === '10001') {
          this.setState({
            msg: res.data.msg,
            formShow: { display: 'none' }
          })
        } else {
          this.setState({
            msg: res.data.msg,
          })
        }

      })
      .catch((e) => {
        console.log('====================================');
        console.log(e.message);
        console.log('====================================');
      });
  }
  render () {
    let { data, dataMock, imgShow, infoShow, msg, data2, formShow } = this.state;
    return (
      <div>
        {/* 数据:{data} */}
        {/* loading */}
        文本:{this.state.txt}
        <img src={Img1} alt="1" style={imgShow} />
        <br />
        <ul style={infoShow}>
          {data.map((item, key) => {
            return (
              <li key={key}>{item.id},{item.name},{item.age},{item.sex}</li>
            )
          })}
        </ul>
        <br />
        <ul style={infoShow}>
          {data2.map((item, key) => {
            return (
              <li key={key}>{item.id},{item.name},{item.age},{item.sex}</li>
            )
          })}
        </ul>
        {/* 
          登录实验
         */}
        <br />
        <div>
          <form action="javascript:;" style={formShow}>
            {/* 这会儿还是虚拟dom */}
            用户名:<input type="text" name="userName" ref="userName" onFocus={this.handleFocus} /><br />
            密码:<input type="password" name="pwd" ref="pwd" /><br />
            头像:<input type="file" name="face"></input><br />
            <button onClick={this.handleClick}>注册</button>
          </form>
          <span>{msg}</span>
        </div>
      </div>
    )
  }
}
