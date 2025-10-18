import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'

import { Layout } from './Layout.tsx'
import { DemoPage } from './DemoPage.tsx'
import { RulesPage } from './RulesPage.tsx'
import { WaysToImplementPage } from './WaysToImplementPage.tsx'
import { HowDemoWasImplemented } from './HowDemoWasImplemented.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<DemoPage />} />
          <Route path="/rules" element={<RulesPage />} />
          <Route path="/ways-to-implement" element={<WaysToImplementPage />} />
          <Route path="/how-demo-was-implemented" element={<HowDemoWasImplemented />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
