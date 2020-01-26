// 假设你正在跟踪组件中的几个条件，并且希望根据这些条件中的每一个来渲染不同的元素。如果你写了很多else if语句来返回稍微不同的 UI，你可能会写很多重复代码，这就留下了出错的空间

// {condition && <p>markup</p>}

// 如果condition为 true，则返回标记。如果 condition 为 false，操作将在判断condition后立即返回false，并且不返回任何内容。


class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        display: true
      }
      this.toggleDisplay = this.toggleDisplay.bind(this);
    }
    toggleDisplay() {
      this.setState({
        display: !this.state.display
      });
    }
    render() {
      // change code below this line
      return (
         <div>
           <button onClick={this.toggleDisplay}>Toggle  Display</button>         
          {this.state.display && <h1>Displayed!</h1>}
         </div>
      );
    }
  };
