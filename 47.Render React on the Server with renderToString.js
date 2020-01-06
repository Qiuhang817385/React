// 到目前为止，你已经能够在客户端上渲染 React 组件，一般来说我们都是这么做的。然而，在一些用例中，在服务器上渲染一个 React 组件是有意义的。由于 React 是一个 JavaScript 视图库，所以使用 Node 让 JavaScript 运行在服务器上是可行的。事实上，React 提供了一个可用于此目的的renderToString()方法。


// 有两个关键原因可以解释为什么服务器上的渲染可能会在真实世界的应用程序中使用。首先，如果不这样做，你的 React 应用程序将包含一个代码量很少的 HTML 文件和一大堆 JavaScript，当它最初加载到浏览器时。这对于搜索引擎来说可能不太理想，因为它们试图为你的网页内容生成索引，以便人们可以找到你。如果在服务器上渲染初始 HTML 标记并将其发送到客户端，则初始页面加载的内容包含搜索引擎可以抓取的所有页面标记。其次，这创造了更快的初始页面加载体验，因为渲染的 HTML 代码量要比整个应用程序的 JavaScript 代码小。React 仍然能够识别你的应用并在初始加载后进行管理。


class App extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return <div/>
    }
  };
  
  // change code below this line
  ReactDOMServer.renderToString(<App/>)