// react arrow function component.
import React from 'react'

// imports
import { Article, Brand, CTA, Feature, Navbar} from './components'
import { Blog, Features, Footer, Header, Possibility, WhatGPT3} from './container'


const App = () => {
  return (
    <div>
      <div className="App">
        <div className="gradient__bg">
          <Navbar />
          <Header />
        </div>
        <Brand />
        <WhatGPT3 />
        <Features />
        <Possibility />
        <CTA />
        <Blog />
        <Footer />
      </div>
    </div>
  )
}

export default App
