type CellProps = {
  cell: string
}

const SIZE = 20

function Cell({cell}: CellProps) {
  const [x, y] = cell.split(',').map(Number)
  return (
    <div
      className="cell"
      style={{
        left: x * SIZE,
        top: y * SIZE
      }}
    />
  )
}

type ViewportProps = {
  generation: Set<string>
}

export function Viewport({generation}: ViewportProps) {
  return (
    <div className="viewport">
      {Array.from(generation).map((cell) => (
        <Cell key={cell} cell={cell} />
      ))}
    </div>
  )
}
