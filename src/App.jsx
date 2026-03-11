import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import DesbloqueioWhatsapp from './pages/DesbloqueioWhatsapp';
import Liminar48h from './pages/Liminar48h';
import Indenizacao from './pages/Indenizacao';
import AtendimentoImediato from './pages/AtendimentoImediato';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/desbloqueio-whatsapp-business" element={<DesbloqueioWhatsapp />} />
      <Route path="/liminar-48h" element={<Liminar48h />} />
      <Route path="/indenizacao-bloqueio" element={<Indenizacao />} />
      <Route path="/atendimento-imediato" element={<AtendimentoImediato />} />
    </Routes>
  );
}

export default App;
