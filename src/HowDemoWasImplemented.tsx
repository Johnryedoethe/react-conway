export function HowDemoWasImplemented() {
  return (
    <>
      <h2>How the demo was implemented</h2>

      <p>
        The demo is implemented using React for the user interface and TypeScript for type safety. The core logic of Conway's Game of Life is encapsulated in a function that generates the next generation of cells based on the current generation.
      </p>

      <p>
        The grid is represented using a Set to store the coordinates of live cells, which allows for efficient lookups and updates. Each cell's position is represented as a string in the format "x,y".
      </p>

      <p>
        The Viewport component is responsible for rendering the grid, where each live cell is displayed as a div positioned according to its coordinates. The DemoPage component manages the state of the current generation and provides a button to advance to the next generation by invoking the generation function.
      </p>
    </>
  )
}
