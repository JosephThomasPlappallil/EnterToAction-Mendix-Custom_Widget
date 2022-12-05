import { Component, createElement } from "react";

import { HelloWorldSample } from "./components/HelloWorldSample";
import "./ui/EnterToAction.css";

export class EnterToAction extends Component {
    render() {
        return <HelloWorldSample sampleText={this.props.sampleText} />;
    }
}
