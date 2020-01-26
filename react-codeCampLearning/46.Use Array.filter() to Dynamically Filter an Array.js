// 另一种方法是filter，它根据条件过滤数组的内容，然后返回一个新数组。例如，如果你有一个 users 数组，每个数组元素都有一个可以设置为true或false的online属性，你可以只过滤那些在线的用户：

// let onlineUsers = users.filter(user => user.online);

class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        users: [
          {
            username: 'Jeff',
            online: true
          },
          {
            username: 'Alan',
            online: false
          },
          {
            username: 'Mary',
            online: true
          },
          {
            username: 'Jim',
            online: false
          },
          {
            username: 'Sara',
            online: true
          },
          {
            username: 'Laura',
            online: true
          }
        ]
      }
    }
    render() {
      const usersOnline =this.state.users.filter(user=>user.online==true);
      const renderOnline = usersOnline.map((user,key)=>{
          return(
            <li key={key}>{user.username}</li>
          )
      }); 
      return (
         <div>
           <h1>Current Online Users:</h1>
           <ul>
             {renderOnline}
           </ul>
         </div>
      );
    }
  };