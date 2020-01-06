// componentWillMount()

// componentDidMount()

// componentWillReceiveProps()

// shouldComponentUpdate()

// componentWillUpdate()

// componentDidUpdate()

// componentWillUnmount()

// 当组件被挂载到 DOM 时，componentWillMount()方法在render()方法之前被调用。

class MyComponent extends React.Component {
    constructor(props) {
      super(props);
    }
    componentWillMount() {
      // change code below this line
      console.log('123')
      // change code above this line
    }
    render() {
      return <div />
    }
  };