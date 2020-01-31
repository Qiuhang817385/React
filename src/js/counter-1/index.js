import React, { Component } from 'react'
import { connect } from 'react-redux';
import axios from 'axios'
class AppRedux extends Component {
  constructor() {
    super();
    // this.handdleClickAdd = this.handdleClickAdd.bind(this);
    // this.handdleClickSub = this.handdleClickSub.bind(this);
    // this.handdleClickAjax = this.handdleClickAjax.bind(this);
  }

  render () {
    console.log("props", this.props);
    const { num, num2, data } = this.props;
    console.log(num);
    return (
      <div>
        num1:{num}
        <br />
        num2:{num2}
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
    handdleClickSub: () => {
      const action2 = {
        type: "SUB2"
      }
      dispatch(action2)
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
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log("mapStateToProps", state);
  console.log("state.users.num2", state.users);
  return {
    num: state.costoms.num,
    num2: state.users.number,
    data: state.users.dataRes
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppRedux)