import React, { Component } from 'react'
import { connect } from 'react-redux';
import axios from 'axios'
class AppRedux extends Component {
  constructor() {
    super();
  }

  render () {
    console.log("this.props", this.props);
    const { num, number, data } = this.props;
    console.log(num);
    return (
      <div>
        num1:{num}
        <br />
        number:{number}
        <br />
        <button onClick={this.props.handdleClickAjax}>获取数据</button>
        <br />
        axios得到的数据:{
          data.map((item, index) => {
            return (<li key={index}>{item.id}</li>)
          })
        }
        <br />
        <button onClick={this.props.handdleClickAdd}>+</button>
        <br />
        <button onClick={this.props.handdleClickSub}>-</button>
      </div>
    )
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handdleClickAdd: () => {
      const action1 = {
        type: 'ADD'
      }
      dispatch(action1)
    },
    handdleClickAjax () {
      axios.get("http://www.qiuhang.club:7300/mock/5e1c648a059ebf2c630e5369/example/text")
        .then((res) => {
          console.log(res.data.data);
          let dataRes = res.data.data;
          const action = {
            type: "AXIOS",
            dataRes
          }
          dispatch(action)
        })
        .catch((e) => {
          console.log(e.message());
        })
    },
    handdleClickSub: () => {

      const action = {
        type: "SUBUSER"
      }
      console.log("handdleClickSubaction", action);

      dispatch(action)
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log("mapStateToProps-state", state);
  console.log("state.users.number", state.users.number);
  // 执行完毕之后,reducer方面并没有返回dataRes,所以是undefined状态,如果reducer返回不同的数据,那么就需要加以判断
  // 执行完毕之后,reducer方面并没有返回dataRes,所以是undefined状态,如果reducer返回不同的数据,那么就需要加以判断
  // 执行完毕之后,reducer方面并没有返回dataRes,所以是undefined状态,如果reducer返回不同的数据,那么就需要加以判断
  // 执行完毕之后,reducer方面并没有返回dataRes,所以是undefined状态,如果reducer返回不同的数据,那么就需要加以判断
  return {
    num: state.costoms.num,
    number: state.users.number ? state.users.number : 0,
    data: state.users.dataRes ? state.users.dataRes : []
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppRedux)