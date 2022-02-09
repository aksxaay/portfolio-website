
import * as All from '../components/export'

function HomePage() {
  return (
    <>
    <div>

      
    </div>
    {/* let's try code splitting */}
      <All.IndexPage/>
      <All.Banner/>
      <All.Navbar/>
      {/* <All.Hero/> */}
      {/* <All.StatCards/> */}
      {/* <All.Work/> */}
      {/* <All.Contact/> */}

    </>
  )
}

export default HomePage