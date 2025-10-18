import { Link, Outlet } from 'react-router'
import './App.css'

export function Layout() {
  return (
    <>
      <header>
        <h1>
          <Link to="/">
            Conway's Game of Life
          </Link>
        </h1>

        <nav>
          <ul className="nav-list">
            <li>
              <Link to="/">Demo</Link>
            </li>
            <li>
              <Link to="/rules">Rules</Link>
            </li>
            <li>
              <Link to="/ways-to-implement">Ways to Implement</Link>
            </li>
            <li>
              <Link to="/how-demo-was-implemented">How Demo Was Implemented</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </>
  )
}
