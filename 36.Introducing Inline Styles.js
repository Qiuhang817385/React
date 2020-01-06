// Introducing Inline Styles
// 如何对在 React 中创建的 JSX 元素进行风格化。你可能知道，由于将 class 应用于 JSX 元素的方式与 HTML 中的使用并不完全相同。


/* 
    1.如果从样式表导入样式，它就没有太大的不同。使用className属性将 class 应用于 JSX 元素

    2.另一种选择是使用内联样式

    JSX 差异
    一般
    <div style="color: yellow; font-size: 16px">Mellow Yellow</div>
    JSX
    传递一个JS对象
    <div style={{color: "yellow", fontSize: 16}}>Mellow Yellow</div>

    连字符
    驼峰命名法


 */
class Colorful extends React.Component {
    render() {
      const st1 = {
        color:"red",
        fontSize:72
      }
      return (
        <div style={st1}>Big Red</div>
      );
    }
  };
  