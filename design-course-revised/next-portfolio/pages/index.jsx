
import * as All from '../components/export'
// import {data} from '../services/sunburst'


// import SunWrapper from "../components/sunburst/SunWrapper";


// ssr disabled for nivo charting
import dynamic from 'next/dynamic'

const DynamicStackSunWrapper = dynamic(
  () => import('../components/sunburst/SunWrapper'),
  { ssr: false }
)

const DynamicStackSunburst = dynamic(
    () => import('../components/StackSunburst'),
    { ssr: false }
  )

function HomePage() {
  return (
    <>
    <body className="bg-body text-white font-poppins pb-6">      
      <All.IndexPage/>
      <All.Banner/>
      <All.Navbar/>
      <All.Hero/>
      <All.StatCards/>
      {/* <DynamicStackSunburst data={data}/> */}
      <DynamicStackSunWrapper/>
      <All.Work/>
      <All.Clients/>
      <All.Contact/>

    </body>
    </>
  )
}

export default HomePage