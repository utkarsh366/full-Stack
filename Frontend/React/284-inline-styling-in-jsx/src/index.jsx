import React from "react";
import ReactDOM from "react-dom";

const customStyle ={
    color: "red";
    fontSize: "20px";
    border: "1px solid black";
    padding: "10px";
};
ReactDOM.render(<h1 style={customStyle}>Hello World!</h1>, document.getElementById("root"));


// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
react DOMException