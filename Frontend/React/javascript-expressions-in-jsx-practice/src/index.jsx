//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
import React from "react";
import reactDom from "react-dom";


const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<div>
    <p> Hey this is p1. </p>
    <p> Hey this is p2. </p>
  </div>);