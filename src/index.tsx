import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "./components/Hello";

const rootProps = {compiler:"TypeScript",framework:"React"};

ReactDOM.render(
    <Hello {...rootProps} />,
    document.getElementById("example")
);
