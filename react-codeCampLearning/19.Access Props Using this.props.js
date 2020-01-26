// 使用this.props访问props

// The ES6 class component uses a slightly different convention to access props.
/* 
    传递ES6类组件


    Anytime you refer to a class component within itself, you use the this keyword. 

    在任何时候，只要您在内部引用类组件，就可以使用this关键字。
    To access props within a class component,
    要访问类里面的props
    you preface the code that you use to access it with this.
    用this来访问

    For example, if an ES6 class component has a prop called data, you write {this.props.data} in JSX.
    比如,一个es6类组件有一个data的prop
    在JSX里面就写,this.props.data

    表示类本身就有的属性

    表示这个data是类本身具有的一个属性
    instance实例
    Render an instance of the ReturnTempPassword component in the parent component ResetPassword. Here, give ReturnTempPassword a prop of tempPassword and assign it a value of a string that is at least 8 characters long. Within the child, ReturnTempPassword, access the tempPassword prop within the strong tags to make sure the user sees the temporary password.
    

 */

// 这个题有三个答案
// 这个题有三个答案
// 这个题有三个答案
// 这个题有三个答案
// 这个题有三个答案
// 这个题有三个答案
// 这个题有三个答案

class ReturnTempPassword extends React.Component {
    constructor(props) {
      super(props);
      this.props.tempPassword = "12345678";
    }
    render() {
      return (
          <div>
              { /* change code below this line */ }
              <p>Your temporary password is: <strong>
              {this.props.tempPassword}

              { this.props.tempPassword = "12345678"}
              </strong></p>
              { /* change code above this line */ }
          </div>
      );
    }
  };


  ReturnTempPassword.defaultProps = {
    tempPassword:'123454657'
  }
  
  
  class ResetPassword extends React.Component {
    constructor(props) {
      super(props);
  
    }
    render() {
      return (
          <div>
            <h2>Reset Password</h2>
            <h3>We've generated a new temporary password for you.</h3>
            <h3>Please reset this password from your account settings ASAP.</h3>
            { /* change code below this line */ }
    <ReturnTempPassword/>
            { /* change code above this line */ }
          </div>
      );
    }
  };
  