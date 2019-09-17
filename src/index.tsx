import * as React from "react";
import * as ReactDOM from "react-dom";

//@ts-ignore
import HelloWorld from './components/HelloWorld/index.tsx';

const app = document.getElementById("app");

ReactDOM.render(<HelloWorld />, app);