import React from "react";
import ReactDOM from "react-dom";

const fname = "Utkarsh";
const lname = "Sharma"
const no = "7";

ReactDOM.render(
  <div>
    <h1>Hello World! {fname + " " + lname}</h1>
    <p>Your lucky number is: {no}</p>
  </div>,
  document.getElementById("root")
);

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
