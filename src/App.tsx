import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { ProposalPage } from '@/pages/ProposalPage'
import { NotFoundPage } from '@/pages/NotFoundPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/404" replace />} />
        <Route path="/p/:slug" element={<ProposalPage />} />
        <Route path="/404" element={<NotFoundPage />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
