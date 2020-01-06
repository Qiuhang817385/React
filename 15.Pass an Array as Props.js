//The last challenge demonstrated  how to pass information from a parent component to a child component as props or properties.

// This challenge looks at how arrays can be passed as props
/* 
    现在来展示怎么传递数组作为props

    To pass an array to a JSX element, it must be treated as JavaScript and wrapped in curly braces.

    curly braces花括号
    <ParentComponent>
        <ChildComponent colors={["green", "blue", "red"]} />
    </ParentComponent>
 */

/* 
    The child component then has access to the array property colors. Array methods such as join() can be used when accessing the property
    现在可以用join来出来这个属性

    const ChildComponent = (props) => <p>{props.colors.join(', ')}</p>

    This will join all colors array items into a comma separated string and produce: <p>green, blue, red</p>
    渲染的结果
    <p>green, blue, red</p>
 */
/* 
There are List and ToDo components in the code editor. When rendering each List from the ToDo component, pass in a tasks property assigned to an array of to-do tasks, for example ["walk dog", "workout"]. Then access this tasks array in the List component, showing its value within the p element. Use join(", ") to display the props.tasksarray in the p element as a comma separated list. Today's list should have at least 2 tasks and tomorrow's should have at least 3 tasks.
 */

// 这里注意了,每次给子组件传递的值不一样,但是在子组件里面的处理的值是一样一样的
// 这里注意了,每次给子组件传递的值不一样,但是在子组件里面的处理的值是一样一样的
// 这里注意了,每次给子组件传递的值不一样,但是在子组件里面的处理的值是一样一样的
// 这里注意了,每次给子组件传递的值不一样,但是在子组件里面的处理的值是一样一样的
// 这里注意了,每次给子组件传递的值不一样,但是在子组件里面的处理的值是一样一样的

const List = props => {
  {
    /* change code below this line */
  }
  return <p>{props.tasks.join(", ")}</p>;
  {
    /* change code above this line */
  }
};

class ToDo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>To Do Lists</h1>
        <h2>Today</h2>
        {/* change code below this line */}
        <List tasks={["walk dog", "workout"]} />
        <h2>Tomorrow</h2>
        <List tasks={["sec", "fir", "three"]} />
        {/* change code above this line */}
      </div>
    );
  }
}
