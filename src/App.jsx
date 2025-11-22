import { useState } from 'react'
import TetheredFlow from './TetheredFlow'
import CanyonMultiLayerFlows from './CanyonMultiLayerFlows'
import MetaAnimation from './MetaAnimation'
import Dropdown from './Dropdown'
import './App.css'

function App() {
  const [currentAnimation, setCurrentAnimation] = useState('meta-animation')

  const renderAnimation = () => {
    switch (currentAnimation) {
      case 'tethered-flow':
        return <TetheredFlow />
      case 'canyon-multi-layer':
        return <CanyonMultiLayerFlows />
      case 'meta-animation':
        return <MetaAnimation />
      default:
        return <MetaAnimation />
    }
  }

  return (
    <div className="App">
      <a href="https://neiltthomas.com" className="site-title" target="_blank" rel="noopener noreferrer">
        neiltthomas.com
      </a>
      <Dropdown onSelect={setCurrentAnimation} />
      {renderAnimation()}
    </div>
  )
}

export default App
