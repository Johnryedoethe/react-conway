import { useState } from 'react'
import './App.css'

import { generateNextGeneration } from './generation'
import { Viewport } from './Viewport'

export function App() {
  const [generation, setGeneration] = useState<Set<string>>(new Set([
    '5,5',
    '5,6',
    '5,4'
  ]))

  return (
    <>
      <h1>Conway's Game of Life</h1>

      <Viewport generation={generation} />

      <button onClick={() => setGeneration(generateNextGeneration(generation))}>
        Next Generation
      </button>
    </>
  )
}
