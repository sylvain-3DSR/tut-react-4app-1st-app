// rafce : create a a basic react template

import { Footer, Blog, Possibility, Features, WhatGPT3, Header} from './containers'
import { CTA, Brand, navbar, Navbar } from './components'
import './App.css'


const App = () => {
  return (
    <div className="App">
        <div className ="gradient_bg">
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
  )
}

export default App