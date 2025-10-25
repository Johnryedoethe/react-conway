export function generateNextGeneration(currentGeneration: Set<string>): Set<string> {
  const neighborCounts = new Map<string, number>()
  currentGeneration.forEach((cell) => {
    const [x, y] = cell.split(',').map(Number)

    for (let dx = -1; dx <= 1; dx++) {
      for (let dy = -1; dy <= 1; dy++) {
        if (dx === 0 && dy === 0) {
          continue
        }

        const neighbor = `${x + dx},${y + dy}`
        const count = neighborCounts.get(neighbor) || 0
        neighborCounts.set(neighbor, count + 1)
      }
    }
  })

  const nextGeneration = new Set<string>()
  neighborCounts.forEach((count, cell) => {
    if (count === 3 || (count === 2 && currentGeneration.has(cell))) {
      nextGeneration.add(cell)
    }
  })

  // console.log(currentGeneration)
  // console.log(neighborCounts)
  // console.log(nextGeneration)

  return nextGeneration
}
