
import React, { Component } from 'react'
// 使用mock.js
// 联调的时候需要删除这个mockjs
import Img1 from './../../img/1.gif';
export default class componentName extends Component {
  constructor() {
    // 继承的是3个属性
    super();
    this.state = {
      txt: "",
      data: [],
      dataMock: [],
      imgShow: { display: 'block' },
      infoShow: { display: 'none' },
      msg: ""
    }
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount () {
    //fetch
    fetch("mock/data.html")
      // resolve的情况下会自动调用
      // fetch必须有这一层,res.text()作为下一个的参数,也就是说,axios是一个then,一个catch,而fetch是两个then,一个catch
      .then((res) => {
        // new Promise(resolve(txt))
        console.log(res);
        // 下面的都是方法,text方法会返回一个promise对象
        /* 
          Response
          type: "basic"
          url: "http://localhost:8080/mock/data.html"
          redirected: false
          status: 200
          ok: true
          statusText: "OK"
          headers: Headers {}
          body: (...)
          bodyUsed: true
          __proto__: Response
         */

        return res.text()
      }).then((txt) => { this.setState({ txt }) }).catch((e) => { console.log(e.mes); })



    // fetch("mock/data.json").then((res) => {
    fetch("http://www.qiuhang.club:7300/mock/5e1c648a059ebf2c630e5369/example/text").then((res) => {
      return res.json()
    }).then((data) => {
      this.setState({
        data: data.data,
        imgShow: { display: 'none' },
        infoShow: { display: 'block' }
      })
    }).catch((e) => {
      e.message()
    })
  }
  // 注册案例
  handleClick () {
    let form = document.querySelector("form");
    // 二进制编码
    const formdata = new FormData(form);
    fetch("http://www.qiuhang.club:7300/mock/5e1c648a059ebf2c630e5369/example/testPost", {
      method: "POST",
      body: formdata
    })
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        console.log(json);
        this.setState({
          // 结合reactrouter路由来做,成功后判断跳转到指定的页面
          msg: json.message
        })
      })
      .catch((e) => {
        e.message()
      })
  }
  render () {
    let { data, dataMock, imgShow, infoShow, msg } = this.state;
    return (
      <div>
        {/* 数据:{data} */}
        {/* loading */}
        文本:{this.state.txt}
        <img src={Img1} alt="1" style={imgShow} />
        <br />
        {/* fetch获取普通json fetch获取普通json fetch获取普通json fetch获取普通json*/}
        <ul style={infoShow}>
          {data.map((item, key) => {
            return (
              <li key={key}>{item.id},{item.name},{item.age},{item.sex}</li>
            )
          })}
        </ul>
        {/* 注册案例注册案例注册案例注册案例注册案例注册案例 */}
        {/* 
          1.表单序列化
         */}
        <br />
        <div>
          <form action="javascript:;">
            用户名:<input type="text" name="userName" /><br />
            密码:<input type="password" name="pwd" /><br />
            头像:<input type="file" name="face"></input><br />
            <button onClick={this.handleClick}>注册</button>
          </form>
          <span>{msg}</span>
        </div>
      </div>
    )
  }
}
