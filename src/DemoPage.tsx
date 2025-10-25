import { useState } from 'react'

import { generateNextGeneration } from './generation'
import { Viewport } from './Viewport'

const samples = {
  blinker: new Set<string>([
    '5,5',
    '5,6',
    '5,4'
  ]),
  toad: new Set<string>([
    '5,5',
    '5,6',
    '5,7',
    '6,4',
    '6,5',
    '6,6'
  ]),
  glider: new Set<string>([
    '5,5',
    '6,6',
    '6,7',
    '5,7',
    '4,7'
  ]),
  pulsar: new Set<string>([
    '7,5', '8,5', '9,5', '13,5', '14,5', '15,5',
    '5,7', '10,7', '12,7', '17,7',
    '5,8', '10,8', '12,8', '17,8',
    '5,9', '10,9', '12,9', '17,9',
    '7,10', '8,10', '9,10', '13,10', '14,10', '15,10',
    '7,12', '8,12', '9,12', '13,12', '14,12', '15,12',
    '5,13', '10,13', '12,13', '17,13',
    '5,14', '10,14', '12,14', '17,14',
    '5,15', '10,15', '12,15', '17,15',
    '7,17', '8,17', '9,17', '13,17', '14,17', '15,17'
  ])
}

export function DemoPage() {
  const [generation, setGeneration] = useState<Set<string>>(samples.pulsar)
  const [autoplayIntervalId, setAutoplayIntervalId] = useState<number | null>(null) 

  const toggleAutoplay = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const intervalId = setInterval(
        () => {
          setGeneration((currentGeneration) => generateNextGeneration(currentGeneration))
        },
        500
      )
      setAutoplayIntervalId(intervalId)
    } else {
      if (autoplayIntervalId) {
        clearInterval(autoplayIntervalId)
        setAutoplayIntervalId(null)
      }
    }
  }

  return (
    <>
      <h2>Demo</h2>

      <Viewport generation={generation} />

      <button onClick={() => setGeneration(samples.blinker)}>
        Load Blinker
      </button>
      <button onClick={() => setGeneration(samples.toad)}>
        Load Toad
      </button>
      <button onClick={() => setGeneration(samples.glider)}>
        Load Glider
      </button>
      <button onClick={() => setGeneration(samples.pulsar)}>
        Load Pulsar
      </button>

      <br />
      <button onClick={() => setGeneration(generateNextGeneration(generation))}>
        Next Generation
      </button>
      <input type="checkbox" onChange={toggleAutoplay} />        
      <label>Autoplay</label>
    </>
  )
}
