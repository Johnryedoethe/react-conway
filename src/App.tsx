import './App.css'

import { Viewport } from './Viewport'

const generation = new Set<string>()

generation.add('0,0')
generation.add('1,1')
generation.add('4,7')

export function App() {
  return (
    <>
      <h1>Conway's Game of Life</h1>

      <Viewport generation={generation} />
    </>
  )
}
