
import * as All from '../components/export'

function HomePage() {
  return (
    <>
    <body className="bg-body text-white font-poppins pb-6">

      
      {/* let's try code splitting */}
      <All.IndexPage/>
      <All.Banner/>
      <All.Navbar/>
      <All.Hero/>
      {/* <All.StatCards/> */}
      {/* <All.Work/> */}
      {/* <All.Contact/> */}

    </body>
    </>
  )
}

export default HomePage