import * as React from "react";
import * as ReactDOM from "react-dom";
import { Hello } from "./windows/main/MainWindow";

ReactDOM.render(
    <Hello compiler="TypeScript" framework="React" />,
    document.getElementById("example")
);
