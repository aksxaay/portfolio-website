import React from 'react'
import { ResponsiveSunburst } from '@nivo/sunburst'
import {data} from '../services/sunburst'
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
  render() {
    return (

    <div className='container mt-8 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full'>

      
        <div className='chart'>
            <h3>NIVO chart</h3>
            <ResponsiveSunburst
                data={data}
                margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
                id="name"
                value="loc"
                cornerRadius={2}
                borderColor={{ theme: 'background' }}
                colors={{ scheme: 'nivo' }}
                childColor={
                    {
                    from: 'color',
                    modifiers: [
                        [
                            'brighter',
                            0.1
                        ]
                    ]   
                }
                }
                enableArcLabels={true}
                arcLabelsSkipAngle={10}
                arcLabelsTextColor={{
                    from: 'color',
                    modifiers: [
                        [
                            'darker',
                            1.4
                        ]
                    ]
                }}
            />
        </div>
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
