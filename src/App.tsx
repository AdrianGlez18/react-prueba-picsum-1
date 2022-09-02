import { useState } from 'react'
import Footer from './components/Footer'
import RandomImage from './components/RandomImage'
import Timer from './components/Timer'

function App() {

  return (
    <div className="App flex flex-col min-h-screen w-screen justify-center items-center content-center dark:bg-[#2C3333]">
     <Timer/>
     <RandomImage/>
     <Footer/>
    </div>
  )
}

export default App
