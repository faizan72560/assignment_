import React from 'react'
import Navbar from './Components/Navbar'
import Left from './Components/Left'
import Right from './Components/Right'

const App = () => {
  return (
    <div>
      <Navbar/>
      <div className='d-flex justify-content-center' style={{gap:"10vw"}}>
        <Left/>
        {/* <Right/> */}


      </div>

    </div>
  )
}

export default App