import React from 'react'
import { ResponsiveSunburst } from '@nivo/sunburst'
import {data} from '../services/sunburst'

import * as d3 from 'd3'
// to use for tweakable values
// import config from './chart.config'


// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/sunburst

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.



class StackSunburst extends React.Component {

  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  componentDidMount() {
    this.drawChart();
    let accessToRef = d3.select(this.myRef.current)
  }

  drawChart(){
    const data = [ 8, 5, 13, 9, 12 ]

    const w = 500;
    const h = 400;

    const accessToRef = d3.select(this.myRef.current)
      .append("svg")
      .attr("width", w)
      .attr("height", h)
      .style("background-color", "#cccccc")
      .style("padding", 10)
      .style("margin-left", 10)



      accessToRef.selectAll("rect")
        .data(data)
        .enter()
        .append("rect")
        .attr("x", (d, i) => i*70)
        .attr("y", (d, i) => h - 10 * d)
        .attr("width", 65)
        .attr("height", (d, i) => d*10)
        .attr("fill", "tomato");

  }
    
  render() {
    return (
        <div className="container mt-8 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full"
            ref={this.myRef}>
              <div ref="rect">HEYA</div>
            
        </div>
    )
  }
    
}

export default StackSunburst
// export async function getStaticProps() {
//     console.log("inside getStaticProps()");
//     return {
//           props: {
//               data: data,
//           },
//     }
// }
