// 程序员在应用程序运行时之前无法知道其 state，因为这在很大程度上取决于用户与该程序的交互。程序员需要提前编写代码来正确处理未知状态。在 React 中使用Array.map()阐明了这个概念。


const textAreaStyles = {
    width: 235,
    margin: 5
  };
  
  class MyToDoList extends React.Component {
    constructor(props) {
      super(props);
      // change code below this line
      this.state = {
        userInput:'',
        toDoList:[]
      }
      // change code above this line
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChange = this.handleChange.bind(this);
    }
    handleSubmit() {
      const itemsArray = this.state.userInput.split(',');
      this.setState({
        toDoList: itemsArray
      });
    }
    handleChange(e) {
      this.setState({
        userInput: e.target.value
      });
    }
    render() {
      const items = this.state.toDoList.map((item)=>{
        return (
          <li>{item}</li>
        )
      }); 
      return (
        <div>
          <textarea
            onChange={this.handleChange}
            value={this.state.userInput}
            style={textAreaStyles}
            placeholder="Separate Items With Commas" /><br />
          <button onClick={this.handleSubmit}>Create List</button>
          <h1>My "To Do" List:</h1>
          <ul>
            {items}
          </ul>
        </div>
      );
    }
  };