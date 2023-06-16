import { useState } from 'react'
import './App.css'
import Head from './componets/Head'
import Projects from './componets/Projects'

function App() {


  return (
    <div>
      <Head />
      <div className='divisor'></div>
      <Projects />
    </div>
  )
}

export default App
