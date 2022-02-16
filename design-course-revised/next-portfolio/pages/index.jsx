
import * as All from '../components/export'

// ssr disabled for nivo charting
import dynamic from 'next/dynamic'

const DynamicComponentWithNoSSR = dynamic(
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
      
      
      <DynamicComponentWithNoSSR/>
      <style jsx global>{`
            // body {
            //     height: 100vh;
            //     width: 100vw;
            //     display: grid;
            //     text-align: center;
            //     justify-content: center;
            //     align-items: center;
            // }

            .chart {
              height:50vh;
              width:60vw;
              background: white;
              box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
              transition: 0.3s;
              }

            .chart:hover {
              box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
            }
              
              
        `}</style>
        
      <All.Work/>
      <All.Clients/>
      <All.Contact/>

    </body>
    </>
  )
}

export default HomePage