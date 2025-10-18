import { useState } from 'react'

import { generateNextGeneration } from './generation'
import { Viewport } from './Viewport'

export function DemoPage() {
  const [generation, setGeneration] = useState<Set<string>>(new Set([
    '5,5',
    '5,6',
    '5,4'
  ]))

  return (
    <>
      <h2>Demo</h2>

      <Viewport generation={generation} />

      <button onClick={() => setGeneration(generateNextGeneration(generation))}>
        Next Generation
      </button>
    </>
  )
}
