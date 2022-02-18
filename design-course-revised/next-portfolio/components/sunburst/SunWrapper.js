import React from "react";
// import ReactDOM from "react-dom";
import SunburstChart from "./SunburstChart.js";
import Sunburst from "sunburst-chart";
import data from "./data-color";

class SunWrapper extends React.Component {
  constructor() {
    super();
    this.myRef = React.createRef();
    this.state = {
      myChart: Sunburst().data(data)
    };
  }

  componentDidMount() {
    // set el height and width etc.
    Sunburst()
      .data(data)
      .label("name")
      .size("size")
      .color("color")
      .width("400")
      .tooltipContent((d, node) => `<i>${node.value}</i>`)(this.myRef.current);
  }

  render() {
    console.log("node", this.myRef);
    return (
      <div>
        <SunburstChart ref={this.myRef} />
      </div>
    );
  }
}
export default SunWrapper;
