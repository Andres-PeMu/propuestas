import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { ProposalPage } from '@/pages/ProposalPage'
import { NotFoundPage } from '@/pages/NotFoundPage'
import { EmpatiaProposalPage } from '@/empatia/pages/EmpatiaProposalPage'
import { RutasBusProposalPage } from '@/rutas-bus/pages/RutasBusProposalPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/404" replace />} />
        <Route
          path="/p/empatia-esp-gestion-financiera"
          element={<EmpatiaProposalPage />}
        />
        <Route
          path="/p/agencia-viajes-bus-reservas"
          element={<RutasBusProposalPage />}
        />
        <Route path="/p/:slug" element={<ProposalPage />} />
        <Route path="/404" element={<NotFoundPage />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
