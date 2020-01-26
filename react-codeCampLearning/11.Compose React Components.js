/* 
As the challenges continue to use more complex compositions with React components and JSX, there is one important point to note.
随着组件越来越复杂,有一个重要的需要注意的地方


在其他组件中呈现ES6风格的类组件与呈现您在前几个挑战中使用的简单组件没有什么不同。

Rendering ES6 style class components within other components is no different than rendering the simple components you used in the last 
few challenges. 


You can render 
            JSX elements, 
            stateless functional components, and 
            ES6 class components within other components.
            您可以在其他组件中呈现JSX元素、无状态功能组件和ES6类组件。
 */
class Fruits extends React.Component {
    constructor(props) {
    super(props);
    }
    render() {
    return (
        <div>
        <h2>Fruits:</h2>
        {/* change code below this line */}
        <NonCitrus />
        <Citrus />
        {/* change code above this line */}
        </div>
    );
    }
}

class TypesOfFood extends React.Component {
    constructor(props) {
    super(props);
    }
    render() {
    return (
        <div>
        <h1>Types of Food:</h1>
        {/* change code below this line */}
        <Fruits />
        {/* change code above this line */}
        <Vegetables />
        </div>
    );
    }
}

// Types of Food:
// Fruits:
//  Non-Citrus:
// Apples
// Blueberries
// Strawberries
// Bananas
//  Citrus:
// Lemon
// Lime
// Orange
// Grapefruit
//  Vegetables:
// Brussel Sprouts
// Broccoli
// Squash