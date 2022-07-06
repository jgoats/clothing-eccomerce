import React from "react";
import { createRoot } from "react-dom/client";

export default class App extends React.Component {
    render() {
        return (
            <div>hello from react</div>
        )
    }
}

let app = document.getElementById("app");
const root = createRoot(app);
root.render(<App />)