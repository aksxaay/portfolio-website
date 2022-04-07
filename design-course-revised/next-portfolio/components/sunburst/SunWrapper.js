import { React } from 'react'
// import ReactDOM from "react-dom";
// import SunburstChart from "./SunburstChart.js";
// import Sunburst from "sunburst-chart";
import data from './data-color'

import dynamic from 'next/dynamic'

// SunburstChart
const DSunburstChart = dynamic(() => import('./SunburstChart'), { ssr: false })

const DSunburst = dynamic(() => import('sunburst-chart'), { ssr: false })

class SunWrapper extends React.Component {
  constructor() {
    super()
    this.myRef = React.createRef()
    this.state = {
      myChart: DSunburst().data(data),
    }
  }

  componentDidMount() {
    // set el height and width etc.
    DSunburst()
      .data(data)
      .label('name')
      .size('size')
      .color('color')
      .width('400')
      .tooltipContent((d, node) => `<i>${node.value}</i>`)(this.myRef.current)
  }

  render() {
    console.log('node', this.myRef)
    return (
      <div className="sample">
        <DSunburstChart ref={this.myRef} />
      </div>
    )
  }
}
export default SunWrapper
