import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'

import { Layout } from './Layout.tsx'
import { DemoPage } from './DemoPage.tsx'
import { RulesPage } from './RulesPage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<DemoPage />} />
          <Route path="/rules" element={<RulesPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
